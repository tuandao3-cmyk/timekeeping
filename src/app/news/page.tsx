'use client';

import React from 'react';
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
    imageUrl: '/img/egabid.png',
    link: '/news/newsdetail',
  },
];

const NewsPage: React.FC = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/img/news/news_banner.png")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 justify-between items-center h-full p-8 gap-4">
          <div className="w-full md:col-span-1 xl:col-span-1 lg:col-span-2  text-center md:text-left text-white flex justify-center items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tin tức
              </h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                Tin tức mới nhất về thị trường tài chính
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 p-8">
          Sự kiện nổi bật
        </h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 gap-4 p-8 md:max-h-[600px]">
          {newsData.map((news: any, index: number) => (
            <>
              {index === 1 ? (
                <ProjectCard
                  key={index}
                  project={news}
                  className="lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-1"
                />
              ) : (
                <div
                  key={index}
                  className={`bg-white rounded-lg  overflow-hidden ${
                    index === 0
                      ? 'lg:row-span-2 lg:col-span-1 md:row-span-1  col-span-1'
                      : ''
                  }`}
                >
                  <img
                    src={news.imageUrl}
                    alt=""
                    className={`w-full   object-cover object-center md:max-h-[160px] ${
                      index === 0 ? 'lg:h-auto' : ''
                    }
                   
                    `}
                  />
                  <div className="p-4">
                    <h1 className="md:text-[15px] text-[15px] font-bold text-gray-800 line-clamp-2">
                      {news.title}
                    </h1>

                    <div
                      className={`flex justify-between items-center ${
                        index === 1 ? 'absolute' : ''
                      }`}
                    >
                      <Link
                        href={news.link || '/news/newsdetail'}
                        className="md:text-[15px] text-[#03A638] text-sm font-semibold"
                      >
                        CÔNG NGHỆ
                      </Link>
                      <p className="text-sm text-gray-600 mt-2">{news.date}</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      {/* upcomming */}
      <section className="w-full bg-cover bg-center flex justify-center flex-col items-center gap-3">
        <h1 className="w-full text-left text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 px-8">
          Sự kiện sắp tới
        </h1>

        <img
          className="h-auto max-w-[90%]"
          src="/img/news/news_upcomming.png"
          alt="image description"
        />
        <div className="container mx-auto md:max-w-[90%] overflow-x-auto">
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
        </div>
      </section>

      {/*  */}
      <section className="w-full bg-cover bg-center flex justify-center flex-col items-center gap-3">
        <h1 className="w-full text-left text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 px-8">
          Sự kiện đã diễn ra
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          <div className="w-full col-span-2 gap-3">
            {newsData.map((news: any, index: number) => (
              <a href="/news/newsdetail" className="p-4" key={index}>
                <div className="grid md:grid-cols-3  border-[1px]">
                  <img
                    src={news.imageUrl}
                    alt=""
                    className="w-full h-auto md:max-w-[500px] md:max-h-[233px] object-cover rounded-lg md:col-span-1"
                  />
                  <div className="p-4 md:col-span-2">
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
              </a>
            ))}
          </div>
          <div className="w-full col-span-1 items-center  justify-center">
            <h2 className="w-full text-center md:text-[30px] text-[15px] font-bold text-gray-800">
              Mạng xã hội
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-7">
                  <img
                    src="/img/facebook_logo.png"
                    alt="Facebook"
                    className="w-auto h-auto max-w-[50px] max-h-[50px]  rounded-full  "
                  />
                  <p className="text-black font-bold">50,987 Fans</p>
                </div>
                <a href="/news/newsdetail" className="text-[#4D69A2] font-bold">
                  LIKE
                </a>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-7">
                  <img
                    src="/img/x_logo.jpg"
                    alt="X"
                    className="w-auto h-auto max-w-[50px] max-h-[50px]  rounded-full  "
                  />
                  <p className="text-black font-bold">8,987 Follower</p>
                </div>
                <a href="/news/newsdetail" className="text-[#4D69A2] font-bold">
                  FOLLOW
                </a>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-7">
                  <img
                    src="/img/youtube_logo.jpg"
                    alt="Youtube"
                    className="w-auto h-auto max-w-[50px] max-h-[50px]  rounded-full  "
                  />
                  <p className="text-black font-bold">50,987 Fans</p>
                </div>
                <a href="/news/newsdetail" className="text-[#4D69A2] font-bold">
                  SUBSCRIBE
                </a>
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
      </section>
    </>
  );
};
export default NewsPage;
