'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '@/app/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { ProjectCard } from './components/card';

const newsData = [
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    imageUrl: '/img/20.png',
    videoLink: '/news/newsdetail',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    subTitle:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    imageUrl: '/img/21.png',
    link: '/news/newsdetail',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    imageUrl: '/img/22.png',
    link: '/news/newsdetail',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    imageUrl: '/img/art6.png',
    link: '/news/newsdetail',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    imageUrl: '/img/art2.png',
    link: '/news/newsdetail',
  },
];

const NewsPage: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });
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
      <div
        ref={ref}
        className="relative w-full h-[479px] bg-cover bg-center "
        style={{ backgroundImage: 'url("/img/news/news_banner.png")' }}
      >
        <div className="absolute top-0 left-0 w-[40%] h-full bg-[#07212c] bg-opacity-100">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 justify-between items-center h-full p-8 gap-4">
          <div className="w-full md:col-span-1 xl:col-span-1 lg:col-span-2  text-center md:text-left text-white flex justify-center items-center">
            <div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
              duration-700 ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }
              `}
              >
                Tin tức
              </h1>
              <p
                className={`mt-4 text-lg md:text-xl lg:text-2xl duration-700 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                Tin tức mới nhất về thị trường tài chính
              </p>
            </div>
          </div>
        </div>
        </div>


      </div>

      <section
        ref={ref2}
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col max-w-[1200px]">
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 p-8 duration-700 ease-in-out transform ${
              inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Sự kiện nổi bật
          </h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-4 p-8">
            {newsData.map((news: any, index: number) => (
              <>
                {index === 0 ? (
                 
                  <ProjectCard
                    key={index}
                    project={news}
                    className={`lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-1 h-auto duration-700 ease-in-out transform ${
                      inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  />
                ) : (
                  
                  <div
                    key={index}
                    className={` rounded-lg overflow-hidden ${
                      index === 1 
                        ? 'lg:row-span-2 lg:col-span-1 bg-[#07212C] md:row-span-1 col-span-1 md:max-h-[600px]' 
                        : 'bg-white md:max-h-[550px]'
                    }`}
                  >
                    <img
                      src={index === 3 ? 'img/art6.png' : news.imageUrl}
                      alt=""
                      className={`w-full object-cover object-center rounded-lg ${
                        index === 1 ? 'md:h-[300px]' : 'md:h-[200px]'
                      }`}
                    />
                    <div className="p-4">
                      <Link
                        href={news.link || '#'}
                        className="md:text-[15px] text-[#579DFF] text-sm font-semibold"
                      >
                        CÔNG NGHỆ
                      </Link>
                      <h1 className={`  font-medium  line-clamp-2 ${index === 1 ? 'text-white text-lg' : 'text-gray-800  text-[15px]'}`}>
                        {news.title}
                      </h1>
                      <div className="flex justify-between items-center text-sm mt-8">
                        <p className={`${index === 1 ? 'text-[#CBCBCD]' : 'text-gray-600'}`}>
                          {news.date}
                        </p>
                        <button className={`${index === 1 ? 'text-[#FFFFFF]/90 border-[#FFFFFF]/20' : 'text-[#000000]/90 border-[#000000]/90'} font-medium border-[1px]  rounded-full px-2 py-1`}>
                          Đọc thêm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* upcomming */}
      <section className="w-full bg-cover bg-center flex justify-center flex-col items-center gap-3">
        <div className="max-w-[1200px] ">
          <h1 className="w-full text-left text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 p-8">
            Sự kiện sắp tới
          </h1>

          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="h-auto max-w-[100%]"
              src="/img/news/upcoming.png"
              alt="image description"
            />
            {/* <div className="container mx-auto  overflow-x-auto">
              <div className="flex gap-6 flex-nowrap">
                {newsData.map((news: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[250px] "
                  >
                    <img
                      src={news.imageUrl}
                      alt=""
                      className="w-full object-cover object-center bg-center max-h-[200px] h-auto"
                    />
                    <div className="p-4 ">
                      <h1 className="md:text-[18px] text-[12px] font-bold text-gray-800">
                        {news.title}
                      </h1>
                      <div className="flex justify-between items-center">
                        <Link
                          href={news.link || '#'}
                          className="md:text-sm text-[#03A638] text-sm font-semibold"
                        >
                          CÔNG NGHỆ
                        </Link>
                        <p className="text-sm text-gray-600 text-center">
                          {news.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full bg-cover bg-center flex justify-center flex-col items-center gap-3">
        <div className="max-w-[1200px]">
          <h1 className="w-full text-left text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pt-8">
            Sự kiện đã diễn ra
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className="w-full col-span-2 gap-3">
              {newsData.map((news: any, index: number) => (
                <a href="#" className="p-4" key={index}>
                  <div className="grid md:grid-cols-3  border-[1px]">
                    <img
                      src={news.imageUrl}
                      alt=""
                      className="w-full h-auto md:max-w-[500px] md:max-h-[233px] object-cover rounded-lg md:col-span-1"
                    />
                    <div className="p-4 md:col-span-2 flex flex-col justify-between">
                        <Link
                          href={news.link || '#'}
                          className="md:text-sm text-[#579DFF] text-sm font-semibold"
                        >
                          CÔNG NGHỆ
                        </Link>
                      <h1 className="md:text-[18px] text-[12px] font-bold text-gray-800">
                        {news.title}
                      </h1>
                      <div className="flex justify-between items-center text-sm">
                        <p className=" text-gray-600 text-center">
                          {news.date}
                        </p>
                        <button className={`${index === 1 ? 'text-[#FFFFFF]/90 border-[#FFFFFF]/20' : 'text-[#000000]/90 border-[#000000]/90'} font-medium border-[1px]  rounded-full px-2 py-1`}>
                          Đọc thêm
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="w-full col-span-1 items-center  justify-center">
              <h2 className="w-full text-center md:text-[30px] text-[15px] font-bold text-gray-800">
                Theo dõi chúng tôi
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center ">
                  <div className="flex items-center gap-7">
                    <img
                      src="/img/facebook_logo.png"
                      alt="Facebook"
                      className="w-auto h-auto max-w-[50px] max-h-[50px]  rounded-full  "
                    />
                    <p className="text-gray-700 font-normal text-base">50,987 Follow</p>
                  </div>
                  <button className="flex bg-gray-100 items-center justify-center w-8 h-8 rounded-xs border border-gray-300 hover:border-gray-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-7">
                    <img
                      src="/img/x_logo.jpg"
                      alt="X"
                      className="w-auto h-auto max-w-[50px] max-h-[50px]  rounded-full  "
                    />
                    <p className="text-gray-700 font-normal text-base">8,987 Follower</p>
                  </div>
                  <button className="flex bg-gray-100 items-center justify-center w-8 h-8 rounded-xs border border-gray-300 hover:border-gray-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-7">
                    <img
                      src="/img/youtube_logo.jpg"
                      alt="Youtube"
                      className="w-auto h-auto max-w-[50px] max-h-[50px]  rounded-full  "
                    />
                    <p className="text-gray-700 font-normal text-base">50,987 Fans</p>
                  </div>
                  <button className="flex bg-gray-100 items-center justify-center w-8 h-8 rounded-xs border border-gray-300 hover:border-gray-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="flex justify-center items-center gap-4 bg-no-repeat bg-cover bg-center w-full h-[200px] rounded-lg mt-2 p-2"
                style={{ backgroundImage: 'url("/img/69.png")' }}
              >
                <div className="text-white font-bold text-[11px] px-2 md:text-[15px]">
                  <p>Trải nghiệm ngay </p>
                  <p>nền tảng đầu tư HyraCap</p>
                </div>
                <div>
                  <img
                    src="/img/product/product_image.png"
                    alt="screenshot"
                    className="max-w-[150px] max-h-[150px]"
                  />
                  <div className="bg-white flex p-2 rounded-lg">
                    <a href="" className="px-2">
                      <img
                        src="/img/googlePLay.png"
                        alt="Google play"
                        className="max-w-[70px]"
                      />
                    </a>
                    <a href="" className="border-l-2 border-gray-300 px-2">
                      <img
                        src="/img/appStore.png"
                        alt="App store"
                        className="max-w-[70px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsPage;
