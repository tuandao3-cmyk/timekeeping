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
    image: '/img/21.png',
    videoLink: '/news/newsdetail',
    description:
      'Egabid là sàn thương mại điện tử đấu giá ngược trong hệ sinh thái Hyperas, cung cấp một nền tảng đấu giá ngược độc đáo',
  },
  {
    title:
      'Giải pháp hạ tầng điện toán biên chi phí thấp giúp xử lý dữ liệu lớn',
    date: '10 tháng 10, 2024',
    image: '/img/22.png',
    videoLink: '/news/newsdetail',
    description:
      'Salala là một nền tảng kinh tế chia sẻ dựa trên điện toán biên, cho phép người dùng chia sẻ tài nguyên để cùng nhau huấn luyện và suy luận các mô hình AI.',
  },
  {
    title:
      'Hyperas thúc đẩy một hệ sinh thái AI toàn diện với sự đổi mới, hợp tác và phát triển bền vững.',
    date: '10 tháng 10, 2024',
    image: '/img/23.png',
    videoLink: '/news/newsdetail',
    description:
      'Hyperas hướng tới việc trở thành một nền tảng hàng đầu trong việc cung cấp giải pháp cho các vấn đề về hạ tầng tính toán trong ngành công nghệ AI. ',
  },
];

const News = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });
  return (
    <div className={styles.newsSection}>
      <h2 className="font-inter font-bold pb-6 pl-[5%] text-[40px] leading-[48px]">
        TIN MỚI NHẤT VỀ HYRACAP
      </h2>
      <button className="absolute top-10 right-16 bg-white text-gray-950 font-semibold py-2 px-4 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 flex items-center">
        Xem thêm
      </button>
      <div className="flex gap-6 p-3 w-full">
        <div className={`${styles.mainNews} max-w-[486px]  `}>
          <a
            href={newsData[0].videoLink}
            className={`${styles.mainNewsLink} ${styles.newsLink} flex justify-start items-start max-w-[486px] mb-[40px]`}
          >
            <img
              ref={ref}
              src={newsData[0].image}
              alt="Main News"
              className={`${styles.mainImage} duration-700 max-w-[400px]  ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            />
          </a>

          <div className="flex flex-col items-start justify-start">
            <p
              ref={ref}
              className={`${styles.newsTitle}  duration-700 delay-200 text-[24px] text-[#31814B]  ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {newsData[0].title}
            </p>
          </div>
          <div className="flex flex-col items-start  justify-start">
            <span
              ref={ref}
              className={`font-inter text-sm leading-6 text-gray-600 duration-700 delay-500  ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {newsData[0].description}
            </span>
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
        <div className={styles.sideNews}>
          {newsData.slice(1).map((news, index) => (
            <div
              ref={ref}
              key={index}
              className={`${styles.newsItem} duration-700 delay-${index * 100} ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <a href={news.videoLink} className={`${styles.newsLink}`}>
                <div className={styles.newsContent}>
                  <div className={styles.sideBorder}>
                    <h2 className={`${styles.newsTitle} text-16px`}>
                      {news.title}
                    </h2>

                    <span className="font-inter text-sm max-w-[80%] leading-6 text-gray-600">
                      {news.description}
                    </span>
                    <span className="text-gray-600 text-sm leading-6 ">
                      {news.date}
                    </span>
                  </div>
                  <img
                    src={news.image}
                    alt={`News ${index}`}
                    className={`${styles.newsImage} max-w-[190px] max-h-[190px]`}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
