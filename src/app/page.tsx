'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './page.module.css';
import Partner from '@/app/partner';
import ProjectSection from '@/app/ProjectSection';
import PressSection from '@/app/PressSection';
import SolutionList from '@/components/solutionList/solutionList';

import Download from './download';
import News from './news';
import FeedbackSection from './FeedbackSection';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });
  const [isRightFrameVisible, setIsRightFrameVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRightFrameVisible(true);
          } else {
            setIsRightFrameVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        // rootMargin: "0px 0px -10% 0px"
      }
    );

    if (rightFrameRef.current) {
      observer.observe(rightFrameRef.current);
    }

    return () => {
      if (rightFrameRef.current) {
        observer.unobserve(rightFrameRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className="bg-[#07212C] text-white py-8 flex min-h-[90vh] ">
        {/* Phần bên trái */}
        <div className="w-full md:ml-[10%]  md:w-1/2 md:max-w-[45%]  md:pr-8">
          <h1
            ref={ref}
            className={`duration-700 ease-in-out transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } font-inter font-bold pt-[20%] pb-[5%] sm:text-3xl md:leading-[56px] md:text-5xl mb-2 sm:mb-4`}
          >
            ĐẦU TƯ THÔNG MINH
            <br /> SINH LỜI TUYỆT ĐỈNH
          </h1>
          <p
            ref={ref}
            className={`duration-700 ease-in-out delay-200 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } text-base font-inter pb-[5%] sm:text-base md:max-w-[85%] mb-4 sm:mb-6 text-[#FFFFFF]/60`}
          >
            Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành
            cho bạn
          </p>
          <button
            ref={ref}
            className={`bg-[#48B96D] text-[#ffffff] md:px-4 py-3 max-sm:px-4 rounded-full text-sm sm:text-base duration-700 ease-in-out delay-500 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } `}
          >
            Tham gia cùng chúng tôi
          </button>

          <div className="flex flex-wrap max-sm:justify-between mt-8 space-y-0 sm:space-x-4 md:space-x-4 lg:space-x-4 h-[50%]">
            <div
              ref={ref}
              className={`w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center duration-700 ease-in-out transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold">
                $1B+
              </p>
              <p className="text-[#FFFFFF]/80 sm:max-w-[60%] max-w-[100%] text-xs sm:text-sm">
                Tổng số đã huy động
              </p>
            </div>
            <div
              ref={ref}
              className={`w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center duration-700 delay-700 ease-in-out transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold">
                50M+
              </p>
              <p className="text-[#FFFFFF]/80 sm:max-w-[60%] max-w-[100%] text-xs sm:text-sm">
                Đã đầu tư thành công
              </p>
            </div>
            <div
              ref={ref}
              className={`w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center duration-700 delay-1000 ease-in-out transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold">
                771+
              </p>
              <p className="text-[#FFFFFF]/80 sm:max-w-[60%] max-w-[100%] text-xs sm:text-sm">
                Nhà đầu tư tham gia
              </p>
            </div>
          </div>
        </div>

        {/* Phần bên phải */}
        <div
          ref={rightFrameRef}
          className={`w-full md:w-1/2 min-h-[90vh] max-sm:hidden relative mt-8 md:mt-0 transition-all duration-500 ${
            isRightFrameVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <div className="absolute w-[80%] sm:w-[70%] md:w-[60%] h-[65%] sm:h-[70%] md:h-[65%] top-[5%] sm:top-[8%] md:top-[10%] right-[10%] md:right-[5%] mr-[20%]">
              <img
                ref={ref}
                src="/img/invest.png"
                alt="Investment Dashboard"
                className={` w-full h-full rounded-[1.25rem] opacity-100 object-cover duration-700  ease-in-out transform ${
                  inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              />

              {/* Khung Hyperas */}
              <div
                ref={ref}
                className={`absolute w-[58%] sm:w-[50%] h-[31%] sm:h-[31%] md:h-[33%] top-[7%] sm:top-[5%] md:top-[7%] left-[-30%] sm:left-[-25%] md:left-[-25%] bg-white text-[#04141A] rounded-[1.25rem] shadow overflow-hidden flex flex-col duration-700 delay-700 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[-50%]'
                }`}
              >
                <div className="relative h-1/2 w-full overflow-hidden bg-[#0B3546]">
                  <img
                    src="/img/hyperas1.png"
                    alt="Hyperas Chain"
                    className="absolute w-full h-auto object-cover "
                  />
                </div>
                <div className="h-1/2 w-full sm:p-1 flex flex-col justify-center">
                  <p className="font-bold pl-1 text-xs leading-4 xl:leading-6 xl:text-base">
                    HYPERAS CHAIN
                  </p>
                  <p className="text-[#31814B] font-inter pl-1 text-sm leading-6 sm:text-lg md:text-sm font-medium">
                    $1,500,000
                  </p>
                  <p className="text-[12px] leading-5 pl-1 sm:text-xs md:text-[12px] text-[#000000]/60 mt-1">
                    TECHNOLOGY
                  </p>
                </div>
              </div>

              {/* Khung Salala */}
              <div
                ref={ref}
                className={` delay-700 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[-50%]'
                } absolute w-[67%] sm:w-[58%] md:w-[66%] h-[38%] sm:h-[40%] md:h-[43%] bottom-[-15%] sm:bottom-[-18%] md:bottom-[-18%] right-[-5%] sm:right-[-4%] md:right-[-28%] bg-[#F3F7F4] rounded-[1.25rem] shadow overflow-hidden flex flex-col p-2 xl:p-3 `}
              >
                <div className="border-b-2 border-[#1C4A2B]/10 flex items-center pb-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 xl:w-12 xl:h-12 flex items-center justify-center mr-2 sm:mr-3">
                    <img
                      src="/img/icon/salala.png"
                      alt="Salala AI"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-bold font-inter text-[#04141A] text-sm ">
                      SALALA AI
                    </p>
                    <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium">
                      $1,500,000
                    </p>
                  </div>
                </div>

                <div className="border-b-2 border-[#1C4A2B]/10 flex items-center my-1 pb-1 ">
                  <div className=" w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <img
                      src="/img/icon/rapital.png"
                      alt="Rapital Bank"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-bold font-inter text-[#04141A] text-sm sm:text-sm">
                      RAPITAL BANK
                    </p>
                    <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium">
                      $1,500,000
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-1 pb-1">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <img
                      src="/img/icon/egabid.png"
                      alt="Egabid"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-bold font-inter text-[#04141A] text-sm sm:text-sm">
                      EGABID
                    </p>
                    <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium">
                      $1,500,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partner />
      {/* <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="4xl:text-[72px] 3xl:text-[48px] text-3xl font-bold text-center mb-12">
            GIẢI PHÁP ĐẦU TƯ VƯỢT TRỘI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                icon: '/img/icon/icon15.png',
                title: 'Lợi nhuận vượt trội',
                description:
                  'Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu nhập thụ động vững vàng từ đó tài chính.',
              },
              {
                icon: '/img/icon/icon14.png',
                title: 'Thông tin minh bạch',
                description:
                  'Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu nhập thụ động vững vàng từ đó tài chính.',
              },
              {
                icon: '/img/icon/icon16.png',
                title: 'Bảo mật tuyệt đối',
                description:
                  'Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu nhập thụ động vững vàng từ đó tài chính.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F3F7F4] p-6 rounded-[1.25rem] 4xl:w-[660px] 4xl:h-[500px] 3xl:w-[500px] 3xl:h-[400px] w-[250px] md:w-[400px]  h-[300px] transition-all duration-300 hover:bg-[#48B96D] hover:text-white group"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 4xl:w-[100px] 4xl:h-[100px] 3xl:w-[80px] 3xl:h-[80px] mb-4"
                />
                <h3 className="text-2xl 4xl:text-[60px] 4xl:leading-[80px] 3xl:text-[40px] 3xl:leading-[60px] text-[#000000]/90 leading-8 group-hover:text-white font-inter font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-6 4xl:leading-[40px] 4xl:text-[32px] 3xl:text-[24px] 3xl:leading-[30px] group-hover:text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <SolutionList />

      <ProjectSection />
      <News />

      <FeedbackSection />
      <Download />
      <PressSection />
    </div>
  );
};

export default Home;
