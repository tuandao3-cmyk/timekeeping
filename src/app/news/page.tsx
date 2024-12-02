'use client';

import { useQuery } from '@tanstack/react-query';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material';
import { getNews } from '@/services/news.service';
import { Page } from '@/type/page.type';
import { formatDateTimeVn } from '@/util/util';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { ProjectCard } from './components/card';
import NewsItem from './components/newsItem';

const dataNews = [
  {
    title: 'CÔNG NGHỆ TRAO QUYỀN QUYẾT ĐỊNH TƯƠNG LAI',
    updated_at: '30/08/2024',
    link_img: '/img/news/newsimg1.png',
    videoLink: '/news/newsdetail',
    description:
      'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    subTitle:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    updated_at: '30/08/2024',
    link_img: '/img/news/newsimg2.png',
    link: '/news/newsdetail',
    description:
      'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    updated_at: '30/08/2024',
    link_img: '/img/news/newsimg3.png',
    link: '/news/newsdetail',
    description:
      'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    updated_at: '30/08/2024',
    link_img: '/img/news/newsimg4.png',
    link: '/news/newsdetail',
    description:
      'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    updated_at: '30/08/2024',
    link_img: '/img/news/newsimg5.png',
    link: '/news/newsdetail',
    description:
      'Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công nghệ từ Hyratek. Cập nhật những tin tức và kiến thức công...',
  },
];

const NewsPage: React.FC = () => {
  const [page, setPage] = React.useState<typeof Page>(Page);
  const router = useRouter();
  const [newsData, setNewsData] = React.useState<any[]>(dataNews);
  const { data, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: () =>
      getNews({
        ...page,
        take: 5,
      }),
  });

  const handleNavigate = (id: any) => {
    router.push(`/news/${id}`);
  };

  React.useEffect(() => {
    if (data) {
      let dataUpdate = data.data;
      data?.data?.length < 4
        ? (dataUpdate = data?.data?.concat(dataNews))
        : (dataUpdate = data?.data);
      console.log('dataUpdate', dataUpdate);

      setNewsData(dataUpdate);
    }
  }, [data]);

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });
  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const handleOpenPage = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center font-sans w-full min-h-[772px] lg:min-h-[520px] bg-[#07212C] bg-[url('/img/news/newsbg.png')] bg-no-repeat bg-cover bg-[75%_50%] lg:bg-[length:150%_150%]">
        <div className="  pb-[107px]">
          <div className="flex flex-col items-center justify-end text-center max-w-[570px] text-white gap-[22px]">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px',
                textAlign: 'center',
              }}
            >
              Tin tức
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
                padding: '0 10px',
              }}
            >
              Cung cấp những tin tức và góc nhìn mới nhất giúp bạn tiếp cận cơ
              hội đầu tư dễ dàng và hiệu quả.
            </Typography>
          </div>
        </div>
      </div>
      <section
        ref={ref2}
        className="w-full font-inter flex flex-col justify-center items-center md:p-5 xl:p-0"
      >
        <div className="flex flex-col max-w-[1201px] gap-[20px] md:gap-[40px] py-[62px]">
          <h1
            className={`pl-5 md:pl-0 text-2xl md:text-3xl leading-9 lg:text-[40px] lg:leading-[48px] font-bold text-gray-800  duration-700 ease-in-out transform ${
              inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Sự kiện nổi bật
          </h1>
          <div className="px-5 mt-0 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-4 ">
            {newsData.map((news: any, index: number) => (
              <>
                {index === 0 ? (
                  <ProjectCard
                    key={index}
                    project={news}
                    className={`lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-1 h-auto duration-700 ease-in-out transform ${
                      inView2
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  />
                ) : (
                  <NewsItem
                    id={news.id}
                    key={index}
                    index={index}
                    blog_category={news.blog_category}
                    description={news.description}
                    link_img={news.link_img}
                    title={news.title}
                    updated_at={news.updated_at}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>
      {/* -------------------news----------------------- */}
      <div className=" block md:hidden ">
        {newsData.map((news: any, index: number) => (
          <>
            {index === 0 ? (
              <div className=""></div>
            ) : (
              <div
                className={`${index == 1 ? 'mt-32' : 'mt-4'} mx-5 flex flex-row items-center gap-3 px-1 py-2 border`}
                style={{ borderRadius: 10 }}
                onClick={() => handleNavigate(news.id)}
              >
                <Image
                  width={115}
                  height={70}
                  src={news?.link_img[0] || ''}
                  alt=""
                  // layout="responsive"
                  quality={100}
                  className={` object-cover object-center max-w-[115px] rounded-lg 
                        h-[70px] w-[115px]
                    `}
                />
                <div className="">
                  <div className="flex flex-row items-center gap-2">
                    <Link
                      href={`news/${news.id}` || '#'}
                      className="text-[11px]  text-[#579DFF] font-semibold border-r pr-2"
                      style={{ borderColor: '#e0e0e1' }}
                    >
                      {news?.blog_category?.name || 'TIN TÀI CHÍNH'}
                    </Link>
                    <p
                      className={`text-[11px] ${index === 1 ? 'text-[#CBCBCD]' : 'text-gray-600'}`}
                    >
                      {formatDateTimeVn(news.updated_at)}
                    </p>
                  </div>
                  <h1 className={`text-[14px] font-bold mt-2 line-clamp-2  `}>
                    {news.title}
                  </h1>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      {/* -------------------Page----------------------- */}
      {/* {
        result.map((news: any, index: number) => (
          <>
            <div className="">
            <h1 className={` font-bold mt-3 line-clamp-2 text-lg `}>
                  {news.title}
                </h1>
            </div>
          </>
        ))
      } */}

      {/* upcomming */}
      <section className="w-full bg-cover bg-center flex justify-center flex-col items-center gap-3 bg-[#F3F7F4] mt-20 md:mt-0 md:p-5 xl:p-0">
        <div className="max-w-[1201px] md:py-[62px] py-[50px] flex flex-col md:gap-[40px] gap-[10px] w-[100%] ">
          <h1 className="w-full text-left text-2xl md:text-3xl leading-9 lg:text-[40px] lg:leading-[48px] font-bold text-gray-800  pl-5 md:pl-0 ">
            Sự kiện sắp tới
          </h1>

          <div className="flex flex-col justify-center items-center gap-4 pl-5 pr-5 md:pr-0 md:pl-0">
            <Image
              height={274}
              width={1200}
              layout="responsive"
              quality={100}
              onClick={() =>
                router.push('https://www.facebook.com/hyraholdings/')
              }
              className="h-[274px] sm:h-auto max-w-[100%] sm:w-[100%]"
              src="/img/news/upcoming.png"
              alt="image description"
            />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full  bg-cover bg-center flex justify-center flex-col items-center gap-8 md:p-5 xl:p-0">
        <div className="max-w-[1200px] ">
          <h1 className="w-full max-lg:px-8 text-left text-2xl md:text-3xl leading-9 lg:text-[40px] lg:leading-[48px] font-bold text-gray-800 pt-8 hidden md:block ">
            Sự kiện nổi bật
          </h1>
          <div className="w-full  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 m ">
            <div className="w-full  col-span-2 gap-3 hidden md:block">
              {newsData.slice(1, 4).map((news: any, index: number) => (
                <a href={`/news/${news.id}`} className="p-4" key={index}>
                  <div className="grid md:grid-cols-3  border-[1px] hover:scale-105 hover:border-none rounded-lg transition ease-in-out duration-150 hover:cursor-pointer">
                    <Image
                      width={320}
                      height={188}
                      quality={100}
                      style={{ cursor: 'pointer', height: '100% !important' }}
                      src={
                        news?.link_img[0] ||
                        'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
                      }
                      alt=""
                      className="  w-[320px]  h-[100%]   object-cover rounded-lg md:col-span-1"
                    />
                    <div className="p-4 md:col-span-2 flex flex-col justify-between">
                      <Link
                        href={`news/${news.id}` || '#'}
                        className="md:text-sm text-[#579DFF] text-sm font-semibold"
                      >
                        {news?.blog_category?.name || 'TIN TÀI CHÍNH'}
                      </Link>
                      <h1 className="md:text-[18px] text-[12px] font-medium text-gray-800">
                        {news?.title || ''}
                      </h1>
                      <p className="text-sm line-clamp-1 text-gray-600">
                        {news?.description || ''}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <p className="flex flex-row items-center gap-2 text-gray-600 text-center">
                          <Calendar size={16} />{' '}
                          {formatDateTimeVn(news?.updated_at || '')}
                        </p>
                        <button
                          onClick={() => handleNavigate(news.id)}
                          className={`md:px-6 md:py-3 px-3 py-2 text-[#000000]/90 border-[#c2c2c2] font-medium border-[1px]  rounded-full hover:bg-[#48B96D] `}
                        >
                          Đọc thêm
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="w-full  col-span-1 items-center  justify-center px-5 md:px-0 pb-4 md:pb-0">
              <h2 className="w-full md:text-center  md:text-[30px] text-[30px] font-bold text-gray-800 mt-8 md:mt-0">
                Theo dõi chúng tôi
              </h2>
              <div className=" flex  flex-col gap-4 mt-5 md:mt-0 md:px-36 lg:px-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      width={40}
                      height={40}
                      layout="responsive"
                      onClick={() =>
                        router.push('https://www.youtube.com/@hyracap')
                      }
                      src="/img/youtube_logo.jpg"
                      alt="Youtube"
                      style={{ cursor: 'pointer', maxWidth: 40, maxHeight: 40 }}
                      className=" w-[40px] h-[40px]  rounded-lg  "
                    />
                    <p className="text-gray-700 font-normal text-base">
                      50,987 Subscriber
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href = 'https://youtube.com')
                    }
                    className="flex bg-gray-100 items-center justify-center w-10 rounded-md h-10 rounded-xs md:border border-gray-300 hover:border-gray-400 transition-colors "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-center ">
                  <div className="flex items-center gap-5">
                    <Image
                      width={40}
                      height={40}
                      layout="responsive"
                      onClick={() =>
                        router.push('https://www.facebook.com/hyracap')
                      }
                      src="/img/facebook_logo.png"
                      style={{ cursor: 'pointer', maxWidth: 40, maxHeight: 40 }}
                      alt="Facebook"
                      className=" w-[40px] h-[40px]  rounded-lg  "
                    />
                    <p className="text-gray-700 font-normal text-base">
                      50,987 Follow
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      router.push('https://www.facebook.com/hyracap')
                    }
                    className="flex bg-gray-100 items-center justify-center w-10 h-10 rounded-md rounded-xs md:border border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      width={40}
                      height={40}
                      layout="responsive"
                      onClick={() => router.push('https://x.com/hyracap')}
                      src="/img/x_logo.jpg"
                      style={{ cursor: 'pointer', maxWidth: 40, maxHeight: 40 }}
                      alt="X"
                      className=" w-[40px] h-[40px]   "
                    />
                    <p className="text-gray-700 font-normal text-base">
                      50,987 Follower
                    </p>
                  </div>
                  <button
                    onClick={() => (window.location.href = 'https://x.com')}
                    className="flex bg-gray-100 items-center justify-center w-10 h-10 rounded-md rounded-xs md:border border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex index-2 justify-center items-center  bg-[#07212C] w-full md:w-[450px] md:mx-[19%] lg:mx-0 lg:w-full h-full max-lg:max-h-[300px] lg:max-h-[390px] rounded-lg my-8  p-5 mt-14">
                <div className="index-3 relative flex flex-row text-white  font-bold text-[11px] bg-[#48B96D] w-full h-full md:text-[15px] rounded-lg">
                  <div className=" flex  flex-col h-full text-[20px] md:text-2xl lg:text-3xl  justify-between gap-4 py-5 px-28 pl-5 md:py-10 md:px-8  ">
                    <p className="max-w-[250px] ">
                      Trải nghiệm ngay nền tảng đầu tư HyraCap
                    </p>

                    <div className="flex text-xs font-medium flex-col max-w-[130px] md:max-w-[140px] pb-10 gap-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.hyracap"
                        className="flex items-center  gap-2 bg-white text-[#34A853] p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FaGooglePlay className="md:text-xl text-[14px]" />
                        <span>GOOGLE PLAY</span>
                      </a>

                      <a
                        href="https://apps.apple.com/app/hyracap"
                        className="flex items-center gap-2 bg-white text-[#34A853] p-2 rounded-full hover:bg-gray-100 transition-colors "
                      >
                        <FaApple className="md:text-xl text-[14px]" />
                        <span>APP STORE</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={216}
                      height={228}
                      layout="responsive"
                      src="/img/product/app_log.png"
                      alt="screenshot"
                      className="max-w-[216px] max-h-[228px] absolute -right-10 -bottom-4"
                    />
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
