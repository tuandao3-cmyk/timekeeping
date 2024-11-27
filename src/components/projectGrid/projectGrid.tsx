'use client';
import { getProjects } from '@/services/project.service';
import { Page } from '@/type/page.type';
import { useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaFlag } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from './useWindowSize';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    name: 'HYPERAS CHAIN',
    series: 'SERIES A', 
    description: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị biên xây dựng hạ tầng AI phi tập trung mạnh mẽ',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/hyperas_chain.png',
    tags: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
  },
  {
    id: 2,
    name: 'EGABID',
    series: 'SERIES B',
    description:
      'Egabid là sàn thương mại điện tử đấu giá ngược cung cấp một nền tảng đấu giá ngược độc đáo',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/egabid_pc.png',
    tags: ['CÔNG NGHỆ', 'Thương mại điện tử'],
  },
  {
    id: 3,
    name: 'EGABID',
    series: 'SERIES B',
    description:
      'Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/egabid_pc.png',
    tags: ['CÔNG NGHỆ', 'Thương mại điện tử'],
  },
  {
    id: 4,
    name: 'EGABID',
    series: 'SERIES B',
    description:
      'Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/egabid_pc.png',
    tags: ['CÔNG NGHỆ', 'Thương mại điện tử'],
  },
  {
    id: 5,
    name: 'EGABID',
    series: 'SERIES B',
    description:
      'Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/egabid_pc.png',
    tags: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
  },
  {
    id: 6,
    name: 'EGABID',
    series: 'SERIES B',
    description:
      'Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/egabid_pc.png',
    tags: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
  },
];

interface ProjectSlideProps {
  dataRasing: any;
  pageRasing: any;
}

const ProjectSlider = (props: ProjectSlideProps) => {
  const { dataRasing, pageRasing } = props;
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [page, setPage] = useState<typeof Page>(pageRasing);
  const [projectData, setProjectData] = useState<any>(dataRasing?.data || []);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  const isMobile = windowSize.width < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 768;
  const isSmallDesktop = windowSize.width >= 768 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024 && windowSize.width < 1280;
  const isLargeDesktop = windowSize.width >= 1280 && windowSize.width < 1536;
  const isXLargeDesktop = windowSize.width >= 1536 && windowSize.width < 1920;
  const isXXLargeDesktop = windowSize.width >= 1920 && windowSize.width < 2560;
  const isUltraWide = windowSize.width >= 2560;

  const slidesOffsetBefore = isMobile ? 0 : 100;
  let slidesPerView;

  if (isMobile) {
    slidesPerView = 1;
  } else if (isTablet) {
    slidesPerView = 1.5;
  } else if (isSmallDesktop) {
    slidesPerView = 1.5;
  } else if (isDesktop) {
    slidesPerView = 1.5;
  } else if (isLargeDesktop) {
    slidesPerView = 1.5;
  } else if (isXLargeDesktop) {
    slidesPerView = 1.5;
  } else if (isXXLargeDesktop) {
    slidesPerView = 1.66;
  } else if (isUltraWide) {
    slidesPerView = 1.66;
  } else {
    slidesPerView = 1;
  }

  useEffect(() => {
    if (swiper) {
      swiper.params.slidesOffsetBefore = slidesOffsetBefore;
      swiper.params.slidesPerView = slidesPerView;
      swiper.update();
    }
  }, [swiper, slidesOffsetBefore, slidesPerView]);

  useEffect(() => {
    if (progressBarRef.current) {
      const realIndex = swiper?.realIndex || 0;
      const percentage = ((realIndex + 1) / projectData.length) * 100;
      progressBarRef.current.style.width = `${percentage}%`;
    }
  }, [activeIndex, projects.length]);

  return (
    <div className="flex w-full mx-auto max-w-[1440px] flex-col justify-center items-center overflow-x-hidden">
      <div className="w-full relative">
        <div className="w-full px-4 md:px-0">
          <h2 className="text-[28px] md:text-[38px] text-[#04141A] font-[700] leading-[36px] md:leading-[57px] mb-8 text-center font-sans">
            DỰ ÁN ĐANG GỌI VỐN
          </h2>
          <Swiper
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={isMobile ? 20 : 40}
            slidesPerView={slidesPerView}
            centeredSlides={true}
            watchSlidesProgress={true}
            normalizeSlideIndex={true}
            roundLengths={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slideActiveClass="swiper-slide-active"
            slidePrevClass="swiper-slide-prev" 
            slideNextClass="swiper-slide-next"
            className="mySwiper !overflow-visible"
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            speed={1000}
          >
            {projectData?.length == 0 ? (
              <div>Loading...</div>
            ) : (
              projectData.map((project: any, index: number) => (
                <SwiperSlide
                  key={project?.id}
                  className="transition-all duration-300"
                >
                  {({ isActive, isNext, isPrev }) => (
                    <a
                      ref={ref}
                      href={`/detail-category/${project?.id}`}
                      className={`bg-[#07212C] rounded-xl overflow-visible transition duration-100 md:max-h-[386px] pb-[20px] gap-[24px] max-w-[778px] flex flex-col p-[12px] md:p-[32px] md:flex-row`}
                      data-aos="fade-right"
                      data-aos-duration="1500"  // Thời gian chạy animation (ms)
                      data-aos-easing="ease-in-out"
                    >
                      <div
                        ref={ref}
                        className={`md:w-1/2 w-full flex flex-col justify-center items-center  duration-700 ease-in-out transform `}
                      >
                        <div className="w-full h-full flex flex-col justify-center items-center rounded-lg overflow-hidden">
                          <Image
                            width={360}
                            height={322}
                            src={project?.images[0]}
                            alt={project.name}
                            className="object-cover  max-h-[224px] w-full md:max-h-none rounded-lg md:w-[360px] md:h-[332px]"
                          />
                          <a
                            href="/detail-category"
                            className="absolute font-sans top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-center"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                      <div className="md:w-1/2 w-full flex flex-col gap-[28px]">
                        <div className="flex flex-col gap-[8px]">
                          <span className="top-4 left-4 bg-[#FFFFFF]/20 text-[#0298F4] px-2 py-1 text-xs rounded inline-flex w-fit items-center ">
                            <FaFlag className="w-4 h-4 mr-1 font-sans" />
                            {project?.data?.project_information
                              ?.funding_round || ''}
                          </span>
                          <h3 className="text-2xl font-semibold leading-8 text-white mb-2 font-sans">
                            {project.name}
                          </h3>
                          <p className="text-gray-300 leading-6 text-sm mb-4 font-sans line-clamp-2 text-ellipsis overflow-x-hidden">
                            {project?.data?.project_information?.description ||
                              ''}
                          </p>
                        </div>

                        <div
                          className={` rounded-lg max-sm:m-1 
                              ${index === activeIndex ? 'bg-[#F3F7F4]' : 'bg-transparent'}
                              transition-all duration-300 p-[12px]
                            
                              `}
                        >
                          <p
                            className={`text-sm font-sans ${index === activeIndex ? 'text-[#000000]/64' : 'text-white'} mb-1`}
                          >
                            MỤC TIÊU HUY ĐỘNG
                          </p>
                          <p
                            className={`text-xl leading-6 pb-2 font-semibold font-sans  ${index === activeIndex ? 'text-[#04141A]' : 'text-[#FFFFFF]'}`}
                          >
                            ${project.capital_raising_target.toLocaleString()}
                          </p>

                          <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                            <div
                              className="bg-green-500 h-1.5 rounded-full font-sans max-w-full "
                              style={{
                                width: `${
                                  (project?.mobilized_fund /
                                    project?.capital_raising_target) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs mt-2 gap-[4px]">
                            <div className="flex flex-row items-center gap-1 3xl:gap-0 3xl:flex-col flex-wrap ">
                              <span className="font-bold font-inter text-[#48B96D] text-sm font-sans text-nowrap">
                                $
                                {project?.mobilized_fund?.toLocaleString() || 0}
                              </span>

                              <span
                                className={`text-nowrap ${index === activeIndex ? 'text-[#000000]/60' : 'text-[#FFFFFF]'} pl-0 font-sans`}
                              >
                                {' '}
                                Đã huy động
                              </span>
                            </div>
                            <div className=" flex flex-row items-center gap-1 3xl:gap-0 3xl:flex-col flex-wrap">
                              <span className="font-bold font-inter text-[#48B96D] text-sm font-sans text-nowrap">
                                {(
                                  (project?.mobilized_fund /
                                    project?.capital_raising_target) *
                                  100
                                ).toFixed(0) || 0}
                                %
                              </span>
                              <span
                                className={`text-nowrap ${index === activeIndex ? 'text-[#000000]/60' : 'text-[#FFFFFF]'} pl-0 font-sans`}
                              >
                                {' '}
                                Hoàn thành
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2  pt-[16px] ">
                          {project?.industries.map(
                            (item: any, index: number) => (
                              <span
                                key={index}
                                className="bg-gray-700 text-white text-xs px-2 py-1 rounded font-sans"
                              >
                                {item.name}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </a>
                  )}
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <div className="swiper-button-prev !hidden"></div>
          <div className="swiper-button-next !hidden"></div>

          <div className="flex justify-center items-center mt-6 w-full pb-6">
            <div className="bg-gray-200 h-2 rounded-full w-[1200px]">
              <div
                ref={progressBarRef}
                className="bg-[#31814B] h-2 rounded-full transition-all duration-300 font-sans"
                style={{ width: `${100 / projects.length}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
