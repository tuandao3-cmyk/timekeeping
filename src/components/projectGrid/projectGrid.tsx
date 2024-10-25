'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaFlag } from 'react-icons/fa';
import useWindowSize from './useWindowSize';
import { FaChevronRight } from 'react-icons/fa6';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const projects = [
  {
    id: 1,
    name: 'HYPERAS CHAIN',
    series: 'SERIES A',
    description:
      'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị biên xây dựng hạ tầng AI phi tập trung mạnh mẽ',
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

const ProjectSlider: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

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
    slidesPerView = 1.75;
  } else if (isUltraWide) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1; // Giá trị mặc định
  }

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiper) {
      swiper.params.slidesOffsetBefore = slidesOffsetBefore;
      swiper.params.slidesPerView = slidesPerView;
      swiper.update();
    }
  }, [swiper, slidesOffsetBefore, slidesPerView]);

  useEffect(() => {
    if (progressBarRef.current) {
      const percentage = ((activeIndex + 1) / projects.length) * 100;
      progressBarRef.current.style.width = `${percentage}%`;
    }
  }, [activeIndex, projects.length]);

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="max-w-7xl">
        <div className="w-full relative">
          <h2 className="text-3xl font-bold mb-8 text-center">
            DỰ ÁN ĐANG GỌI VỐN
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={isMobile ? 20 : 40}
            slidesPerView={slidesPerView}
            centeredSlides={false}
            slidesOffsetBefore={slidesOffsetBefore}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="mySwiper"
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="max-w-[778px]">
                {({ isActive }) => (
                  <a
                    ref={ref}
                    href="/detail-category"
                    className={`bg-[#07212C] rounded-xl max-h-[386px] max-w-[778px] overflow-hidden transition-all duration-300 flex flex-col sm:flex-row ${isActive ? 'scale-100' : 'scale-90'} `}
                  >
                    <div
                      ref={ref}
                      className={`md:w-1/2 w-full relative p-8 duration-700 ease-in-out transform `}
                    >
                      <div className="w-full h-full rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                        <a
                          href="/detail-category"
                          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-center"
                        >
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                      <div>
                        <span className="top-4 left-4 bg-[#FFFFFF]/20 text-[#0298F4] px-2 py-1 text-xs rounded flex items-center inline-flex">
                          <FaFlag className="w-4 h-4 mr-1" />
                          {project.series}
                        </span>
                        <h3 className="text-2xl font-semibold leading-8 text-white mb-2">
                          {project.name}
                        </h3>
                        <p className="text-gray-300 leading-6 text-sm mb-4">
                          {project.description}
                        </p>
                      </div>
                      <div>
                        <div className="bg-white rounded-lg p-5 max-sm:m-1 m-3 mb-7">
                          <p className="text-sm font-inter text-[#000000]/64 mb-1">
                            MỤC TIÊU HUY ĐỘNG
                          </p>
                          <p className="text-xl leading-6 font-semibold">
                            ${project.target.toLocaleString()}
                          </p>
                          <div className="flex justify-between text-xs mt-2">
                            <div>
                              <span className="font-bold font-inter text-green-500 text-sm">
                                ${project.raised.toLocaleString()}
                              </span>
                              <span className="text-[#000000]/64 max-w-[10%] pl-0">
                                {' '}
                                Đã huy động
                              </span>
                            </div>
                            <div>
                              <span className="font-bold font-inter text-green-500 text-sm">
                                {project.percentage}%
                              </span>
                              <span className="text-[#000000]/64 pl-0">
                                {' '}
                                Hoàn thành
                              </span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                            <div
                              className="bg-green-500 h-1.5 rounded-full"
                              style={{ width: `${project.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-3">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-700 text-white text-xs px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev !hidden"></div>
          <div className="swiper-button-next !hidden"></div>
          <div
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#F3F7F4] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E0E7E2] transition-colors duration-300 shadow-md"
          >
            <MdArrowBackIos className="text-3xl text-gray-700 ml-1" />
          </div>
          <div
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#F3F7F4] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E0E7E2] transition-colors duration-300 shadow-md"
          >
            <MdArrowForwardIos className="text-3xl text-gray-700 mr-1" />
          </div>
          <div className="flex justify-center mt-6 w-full pb-6">
            <div className="bg-gray-200 h-2 rounded-full w-[85vw] ">
              <div
                ref={progressBarRef}
                className="bg-[#31814B] h-2 rounded-full transition-all duration-300"
                style={{ width: `${100 / projects.length}%` }} // Giá trị mặc định
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
