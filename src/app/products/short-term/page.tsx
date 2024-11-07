'use client';

import React, { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const ShortTermSection: React.FC = () => {
  const pathname = usePathname();
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 4,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });
  return (
    <>
      <div className="flex justify-center items-center w-full mt-10 md:mt-0 lg:mt-0 sm:mt-0 absolute top-1/2 px-4 sm:px-8 md:px-16 lg:px-32 ">
        <div
          ref={ref2}
          className={`w-full rounded-lg duration-1000 pr-4 pl-4  ease-in-out transform ${
            inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15'
          }`}
          // controls
        >
          <div className=" w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            <div className="bg-white shadow-lg  rounded-[20px]">
              <div
                className="  flex flex-col justify-between items-center pt-4  h-[205px]
                "
              >
                <p className="text-lg sm:text-xl lg:text-2xl font-medium uppercase text-[#0B3546]">
                  Gói cơ bản
                </p>
                <div
                  className=" pb-[4px] w-full flex justify-center items-center"
                  style={{
                    background:
                      'linear-gradient(to bottom, #FFAB5000 0%, #FFAB5033 100%,#99673000 56%)',
                  }}
                >
                  <img src="/img/icon4.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col py-6 px-4 sm:py-8 sm:px-6 md:py-11 md:px-14">
                <p className="text-center font-bold text-[28px] sm:text-[32px] md:text-[40px] text-[#04141A]">
                  3.5%/năm
                </p>
                <p className="text-center font-normal text-base text-[#000000A3] text-opacity-64">
                  Kỳ hạn 3 tháng
                </p>
                <div className="flex flex-col gap-4 md:gap-8 py-4 md:py-10">
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Đầu tư thời gian dài hạn
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Lợi nhuận hấp dẫn và cố định
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Đầu tư an toàn, dễ dàng quản lý
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className={`uppercase max-w-[90px] p-2  sm:max-w-[116px] bg-[#48B96D] tracking-tight text-white text-[14px] sm:text-[16px] md:px-4 md:py-3 sm:px-[16px] sm:py-[14px] rounded-[999px] text-center hover:bg-[#379256] transition-all duration-300 delay-200 ease-in-out transform`}
                  >
                    mua ngay
                  </button>
                </div>
              </div>
            </div>
            <div
              className="bg-white shadow-lg mt-10 md:mt-0 lg:mt-0 sm:mt-0 rounded-[20px] border md:boder-0 "
              style={{ borderColor: '#48B96D21' }}
            >
              <div className="  flex flex-col justify-between items-center pt-4  h-[205px]">
                <p className="text-2xl font-medium uppercase text-[#F68225]">
                  Gói NÂNG CAO
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium uppercase text-[#0B3546]">
                  Best value
                </p>
                <div
                  className=" pb-[4px] w-full flex justify-center items-center"
                  style={{
                    background:
                      'linear-gradient(to bottom,#48B96D00 0%, #48B96D33 100%,#48B96D00 56%)',
                  }}
                >
                  <img src="/img/icon5.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col py-6 px-4 sm:py-8 sm:px-6 md:py-11 md:px-14">
                <p className="text-center font-bold text-[28px] sm:text-[32px] md:text-[40px] text-[#04141A]">
                  3.7%/năm
                </p>
                <p className="text-center font-normal text-base text-[#000000A3] text-opacity-64">
                  Kỳ hạn 6 tháng
                </p>
                <div className="flex flex-col gap-4 md:gap-8 py-4 md:py-10">
                  <div className="flex gap-3">
                    <img
                      className="p-1 rounded-full bg-[#48B96D] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Đầu tư thời gian dài hạn
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Lợi nhuận hấp dẫn và cố định
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Đầu tư an toàn, dễ dàng quản lý
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className={`uppercase max-w-[90px] p-2  sm:max-w-[116px] bg-[#48B96D] tracking-tight text-white text-[14px] sm:text-[16px] md:px-4 md:py-3 sm:px-[16px] sm:py-[14px] rounded-[999px] text-center hover:bg-[#379256] transition-all duration-300 delay-200 ease-in-out transform`}
                  >
                    mua ngay
                  </button>
                </div>
              </div>
            </div>
            <div
              className="bg-white shadow-lg mt-10 md:mt-0 lg:mt-0 sm:mt-0 rounded-[20px] border md:boder-0"
              style={{ borderColor: '#FFF2E6' }}
            >
              <div className=" flex flex-col justify-between items-center pt-4 h-[205px]">
                <p className="text-lg sm:text-xl lg:text-2xl font-medium uppercase text-[#0B3546]">
                  Gói cao cấp
                </p>
                <div
                  className=" pb-[4px] w-full flex justify-center items-center"
                  style={{
                    background:
                      'linear-gradient(to bottom,#48B96D00 0%, #B9484833 100%,#48B96D00 56%)',
                  }}
                >
                  <img src="/img/icon6.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col py-6 px-4 sm:py-8 sm:px-6 md:py-11 md:px-14">
                <p className="text-center font-bold text-[28px] sm:text-[32px] md:text-[40px] text-[#04141A]">
                  4.7%/năm
                </p>
                <p className="text-center font-normal text-base text-[#000000A3] text-opacity-64">
                  Kỳ hạn 12 tháng
                </p>
                <div className="flex flex-col gap-4 md:gap-8 py-4 md:py-10">
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Đầu tư thời gian dài hạn
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Lợi nhuận hấp dẫn và cố định
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img
                      className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                      src="/img/icon/check.svg"
                      alt=""
                    />
                    <p className="font-medium text-base">
                      Đầu tư an toàn, dễ dàng quản lý
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className={`uppercase max-w-[90px] p-2  sm:max-w-[116px] bg-[#48B96D] tracking-tight text-white text-[14px] sm:text-[16px] md:px-4 md:py-3 sm:px-[16px] sm:py-[14px] rounded-[999px] text-center hover:bg-[#379256] transition-all duration-300 delay-200 ease-in-out transform`}
                  >
                    mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortTermSection;
