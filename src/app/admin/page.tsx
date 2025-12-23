'use client';
import { useEffect, useMemo, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

/* ================= CONFIG ================= */

const WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbx8iD21x0fN--WrNvJT8TZcpNyWN7B9Bp2LV1HUJq-bxb_frRRVeKDqIGRDz8Ies_V9-Q/exec';

type Row = [string, string, string, 'IN' | 'OUT'];
type ViewMode = 'TODAY' | 'WEEK' | 'MONTH' | 'YEAR';
type PeriodView = 'SUMMARY' | 'DETAIL';

const STANDARD_IN = '09:00';

/* ================= UTILS ================= */

function isOnTime(date: Date) {
  const [h, m] = STANDARD_IN.split(':').map(Number);
  const std = new Date(date);
  std.setHours(h, m, 0, 0);
  return date <= std;
}

function isWeekend(d: Date) {
  return d.getDay() === 0 || d.getDay() === 6;
}

function getWeekKey(d: Date) {
  const x = new Date(d);
  x.setDate(d.getDate() - d.getDay());
  x.setHours(0, 0, 0, 0);
  return x.toDateString();
}

function getMonthKey(d: Date) {
  return `${d.getFullYear()}-${d.getMonth() + 1}`;
}

function getYearKey(d: Date) {
  return d.getFullYear();
}

function getWeekNumber(d: Date) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

function getWeekKeyFromYearWeek(yearWeek: string) {
  const [y, w] = yearWeek.split('-W').map(Number);
  const d = new Date(y, 0, 1 + (w - 1) * 7);
  return getWeekKey(d);
}

/* ================= COMPONENT ================= */

export default function AttendancePage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [view, setView] = useState<ViewMode>('TODAY');
  const [periodView, setPeriodView] = useState<PeriodView>('SUMMARY');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // cho TODAY
  const [selectedWeek, setSelectedWeek] = useState<string>(() => {
    const d = new Date();
    return `${d.getFullYear()}-W${getWeekNumber(d)}`;
  });
  const [selectedMonth, setSelectedMonth] = useState<string>(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  });
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  function getWorkingDaysOfPeriod(view: ViewMode) {
    let start: Date;
    let end: Date;

    const today = new Date();
    today.setHours(23, 59, 59, 999);

    if (view === 'WEEK') {
      const d = new Date(getWeekKeyFromYearWeek(selectedWeek));
      start = new Date(d);
      start.setDate(d.getDate() + 1); // Thứ 2
      end = new Date(start);
      end.setDate(start.getDate() + 4); // Thứ 6
    } else if (view === 'MONTH') {
      const [y, m] = selectedMonth.split('-').map(Number);
      start = new Date(y, m - 1, 1);
      end = new Date(y, m, 0);
    } else if (view === 'YEAR') {
      start = new Date(selectedYear, 0, 1);
      end = new Date(selectedYear, 11, 31);
    } else {
      return [];
    }

    /** 🚫 QUAN TRỌNG: không cho vượt quá hôm nay */
    if (end > today) end = today;

    const days: string[] = [];
    const d = new Date(start);

    while (d <= end) {
      if (!isWeekend(d)) {
        days.push(d.toDateString());
      }
      d.setDate(d.getDate() + 1);
    }

    return days;
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(WEB_APP_URL);
        const text = await res.text();
        setRows(JSON.parse(text).data || []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ================= COMMON ================= */

  const keyword = search.toLowerCase();
  const members = useMemo(() => [...new Set(rows.map((r) => r[0]))], [rows]);
  const today = selectedDate;

  /* ================= TODAY ================= */

  const todayMap = useMemo(() => {
    const map: any = {};
    rows.forEach(([name, time, , type]) => {
      const d = new Date(time);
      if (
        d.getDate() !== today.getDate() ||
        d.getMonth() !== today.getMonth() ||
        d.getFullYear() !== today.getFullYear()
      )
        return;

      map[name] ??= {};
      type === 'IN' ? (map[name].in = d) : (map[name].out = d);
    });
    return map;
  }, [rows, selectedDate]);

  const overview = useMemo(() => {
    let onTime = 0,
      late = 0;

    Object.values(todayMap).forEach((v: any) => {
      if (v.in) isOnTime(v.in) ? onTime++ : late++;
    });

    return {
      total: members.length,
      checkedIn: Object.keys(todayMap).length,
      working: Object.values(todayMap).filter((v: any) => v.in && !v.out)
        .length,
      checkedOut: Object.values(todayMap).filter((v: any) => v.out).length,
      absent: members.length - Object.keys(todayMap).length,
      onTime,
      late,
    };
  }, [todayMap, members]);

  const todayTable = useMemo(() => {
    return members.map((name) => {
      const r = todayMap[name];
      if (!r) return { name, status: 'ABSENT' };

      if (r.in && !r.out) return { name, in: r.in, status: 'NO_OUT' };

      if (r.in && r.out) {
        const hours = (r.out.getTime() - r.in.getTime()) / 36e5;
        return {
          name,
          in: r.in,
          out: r.out,
          hours: hours.toFixed(1),
          status: isOnTime(r.in) ? 'ON_TIME' : 'LATE',
        };
      }
    });
  }, [members, todayMap]);

  /* ================= PERIOD DATA ================= */

  const periodData = useMemo(() => {
    const now = new Date();
    const map: any = {};

    rows.forEach(([name, time, , type]) => {
      const d = new Date(time);
      if (isWeekend(d)) return;

      const ok =
        view === 'WEEK'
          ? getWeekKey(d) === getWeekKeyFromYearWeek(selectedWeek)
          : view === 'MONTH'
            ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}` ===
              selectedMonth
            : view === 'YEAR'
              ? d.getFullYear() === selectedYear
              : false;

      if (!ok) return;

      const day = d.toDateString();
      map[name] ??= {};
      map[name][day] ??= { ins: [], outs: [] };

      type === 'IN' ? map[name][day].ins.push(d) : map[name][day].outs.push(d);
    });

    return map;
  }, [rows, view, selectedWeek, selectedMonth, selectedYear]);

  /* ================= UI ================= */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('❌ Sai tài khoản hoặc mật khẩu');
    }
  }

  const overviewChartData = [
    { name: 'Check-in', value: overview.checkedIn },
    { name: 'Đang làm', value: overview.working },
    { name: 'Check-out', value: overview.checkedOut },
    { name: 'Vắng', value: overview.absent },
  ];

  const pieColors = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626'];
  const topAbsentChartData = useMemo(() => {
    if (view === 'TODAY') return [];

    return members
      .map((name) => {
        const daysWorked = periodData[name] || {};
        const workingDays = getWorkingDaysOfPeriod(view);

        let work = 0;
        let late = 0;

        Object.values(daysWorked).forEach((d: any) => {
          if (!d.ins.length) return;
          work++;
          if (!isOnTime(new Date(Math.min(...d.ins)))) late++;
        });

        const absent = Math.max(workingDays.length - work, 0);

        return { name, work, late, absent };
      })
      .sort((a, b) => b.absent - a.absent)
      .slice(0, 5);
  }, [members, periodData, view]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      {!isLoggedIn ? (
        <div
          className="min-h-screen flex items-center justify-center
                bg-gradient-to-br from-[#f8fbff] via-[#f9fafb] to-[#eef3ff]"
        >
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md rounded-3xl
               bg-white/80 backdrop-blur-xl
               border border-white/60
               px-10 py-12 space-y-8
               shadow-[0_30px_80px_-20px_rgba(30,64,175,0.25)]"
          >
            {/* Brand */}
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Sign in
              </h1>
              <p className="text-sm text-gray-500">
                Access your intelligent dashboard
              </p>
            </div>

            {/* Username */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full rounded-xl
                   bg-white/70
                   border border-gray-200
                   px-4 py-3.5
                   text-gray-900 placeholder-gray-400
                   focus:outline-none
                   focus:ring-4 focus:ring-blue-500/20
                   focus:border-blue-500
                   transition-all"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl
                   bg-white/70
                   border border-gray-200
                   px-4 py-3.5
                   text-gray-900 placeholder-gray-400
                   focus:outline-none
                   focus:ring-4 focus:ring-blue-500/20
                   focus:border-blue-500
                   transition-all"
              />
            </div>

            {/* Error */}
            {loginError && (
              <div
                className="rounded-xl
                      bg-red-50/80 backdrop-blur
                      border border-red-200
                      text-red-600 text-sm
                      px-4 py-3"
              >
                {loginError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-2xl
                 bg-gradient-to-r from-blue-600 to-indigo-600
                 py-3.5
                 text-white font-semibold
                 shadow-lg shadow-blue-600/30
                 hover:shadow-xl hover:shadow-blue-600/40
                 hover:translate-y-[-1px]
                 active:translate-y-0
                 transition-all
                 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              Sign in
            </button>

            {/* Footer */}
            <div className="text-center text-xs text-gray-400">
              Demo account
              <span className="mx-1 text-gray-500">•</span>
              <span className="font-medium text-gray-600">admin / admin</span>
            </div>
          </form>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-6">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-800">
              📊 Dashboard Chấm Công
            </h2>
          </div>
          {/* CHARTS */}
          {view === 'TODAY' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* BAR CHART */}
              <div className="bg-white rounded-xl shadow p-4 lg:col-span-2">
                <h3 className="font-semibold text-gray-700 mb-3">
                  📊 Trạng thái hôm nay
                </h3>
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={overviewChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* PIE CHART */}
              <div className="bg-white rounded-xl shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3">
                  🥧 Tỷ lệ nhân sự
                </h3>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={overviewChartData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={90}
                      label
                    >
                      {overviewChartData.map((_, i) => (
                        <Cell key={i} fill={pieColors[i]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          {view !== 'TODAY' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* TOP ABSENT */}
              <div className="bg-white rounded-xl shadow p-4 lg:col-span-2">
                <h3 className="font-semibold text-gray-700 mb-3">
                  🚫 Top nhân sự nghỉ nhiều (
                  {view === 'WEEK' ? 'Tuần' : 'Tháng'})
                </h3>

                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={topAbsentChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />

                    <Bar
                      dataKey="absent"
                      name="Ngày nghỉ"
                      fill="#dc2626"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              {/* WORK vs LATE */}
              <div className="bg-white rounded-xl shadow p-4">
                <h3 className="font-semibold text-gray-700 mb-3">
                  ⚖️ Ngày làm & Trễ
                </h3>

                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={topAbsentChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />

                    <Bar dataKey="work" fill="#16a34a" name="Ngày làm" />
                    <Bar dataKey="late" fill="#f59e0b" name="Ngày trễ" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {loading && <p className="text-gray-500">⏳ Đang tải dữ liệu...</p>}

          {/* VIEW TABS */}
          <div className="flex gap-2 bg-white p-2 rounded-xl shadow w-fit">
            {(['TODAY', 'WEEK', 'MONTH'] as ViewMode[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${
              view === v
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
              >
                {v === 'TODAY' ? 'Hôm nay' : v === 'WEEK' ? 'Tuần' : 'Tháng'}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <input
              placeholder="🔍 Tìm theo tên..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {/* TIME PICKER */}
            <div className="bg-white p-3 rounded-xl shadow w-fit">
              {view === 'TODAY' && (
                <input
                  type="date"
                  value={selectedDate.toISOString().slice(0, 10)}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  className="px-3 py-2 border rounded-lg"
                />
              )}

              {view === 'WEEK' && (
                <input
                  type="week"
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                  className="px-3 py-2 border rounded-lg"
                />
              )}

              {view === 'MONTH' && (
                <input
                  type="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-3 py-2 border rounded-lg"
                />
              )}
            </div>
          </div>
          {/* TODAY */}
          {view === 'TODAY' && (
            <>
              {/* OVERVIEW */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  ['Tổng NV', overview.total],
                  ['Check-in', overview.checkedIn],
                  ['Đang làm', overview.working],
                  ['Check-out', overview.checkedOut],
                  ['Vắng', overview.absent],
                  ['Đúng / Trễ', `${overview.onTime}/${overview.late}`],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow p-4 text-center"
                  >
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="text-2xl font-bold">{value}</div>
                  </div>
                ))}
              </div>

              {/* TABLE */}
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Tên</th>
                      <th className="px-4 py-3 text-left">Check-in</th>
                      <th className="px-4 py-3 text-left">Check-out</th>
                      <th className="px-4 py-3 text-left">Giờ</th>
                      <th className="px-4 py-3 text-left">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todayTable
                      ?.filter((r: any) =>
                        r.name.toLowerCase().includes(keyword)
                      )
                      .map((r: any, i) => (
                        <tr key={i} className="border-t hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium">{r.name}</td>
                          <td className="px-4 py-3">
                            {r.in?.toLocaleTimeString() || '—'}
                          </td>
                          <td className="px-4 py-3">
                            {r.out?.toLocaleTimeString() || '—'}
                          </td>
                          <td className="px-4 py-3">{r.hours || '—'}</td>
                          <td className="px-4 py-3">
                            {r.status === 'ON_TIME' && '✅ Đúng giờ'}
                            {r.status === 'LATE' && '⚠ Trễ'}
                            {r.status === 'NO_OUT' && '🕒 Chưa check-out'}
                            {r.status === 'ABSENT' && '❌ Vắng'}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* PERIOD (TUẦN / THÁNG / NĂM) */}
          {view !== 'TODAY' && (
            <>
              <div className="flex gap-2">
                <button
                  onClick={() => setPeriodView('SUMMARY')}
                  className={`px-4 py-2 rounded-lg ${
                    periodView === 'SUMMARY'
                      ? 'bg-gray-800 text-white'
                      : 'bg-white border'
                  }`}
                >
                  📊 Tổng hợp
                </button>
                <button
                  onClick={() => setPeriodView('DETAIL')}
                  className={`px-4 py-2 rounded-lg ${
                    periodView === 'DETAIL'
                      ? 'bg-gray-800 text-white'
                      : 'bg-white border'
                  }`}
                >
                  📋 Chi tiết
                </button>
              </div>

              {/* ⚠️ TABLE GIỮ NGUYÊN LOGIC CỦA BẠN */}

              <>
                {/* SUMMARY */}
                {periodView === 'SUMMARY' && (
                  <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100 text-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">
                            Tên
                          </th>
                          <th className="px-4 py-3 text-center font-semibold">
                            Ngày làm
                          </th>
                          <th className="px-4 py-3 text-center font-semibold">
                            Ngày nghỉ
                          </th>
                          <th className="px-4 py-3 text-center font-semibold">
                            Trễ
                          </th>
                          <th className="px-4 py-3 text-left font-semibold">
                            Nghỉ ngày nào
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {members
                          .filter((n) => n.toLowerCase().includes(keyword))
                          .map((name, i) => {
                            const daysWorked = periodData[name] || {};
                            const workingDays = getWorkingDaysOfPeriod(view);

                            let work = 0;
                            let late = 0;

                            Object.values(daysWorked).forEach((d: any) => {
                              if (!d.ins.length) return;
                              work++;
                              if (!isOnTime(new Date(Math.min(...d.ins))))
                                late++;
                            });

                            const absentDays = workingDays.filter(
                              (d) => !daysWorked[d]
                            );

                            return (
                              <tr
                                key={i}
                                className="border-t hover:bg-gray-50 transition"
                              >
                                <td className="px-4 py-3 font-medium">
                                  {name}
                                </td>
                                <td className="px-4 py-3 text-center">
                                  {work}
                                </td>
                                <td className="px-4 py-3 text-center">
                                  {absentDays.length}
                                </td>
                                <td className="px-4 py-3 text-center text-yellow-600 font-semibold">
                                  {late}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                  {absentDays
                                    .map((d) =>
                                      new Date(d).toLocaleDateString('vi-VN', {
                                        weekday: 'short',
                                        day: '2-digit',
                                        month: '2-digit',
                                      })
                                    )
                                    .join(', ') || '—'}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* DETAIL */}
                {periodView === 'DETAIL' && (
                  <div className="bg-white rounded-xl shadow overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100 text-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">
                            Tên
                          </th>
                          <th className="px-4 py-3 text-left font-semibold">
                            Ngày
                          </th>
                          <th className="px-4 py-3 text-left font-semibold">
                            Check-in
                          </th>
                          <th className="px-4 py-3 text-left font-semibold">
                            Check-out
                          </th>
                          <th className="px-4 py-3 text-center font-semibold">
                            Giờ
                          </th>
                          <th className="px-4 py-3 text-center font-semibold">
                            Trạng thái
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {Object.entries(periodData).flatMap(
                          ([name, days]: any) =>
                            Object.entries(days).map(([day, d]: any, i) => {
                              if (!d.ins.length) return null;
                              if (!name.toLowerCase().includes(keyword))
                                return null;

                              const firstIn = new Date(Math.min(...d.ins));
                              const lastOut = d.outs.length
                                ? new Date(Math.max(...d.outs))
                                : undefined;

                              const hours = lastOut
                                ? (
                                    (lastOut.getTime() - firstIn.getTime()) /
                                    36e5
                                  ).toFixed(1)
                                : '-';

                              return (
                                <tr
                                  key={name + day + i}
                                  className="border-t hover:bg-gray-50 transition"
                                >
                                  <td className="px-4 py-3 font-medium">
                                    {name}
                                  </td>
                                  <td className="px-4 py-3 text-gray-600">
                                    {day}
                                  </td>
                                  <td className="px-4 py-3">
                                    {firstIn.toLocaleTimeString()}
                                  </td>
                                  <td className="px-4 py-3">
                                    {lastOut?.toLocaleTimeString() || '—'}
                                  </td>
                                  <td className="px-4 py-3 text-center">
                                    {hours}
                                  </td>
                                  <td className="px-4 py-3 text-center">
                                    {isOnTime(firstIn) ? (
                                      <span className="text-green-600 font-semibold">
                                        ✅ Đúng giờ
                                      </span>
                                    ) : (
                                      <span className="text-red-600 font-semibold">
                                        ⚠ Trễ
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </>

              {/* SUMMARY / DETAIL dùng periodData như cũ */}
            </>
          )}
        </div>
      )}
    </div>
  );
}
