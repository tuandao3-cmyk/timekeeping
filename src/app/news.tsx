import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './news.module.css';
import { desc } from 'framer-motion/client';

const newsData = [
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    image: '/img/20.png',
    videoLink: '/news/newsdetail',
    description:
      'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên  cho trí tuệ nhân tạo (AI)...',
  },
  {
    title:
      'Egabid áp dụng công nghệ blockchain đảm bảo tính minh bạch và an toàn cho mỗi lượt đấu giá',
    date: '10 tháng 10, 2024',
    image: '/img/item1-1.png',
    videoLink: '/news/newsdetail',
    description:
      'Egabid là sàn thương mại điện tử đấu giá ngược trong hệ sinh thái Hyperas, cung cấp một nền tảng đấu giá ngược độc đáo',
  },
  {
    title:
      'Giải pháp hạ tầng điện toán biên chi phí thấp giúp xử lý dữ liệu lớn',
    date: '10 tháng 10, 2024',
    image: '/img/item1-2.png',
    videoLink: '/news/newsdetail',
    description:
      'Salala là một nền tảng kinh tế chia sẻ dựa trên điện toán biên, cho phép người dùng chia sẻ tài nguyên để cùng nhau ...',
  },
  {
    title:
      'Hyperas thúc đẩy một hệ sinh thái AI toàn diện với sự đổi mới, hợp tác và phát triển bền vững.',
    date: '10 tháng 10, 2024',
    image: '/img/item1-3.png',
    videoLink: '/news/newsdetail',
    description:
      'Hyperas hướng tới việc trở thành một nền tảng hàng đầu trong việc cung cấp giải pháp cho các vấn đề về hạ tầng tính toán ...',
  },
];

const News = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className={`${styles.newsSection} bg-[#F3F7F4]`}>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1440px]">
          <div className=" flex justify-between ">
            <h2 className="font-inter font-bold pb-6  text-[36px] leading-[48px]">
              TIN MỚI NHẤT VỀ HYRACAP
            </h2>
            <button className=" max-h-[48px]  bg-white text-gray-950 font-semibold  px-4 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 flex items-center">
              Xem thêm
            </button>
          </div>
          <div className="flex gap-[126px] p-3 w-full">
            <div className={`${styles.mainNews} max-w-[486px]  `}>
              <a
                href={newsData[0].videoLink}
                className={`${styles.mainNewsLink} ${styles.newsLink} flex justify-start items-start max-w-[486px] mb-[40px]`}
              >
                <img
                  ref={ref}
                  src={newsData[0].image}
                  alt="Main News"
                  className={`${styles.mainImage} duration-300 max-w-[486px]  ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                />
              </a>

              <div className="flex flex-col items-start justify-start">
                <a
                  href={newsData[0].videoLink}
                  className={`${styles.newsTitle}  duration-300 delay-200 text-[24px] text-[#000000]/80  ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {newsData[0].title}
                </a>
              </div>
              <div className="flex flex-col items-start  justify-start">
                <a
                  href={newsData[0].videoLink}
                  className={`font-inter text-sm leading-6 text-gray-600 duration-300 delay-500  ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {newsData[0].description}
                </a>
              </div>
              <div className="w-full flex justify-end items-end ">
                <div className="w-[100%] flex justify-end items-end ">
                  <button
                    ref={ref}
                    className={` bg-white text-gray-950 font-semibold py-2 px-4 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 flex items-center delay-700  ease-in-out transform ${
                      inView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    Chi tiết
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.sideNews} `}>
              {newsData.slice(1).map((news, index) => (
                <div
                  ref={ref}
                  key={index}
                  className={`${styles.newsItem} duration-300 delay-${index * 100} pb-[20px] pt-[20px] max-w-[650px] ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <a href={news.videoLink} className={`${styles.newsLink}`}>
                    <div className={styles.newsContent}>
                      <div className={styles.sideBorder}>
                        <div className="flex flex-col gap-[16px]">
                          <p
                            className={`${styles.newsTitle} max-w-[400px] text-16px text-[#000000CC] text-opacity-80`}
                          >
                            {news.title}
                          </p>

                          <span className="font-inter text-sm max-w-[400px] leading-6 text-gray-600">
                            {news.description}
                          </span>
                        </div>
                        <span className="text-gray-600 text-sm leading-6 ">
                          {news.date}
                        </span>
                      </div>
                      <img
                        src={news.image}
                        alt={`News ${index}`}
                        className={`${styles.newsImage} max-w-[170px] max-h-[170px]`}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
