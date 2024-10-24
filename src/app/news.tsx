import React from 'react';
import styles from './news.module.css';

const newsData = [
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/20.png",
        videoLink: "#",
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/21.png",
        link: "#",
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/22.png",
        link: "#",
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/23.png",
        link: "#",
    },
];

const News = () => {
    return (
        <div className={styles.newsSection}>
            <h2 className="font-inter font-bold pb-6 pl-[5%] text-[40px] leading-[48px]">TIN MỚI NHẤT VỀ HYRACAP</h2>
            <div className="flex justify-end">
                <button className="bg-white text-gray-950 font-semibold py-2 px-4 mx-8 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 inline-block">
                    Xem thêm
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-3 w-full">
                <div className={styles.mainNews}>
                    <a
                        href={newsData[0].videoLink}
                        className={`${styles.mainNewsLink} ${styles.newsLink}`}
                    >
                        <img
                            src={newsData[0].image}
                            alt="Main News"
                            className={styles.mainImage}
                        />
                    </a>
                        
                            <h2 className={styles.newsTitle}>
                                {newsData[0].title}
                            </h2>
                            <span className="font-inter text-sm leading-6 text-gray-600 max-w-[80%]">
                            HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.
                            </span>
                        <div className="w-full flex justify-end">
                        <button className=" mr-16 bg-white text-gray-950 font-semibold py-2 px-4 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 flex items-center">
                                Chi tiết
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                </div>
                <div className={`${styles.sideNews} flex flex-col h-full`}>
                    {newsData.slice(1).map((news, index) => (
                        <div key={index} className={`${styles.newsItem} flex-1`}>
                            <a
                                href={news.link}
                                className={`${styles.newsLink} h-full flex flex-col`}
                            >
                                <div className={styles.newsContent}>
                                    <div className={styles.sideBorder}>
                                        <h2 className={styles.newsTitle}>
                                            {news.title}
                                        </h2>
                                        
                                            <span className="font-inter text-sm max-w-[80%] leading-6 text-gray-600">
                                            HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.
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
