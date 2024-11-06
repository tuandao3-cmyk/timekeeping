import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typography } from '@mui/material';
import Image from 'next/image';
function BannerSwipper() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref1,
    inView: inView1,
    entry: entry1,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const [isRightFrameVisible, setIsRightFrameVisible] = useState(false);
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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

  const items = [
    {
      image: '/img/hyperas1.png',
      title: 'Hyperas Chain',
      price: '$1.500.000',
    },
    {
      image: '/img/hyperas1.png',
      title: 'SALALA AI',
      price: '$1.500.000',
    },
    {
      image: '/img/hyperas1.png',
      title: 'Egabid',
      price: '$1.500.000',
    },
    {
      image: '/img/hyperas1.png',
      title: 'Rapital Bank',
      price: '$1.500.000',
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      navigation={false}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      touchMoveStopPropagation={false}
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} custom-bullet bg-[#48B96D]"></span>`;
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <section
          ref={ref}
          className="bg-[rgb(7,33,44)] flex flex-col min-h-[812px] h-auto justify-center items-center w-full "
        >
          <div className=" text-white md:py-8 pb-[43px] md:pb-0 gap-[36px] md:gap-0 flex flex-row md:max-h-[748px] h-auto flex-wrap  max-w-[1440px]  px-[12px] md:px-0 w-full">
            <div className="w-full   md:w-1/2 md:max-w-[50%]  md:pr-8">
              <p
                className={`duration-300 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } font-sans   font-bold md:pt-[20%] pt-[40px] pb-[5%] text-[32px] md:leading-[56px] md:text-[40px] mb-2 sm:mb-4 uppercase`}
              >
                Ủy thác niềm tin
                <br /> gặt hái thịnh vượng
              </p>
              <p
                className={`duration-300 ease-in-out delay-200 transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } text-base font-sans pb-[5%] text-[14px] md:max-w-[85%] mb-4 sm:mb-6 text-[#FFFFFF]/60`}
              >
                Cung cấp cho các nhà đầu tư và doanh nghiệp những dự án tiềm
                năng, mở ra cơ hội hợp tác nhằm tối ưu hóa lợi nhuận và thúc đẩy
                sự phát triển tài chính.
              </p>
              <button
                className={`bg-[#48B96D] text-[#ffffff] md:px-4 py-3 max-sm:px-4 rounded-full font-sans text-sm sm:text-base duration-300 ease-in-out delay-500 transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } `}
              >
                Tham gia cùng chúng tôi
              </button>

              <div className="flex flex-wrap max-sm:justify-between mt-8 space-y-0 sm:space-x-4 md:space-x-4 lg:space-x-4 ">
                <div
                  className={`w-[30%]  bg-[#FFFFFF]/10 rounded-lg  max-w-[163px] h-[137px] md:p-3 pl-5 flex flex-col p-[12px]  justify-start items-start duration-300 ease-in-out transform ${
                    inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                >
                  <p className="text-[#48B96D] mb-4  text-xl leading-8 sm:text-2xl  font-semibold font-sans">
                    $20M+
                  </p>
                  <p className="text-[#FFFFFF]/80  max-w-[100%] text-[12px] sm:text-sm font-sans">
                    Tổng vốn đang huy động
                  </p>
                </div>
                <div
                  className={`w-[30%] bg-[#FFFFFF]/10 max-w-[163px] h-[137px] rounded-lg p-[12px]  md:p-3 pl-5 flex flex-col  justify-start items-start duration-300 delay-300 ease-in-out transform ${
                    inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                >
                  <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold font-sans">
                    10M+
                  </p>
                  <p className="text-[#FFFFFF]/80   w-full text-xs sm:text-sm font-sans">
                    Tổng vốn đang đầu tư
                  </p>
                </div>
                <div
                  className={`w-[30%]  max-w-[163px] h-[137px] bg-[#FFFFFF]/10 rounded-lg p-[12px]  md:p-3 pl-5 flex flex-col justify-start items-start duration-300 delay-500 ease-in-out transform ${
                    inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                >
                  <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold font-sans">
                    771+
                  </p>
                  <p className="text-[#FFFFFF]/80 sm:max-w-[60%] max-w-[100%] text-xs sm:text-sm font-sans">
                    Nhà đầu tư
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex md:hidden relative justify-center items-center">
              <div className="block md:hidden w-[351px] h-[289px] overflow-hidden rounded-[16px] ">
                <Image
                  src={'/img/invest.png'}
                  alt="image"
                  width={351}
                  height={289}
                />
              </div>
              {/* <div
                onTouchStart={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                className="w-full h-[72px] absolute bottom-0 overflow-x-auto flex whitespace-nowrap"
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-[215px] h-[72px] gap-[8px] bg-white p-[12px] rounded-[12px] flex"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="rounded-[10px]"
                    />
                    <div className="flex flex-col ">
                      <p
                        className="font-sans text-[#04141A] text-[14px] leading-[24px]"
                        style={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="font-sans text-[#31814B] text-[14px] leading-[24px]"
                        style={{ fontWeight: 500 }}
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}

              <div
                className="swiper-pagination"
                style={{
                  position: 'absolute',
                  bottom: '0',
                }}
              ></div>

              <Swiper
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={4}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  width: '100%',
                }}
                touchRatio={1}
                freeMode={false}
              >
                {items.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: '215px',
                      height: '100%',
                      backgroundColor: '#fff',
                      borderRadius: '12px',
                      maxWidth: '215px',
                    }}
                  >
                    <div className="w-full h-[72px] gap-[8px] bg-white p-[12px] rounded-[12px] flex">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="rounded-[10px]"
                      />
                      <div className="flex flex-col ">
                        <p
                          className="font-sans text-[#04141A] text-[14px] leading-[24px]"
                          style={{ fontWeight: 700 }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="font-sans text-[#31814B] text-[14px] leading-[24px]"
                          style={{ fontWeight: 500 }}
                        >
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div
              ref={rightFrameRef}
              className={`w-full md:w-1/2 hidden md:block    mt-8 md:mt-0 transition-all duration-300 ${
                isRightFrameVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full  ">
                <div className="absolute w-[80%] sm:w-[70%] max-h-[451px]  md:w-[60%] h-[65%] sm:h-[70%] md:h-[65%] top-[5%] sm:top-[8%] md:top-[10%] right-[10%] md:right-[5%] mr-[20%]">
                  <img
                    src="/img/invest.png"
                    alt="Investment Dashboard"
                    className={` w-full h-full rounded-[1.25rem] opacity-100 object-cover duration-300 max-h-[451px]  ease-in-out transform ${
                      inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  />

                  <div
                    className={`absolute w-[58%] sm:w-[50%] top-[7%] sm:top-[5%] md:top-[7%] left-[-30%] sm:left-[-25%] md:left-[-25%] bg-white text-[#04141A] rounded-[1.25rem] shadow overflow-hidden flex flex-col duration-300 delay-300 ease-in-out transform ${
                      inView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-[-50%]'
                    }`}
                  >
                    <div className="relative h-[100px] w-full overflow-hidden bg-[#0B3546]">
                      <img
                        src="/img/hyperas1.png"
                        alt="Hyperas Chain"
                        className="absolute w-full object-cover"
                      />
                    </div>
                    <div className=" w-full p-2 flex flex-col justify-center">
                      <p className="font-bold pl-1 text-xs leading-4 xl:leading-6 xl:text-base font-sans">
                        HYPERAS CHAIN
                      </p>
                      <p className="text-[#31814B] font-inter pl-1 text-sm leading-6 sm:text-lg md:text-sm font-medium font-sans">
                        $1,500,000
                      </p>
                      <p className="text-[12px] leading-5 pl-1 sm:text-xs md:text-[12px] text-[#000000]/60 mt-1 font-sans">
                        TECHNOLOGY
                      </p>
                    </div>
                  </div>

                  <div
                    className={` delay-700 ease-in-out transform ${
                      inView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-[-50%]'
                    } absolute w-[67%] sm:w-[58%] md:w-[66%] bottom-[-15%] sm:bottom-[-18%] md:bottom-[-18%] right-[-5%] sm:right-[-4%] md:right-[-28%] bg-[#F3F7F4] rounded-[1.25rem] shadow overflow-hidden flex flex-col p-2 xl:p-3 `}
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
                        <p className="font-bold font-inter text-[#04141A] text-sm font-sans">
                          SALALA AI
                        </p>
                        <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium font-sans">
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
                        <p className="font-bold font-inter text-[#04141A] text-sm sm:text-sm font-sans">
                          RAPITAL BANK
                        </p>
                        <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium font-sans">
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
                        <p className="font-bold font-inter text-[#04141A] text-sm sm:text-sm font-sans">
                          EGABID
                        </p>
                        <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium font-sans">
                          $1,500,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full max-w-[50%] h-[500px]"></div> */}
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section
          ref={ref1}
          className="bg-[#07212C] flex  min-h-[812px]  justify-center items-center w-full "
        >
          <div
            className="bg-white h-[100%] bg-cover min-h-[812px]  w-full flex flex-col justify-center items-center "
            style={{
              backgroundImage: "url('/img/bghomepage2.png')",
              backgroundSize: '100% 100%',

              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="flex flex-col items-center justify-center w-full max-w-[1440px] md:px-[120px]">
              <div className="flex justify-between items-center w-full h-full mt-16 max-md:!flex-col ">
                <div className="flex flex-col min-h-[620px] justify-start md:justify-center flex-1 w-[100%] px-[12px] md:p-0  gap-10">
                  <div className="flex flex-col gap-2">
                    <p
                      // ref={ref}
                      className={`text-[32px] md:text-[40px] text-center md:text-left leading-[56px] text-[#fff] font-sans font-bold uppercase duration-700 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Nền Tảng <br /> Vững Mạnh,
                    </p>
                    <p
                      // ref={ref}
                      className={`text-[32px] md:text-[40px] text-center md:text-left leading-[56px] text-[#fff] font-sans font-bold uppercase duration-700 delay-200 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Cơ Hội Minh Bạch
                    </p>
                  </div>

                  <div className="flex w-[100%] justify-start items-start gap-[24px]  md:max-w-[500px]">
                    <button
                      // ref={ref}
                      className={` bg-[#48B96D] text-white font-sans text-[16px] leading-[20px] flex-grow   px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Khám phá cơ hội
                    </button>
                    <button
                      // ref={ref}
                      className={` bg-transparent border-[#FFFFFF29] border-[1px] flex-grow text-white font-sans text-[16px] leading-[20px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Liên hệ ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center max-w-[1440px]"></div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwipper;
