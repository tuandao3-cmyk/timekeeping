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
            <h2 className={styles.title}>TIN MỚI NHẤT VỀ HYRACAP</h2>
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
                        <div className={styles.overlay}>
                            <h2 className={styles.newsTitle}>
                                {newsData[0].title}
                            </h2>
                            <span className="font-inter text-sm leading-6 text-[#000000]/56">
                                Tìm hiểu thêm
                            </span>
                        </div>
                </div>
                <div className={styles.sideNews}>
                    {newsData.slice(1).map((news, index) => (
                        <div key={index} className={styles.newsItem}>
                            <a
                                href={news.link}
                                className={`${styles.newsLink}`}
                            >
                                <div className={styles.newsContent}>
                                    <div className={styles.sideBorder}>
                                        <h2 className={styles.newsTitle}>
                                            {news.title}
                                        </h2>
                                        <div className={styles.newsContent}>
                                            <span className="font-inter text-sm leading-6 text-[#000000]/56">
                                                Tìm hiểu thêm
                                            </span>
                                            <span className={styles.date}>
                                                {news.date}
                                            </span>
                                        </div>
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
