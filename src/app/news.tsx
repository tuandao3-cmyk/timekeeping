import React from 'react';
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
  return (
    <div className={styles.newsSection}>
      <h2 className={styles.title}>Tin mới nhất về HyraCap</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-3 w-full ">
        <div className={`${styles.mainNews} `}>
          <a
            href={newsData[0].videoLink}
            className={`${styles.mainNewsLink} ${styles.newsLink} `}
          >
            <img
              src={newsData[0].image}
              alt="Main News"
              className="w-full h-auto object-cover  rounded-[10px]"
            />
            <div className={styles.overlay}>
              <h2 className="md:text-[25px] text-white font-bold">
                {newsData[0].title}
              </h2>
              <span className={styles.readMore}>TÌM HIỂU THÊM</span>
            </div>
          </a>
        </div>
        <div className={'grid-cols-1'}>
          {newsData.slice(1).map((news, index) => (
            <div
              key={index}
              className={`${styles.newsItem} border-b-2 border-[#D8D8D8] pb-1`}
            >
              <a href={news.link} className={`${styles.newsLink}`}>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5">
                  <div className="md:col-span-2 order-2 md:order-1">
                    <h2 className="text-white text-[20px] font-bold">
                      {news.title}
                    </h2>
                    <div className="flex justify-between items-center">
                      <span className={styles.readMore}>TÌM HIỂU THÊM</span>
                      <span className={styles.date}>{news.date}</span>
                    </div>
                  </div>
                  <img
                    src={news.image}
                    alt={`News ${index}`}
                    className="w-full h-auto object-cover max-w-full sm:max-w-[233px] sm:max-h-[145px] rounded-[10px] mx-auto order-1 md:order-2"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center  md:mt-0">
        <a className="border rounded-xl border-[#7EFFD8] text-white py-2 px-4  hover:border-gray-600 transition-colors duration-300 max-w-[250px]">
          TÌM HIỂU THÊM CÁC DỰ ÁN
        </a>
      </div>
    </div>
  );
};

export default News;
