'use client';
import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/icons';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';

import { getNewsDetail, getNews } from '@/services/news.service';
import { useEffect, useState } from 'react';
import { Page } from '@/type/page.type';
import { formatDateTimeVn } from '@/util/util';
import style from './newsDetail.module.css';

const NewsDetail: React.FC = ({ params, searchParams }: any) => {
  const [dataNews, setDataNews] = useState<any>({});
  const [dataList, setDataList] = useState<any>([]);
  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['news', params.id],
    queryFn: () => getNewsDetail(params.id),
  });
  const {
    data: data1,
    error: error1,
    isLoading: isLoading1,
    isError: isError1,
    isSuccess: isSuccess1,
  } = useQuery({
    queryKey: ['news'],
    queryFn: () =>
      getNews({
        ...Page,
        take: 3,
      }),
  });

  useEffect(() => {
    if (isSuccess1) {
      console.log(data1?.data);

      setDataList(data1?.data);
    }
  }, [data1]);

  useEffect(() => {
    if (isSuccess) {
      console.log(data?.data);

      setDataNews(data?.data);
    }
  }, [data]);

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
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center">
        <div className="w-full max-w-[1200px] p-8 ">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-fit rounded-full bg-[#000000]/10 text-sm font-semibold text-[#000000]/50 px-2 py-1">
                News
              </div>
              <div className="text-sm font-semibold text-[#000000]/50">
                5 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold  mb-4">
              {dataNews?.title}
            </h1>
          </div>

          <div className="relative flex flex-row gap-4 py-4 items-center">
            <Image
              src="/img/logohyracap.png"
              // layout="responsive"
              alt="logo"
              className="flex-start"
              width={100}
              height={100}
            />
            <div className="flex flex-row justify-center space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FacebookIcon />
                <span className="sr-only">Facebook page</span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <XIcon />
                <span className="sr-only">X page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <YouTubeIcon />
                <span className="sr-only">Youtube page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <LinkedInIcon />
                <span className="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>

          <div className="mb-8 flex justify-center items-center">
            <Image
              src={
                dataNews?.link_img
                  ? dataNews?.link_img[0]
                  : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
              }
              loading="lazy"
              alt="Privacy policy"
              // layout="responsive"
              width={1200}
              height={600}
              className="w-full max-w-[1200px] max-h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'left',
            }}
            className={style.newsContent}
            dangerouslySetInnerHTML={{ __html: dataNews?.content }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-[#F3F7F4] mx-auto">
        <div className="max-w-[1280px] my-10 px-5">
          <div className="text-3xl md:text-4xl w-full text-left lg:text-5xl font-bold mb-4 ">
            Bài viết liên quan
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataList.map((news: any, index: number) => (
              <>
                <div
                  onClick={() => {
                    window.location.href = `/news/${news.id}`;
                  }}
                  key={index}
                  className={` rounded-lg p-2 cursor-pointer overflow-hidden shadow-sm hover:scale-105 transition ease-in-out duration-100 hover:shadow-lg ${'bg-[#F3F7F4] md:max-h-[517px]'}`}
                >
                  <Image
                    width={384}
                    height={234}
                    // layout="responsive"
                    src={
                      news?.link_img[0] ||
                      'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
                    }
                    alt=""
                    className={`w-full object-cover object-center rounded-lg ${'md:h-[234px]'}`}
                  />
                  <div className="mt-3">
                    <Link
                      href={`/${news.id}` || '#'}
                      className="md:text-[15px] text-[#579DFF] text-sm font-semibold"
                    >
                      {news?.blog_category?.name || 'CÔNG NGHỆ'}
                    </Link>
                    <h1
                      className={`font-bold mt-3 line-clamp-2 text-lg ${'text-[#151515]'}`}
                    >
                      {news.title}
                    </h1>
                    <div className={`text-sm mt-3 ${'text-gray-600'}`}>
                      <div
                        dangerouslySetInnerHTML={{ __html: news.text }}
                        className="items-center"
                      />
                    </div>
                    <div className="flex justify-between items-center text-sm mt-8">
                      <p
                        className={`flex flex-row items-center gap-2 ${'text-gray-600'}`}
                      >
                        <Calendar size={16} />{' '}
                        {formatDateTimeVn(news.updated_at)}
                      </p>
                      <a
                        href={`${news.id}` || '#'}
                        className={`md:px-6 md:py-3  px-3 py-2 ${'text-[#000000]/90 border-[#000000]/90 mx-4'} font-medium border-[1px] mb-2 rounded-full`}
                      >
                        Đọc thêm
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
