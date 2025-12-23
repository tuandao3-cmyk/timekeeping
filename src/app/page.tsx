'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  /* ================= LOADING OVERLAY ================= */
  function setLoading(show: boolean) {
    const el = document.getElementById('loading');
    if (el) el.style.display = show ? 'flex' : 'none';
  }

  /* ================= EMPLOYEE NAME ================= */
  const NAME_KEY = 'EMPLOYEE_NAME';

  function saveName(name: string) {
    localStorage.setItem(NAME_KEY, name);
  }

  function loadName() {
    return localStorage.getItem(NAME_KEY) || '';
  }

  /* ================= DEVICE ID ================= */
  function getDeviceId(name: string) {
    const KEY = 'DEVICE_ID';
    let id = localStorage.getItem(KEY);
    if (!id) {
      id = name + '__' + crypto.randomUUID();
      localStorage.setItem(KEY, id);
    }
    return id;
  }

  /* ================= GPS ================= */
  async function getLocation() {
    return new Promise<{ lat: number; lng: number; acc: number }>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (p) =>
            resolve({
              lat: p.coords.latitude,
              lng: p.coords.longitude,
              acc: p.coords.accuracy,
            }),
          reject,
          { enableHighAccuracy: true, timeout: 15000 }
        );
      }
    );
  }

  function calcDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) {
    const R = 6371e3;
    const toRad = (v: number) => (v * Math.PI) / 180;
    const a =
      Math.sin(toRad(lat2 - lat1) / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(toRad(lon2 - lon1) / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  /* ================= SUBMIT (IN / OUT) ================= */
  // async function submit(type: 'IN' | 'OUT') {
  //   const nameInput = document.getElementById('name') as HTMLInputElement;
  //   const result = document.getElementById('result') as HTMLDivElement;

  //   if (!nameInput.value.trim()) {
  //     alert('Vui lòng nhập đầy đủ họ và tên');
  //     return;
  //   }

  //   const confirmMsg =
  //     type === 'IN'
  //       ? 'Bạn có chắc chắn muốn CHECK IN hôm nay không?'
  //       : 'Bạn có chắc chắn muốn CHECK OUT hôm nay không?';
  //   if (!confirm(confirmMsg)) return;

  //   try {
  //     setLoading(true);
  //     result.innerText = '';

  //     const pos = await getLocation();
  //     const OFFICE = { lat: 21.005835765857555, lng: 105.82344636679828 };
  //     const d = calcDistance(pos.lat, pos.lng, OFFICE.lat, OFFICE.lng);

  //     if (d > 400 || pos.acc > 100) {
  //       result.innerText = `❌ Ngoài phạm vi (${d.toFixed(1)} m)`;
  //       result.style.color = 'red';
  //       return;
  //     }

  //     const res = await fetch(
  //       'https://script.google.com/macros/s/AKfycbwRymPaSRexI4vQH1WYZJszhr865GW1WSy9HzH60-iYFaG8DchMboVd1l4VHrUVqYP6WA/exec',
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //         body: new URLSearchParams({
  //           name: nameInput.value.trim(),
  //           type,
  //           device_id: getDeviceId(nameInput.value),
  //           ua: navigator.userAgent,
  //         }),
  //       }
  //     );

  //     const data = await res.json();

  //     if (!data.success) {
  //       if (data.error?.startsWith('DEVICE_ALREADY')) {
  //         result.innerText =
  //           type === 'IN'
  //             ? '❌ Thiết bị đã check IN hôm nay'
  //             : '❌ Thiết bị đã check OUT hôm nay';
  //         result.style.color = 'red';
  //         return;
  //       }

  //       if (data.error === 'NO_IN_TODAY') {
  //         result.innerText = '❌ Chưa CHECK IN hôm nay, không thể CHECK OUT';
  //         result.style.color = 'red';
  //         return;
  //       }

  //       throw new Error(data.error || 'Unknown error');
  //     }

  //     // ✅ Lưu tên sau khi thành công
  //     saveName(nameInput.value.trim());

  //     result.innerText =
  //       type === 'IN'
  //         ? `✅ Check IN thành công (${d.toFixed(1)} m)`
  //         : `👋 Check OUT thành công (${d.toFixed(1)} m)`;
  //     result.style.color = 'green';
  //   } catch (err: any) {
  //     result.innerText = '❌ Lỗi khi gửi dữ liệu: ' + (err.message || err);
  //     result.style.color = 'red';
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  async function submit(type: 'IN' | 'OUT') {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const result = document.getElementById('result') as HTMLDivElement;

    if (!nameInput.value.trim()) {
      alert('Vui lòng nhập đầy đủ họ và tên');
      return;
    }

    const confirmMsg =
      type === 'IN'
        ? 'Bạn có chắc chắn muốn CHECK IN hôm nay không?'
        : 'Bạn có chắc chắn muốn CHECK OUT hôm nay không?';
    if (!confirm(confirmMsg)) return;

    try {
      setLoading(true);
      result.innerText = '';

      const pos = await getLocation();
      const OFFICE = { lat: 21.005835765857555, lng: 105.82344636679828 };
      const d = calcDistance(pos.lat, pos.lng, OFFICE.lat, OFFICE.lng);

      if (d > 400 || pos.acc > 100) {
        result.innerText = `❌ Ngoài phạm vi (${d.toFixed(1)} m)`;
        result.style.color = 'red';
        return;
      }

      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbx8iD21x0fN--WrNvJT8TZcpNyWN7B9Bp2LV1HUJq-bxb_frRRVeKDqIGRDz8Ies_V9-Q/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            name: nameInput.value.trim(),
            type,
            device_id: getDeviceId(nameInput.value),
            ua: navigator.userAgent,
          }),
        }
      );

      const data = await res.json();

      // ❌ Lỗi backend
      if (!data.success) {
        if (data.error === 'UUID_MISMATCH') {
          result.innerText =
            '❌ Thiết bị này không được phép check-in cho tên đã đăng ký';
          result.style.color = 'red';
          return;
        }

        if (data.error?.startsWith('ALREADY_')) {
          result.innerText =
            type === 'IN'
              ? '❌ Bạn đã CHECK IN hôm nay rồi'
              : '❌ Bạn đã CHECK OUT hôm nay rồi';
          result.style.color = 'red';
          return;
        }

        if (data.error === 'NO_IN_TODAY') {
          result.innerText = '❌ Chưa CHECK IN hôm nay, không thể CHECK OUT';
          result.style.color = 'red';
          return;
        }

        throw new Error(data.error || 'Unknown error');
      }

      // 🕒 Chờ duyệt
      if (data.status === 'PENDING_APPROVAL') {
        result.innerText =
          '⏳ Lần đầu check-in. Vui lòng chờ admin duyệt thiết bị.';
        result.style.color = 'orange';
        return;
      }

      // ✅ Thành công (đã duyệt)
      saveName(nameInput.value.trim());

      result.innerText =
        type === 'IN'
          ? `✅ Check IN thành công (${d.toFixed(1)} m)`
          : `👋 Check OUT thành công (${d.toFixed(1)} m)`;
      result.style.color = 'green';
    } catch (err: any) {
      result.innerText = '❌ Lỗi khi gửi dữ liệu: ' + (err.message || err);
      result.style.color = 'red';
    } finally {
      setLoading(false);
    }
  }

  /* ================= AUTO LOAD NAME ================= */
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const input = document.getElementById('name') as HTMLInputElement;
      if (input && !input.value) {
        input.value = loadName();
      }
    }, 0);
  }

  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');

      const d = String(now.getDate()).padStart(2, '0');
      const mo = String(now.getMonth() + 1).padStart(2, '0');
      const y = now.getFullYear();

      setTime(`${h}:${m}:${s}`);
      setDate(`${d}/${mo}/${y}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ================= UI ================= */
  return (
    <>
      <div
        id="loading"
        style={{
          position: 'fixed',
          inset: 0,
          background:
            'radial-gradient(circle at center, rgba(99,102,241,0.25), #020617)',
          display: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: '50%',
            border: '3px solid rgba(99,102,241,0.25)',
            boxShadow:
              '0 0 60px rgba(99,102,241,0.8), inset 0 0 40px rgba(99,102,241,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'spin 1.8s linear infinite',
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #a5b4fc, #6366f1)',
              boxShadow: '0 0 40px rgba(99,102,241,1)',
            }}
          />
        </div>
      </div>

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'radial-gradient(circle at top, #0f172a, #020617)',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system',
          padding: 16,
          overflow: 'hidden',
        }}
      >
        {/* GLOW GRID */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        {/* ===== HOLOGRAM CARD ===== */}
        <div
          style={{
            width: '100%',
            maxWidth: 420,
            padding: 32,
            borderRadius: 24,
            background:
              'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
            backdropFilter: 'blur(20px)',
            boxShadow:
              '0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(99,102,241,0.25)',
            border: '1px solid rgba(99,102,241,0.35)',
            position: 'relative',
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          {/* NEON EDGE */}
          <div
            style={{
              position: 'absolute',
              inset: -2,
              borderRadius: 26,
              background: 'linear-gradient(135deg, #6366f1, #22d3ee, #a78bfa)',
              opacity: 0.35,
              filter: 'blur(20px)',
              zIndex: -1,
            }}
          />

          <h2
            style={{
              textAlign: 'center',
              fontSize: 26,
              fontWeight: 800,
              color: '#e0e7ff',
              letterSpacing: 2,
            }}
          >
            ATTENDANCE CORE
          </h2>

          {/* <p
            style={{
              textAlign: 'center',
              marginTop: 8,
              fontSize: 13,
              color: '#94a3b8',
            }}
          >
            {new Date().toLocaleString('vi-VN')}
          </p> */}
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            {/* DATE */}
            <div
              style={{
                marginTop: 0,
                fontSize: 20,
                letterSpacing: 2,
                color: '#94a3b8',
                textTransform: 'uppercase',
              }}
            >
              {date}
            </div>
            {/* DIGITAL CLOCK */}
            <div
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: 4,
                color: '#a5b4fc',
                fontFamily: 'monospace',
                textShadow:
                  '0 0 12px rgba(99,102,241,0.9), 0 0 24px rgba(99,102,241,0.6)',
              }}
            >
              {time}
            </div>

            {/* LABEL */}
            <div
              style={{
                marginTop: 2,
                fontSize: 10,
                color: '#94a3b8',
                letterSpacing: 3,
              }}
            >
              SYSTEM TIME · VIETNAM
            </div>
          </div>

          {/* INPUT */}
          <input
            id="name"
            placeholder="IDENTITY NAME"
            style={{
              width: '100%',
              height: 48,
              marginTop: 26,
              padding: '0 16px',
              borderRadius: 14,
              background: 'rgba(2,6,23,0.7)',
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#e0e7ff',
              fontSize: 15,
              outline: 'none',
              boxShadow: 'inset 0 0 20px rgba(99,102,241,0.3)',
            }}
          />

          {/* CHECK IN */}
          <button
            onClick={() => submit('IN')}
            style={{
              width: '100%',
              height: 52,
              marginTop: 28,
              borderRadius: 16,
              background: 'linear-gradient(180deg, #4ade80, #16a34a)',
              color: '#022c22',
              fontWeight: 800,
              fontSize: 16,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 0 #166534, 0 30px 60px rgba(34,197,94,.8)',
            }}
          >
            ▲ CHECK IN
          </button>

          {/* CHECK OUT */}
          <button
            onClick={() => submit('OUT')}
            style={{
              width: '100%',
              height: 52,
              marginTop: 20,
              borderRadius: 16,
              background: 'linear-gradient(180deg, #fb7185, #dc2626)',
              color: '#450a0a',
              fontWeight: 800,
              fontSize: 16,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 0 #7f1d1d, 0 30px 60px rgba(239,68,68,.8)',
            }}
          >
            ▼ CHECK OUT
          </button>

          <div
            id="result"
            style={{
              marginTop: 20,
              textAlign: 'center',
              fontWeight: 600,
              color: '#e0e7ff',
              minHeight: 24,
            }}
          />
        </div>
      </div>
    </>
  );
}
