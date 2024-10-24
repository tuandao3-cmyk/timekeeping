import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './news.module.css';

const newsData = [
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    image: '/img/20.png',
    videoLink: '#',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    image: '/img/21.png',
    link: '#',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    image: '/img/22.png',
    link: '#',
  },
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    image: '/img/23.png',
    link: '#',
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-3 w-full">
        <div className={`${styles.mainNews} `}>
          <a
            href={newsData[0].videoLink}
            className={`${styles.mainNewsLink} ${styles.newsLink}`}
          >
            <img
              ref={ref}
              src={newsData[0].image}
              alt="Main News"
              className={`${styles.mainImage} duration-700  ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            />
          </a>

          <h2
            ref={ref}
            className={`${styles.newsTitle} duration-700 delay-200  ease-in-out transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {newsData[0].title}
          </h2>
          <span
            ref={ref}
            className={`font-inter text-sm leading-6 text-gray-600 max-w-[80%] duration-700 delay-500  ease-in-out transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án
            "Phục dựng ảnh liệt sĩ" của Hà Nội.
          </span>
          <div className="w-[100%] flex justify-end max-w-[80%]">
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
              <a href={news.link} className={`${styles.newsLink}`}>
                <div className={styles.newsContent}>
                  <div className={styles.sideBorder}>
                    <h2 className={styles.newsTitle}>{news.title}</h2>

                    <span className="font-inter text-sm max-w-[80%] leading-6 text-gray-600">
                      HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành
                      cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.
                    </span>
                    <span className="text-gray-600 text-sm leading-6 ">
                      {news.date}
                    </span>
                  </div>
                  <img
                    src={news.image}
                    alt={`News ${index}`}
                    className={styles.newsImage}
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
