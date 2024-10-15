
import React from 'react';
import styles from './news.module.css';

const newsData = [
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: '30/08/2024',
        image: '/img/20.png',
        videoLink: '#',
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: '30/08/2024',
        image: '/img/21.png',
        link: '#',
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: '30/08/2024',
        image: '/img/22.png',
        link: '#',
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: '30/08/2024',
        image: '/img/23.png',
        link: '#',
    },
];

const News = () => {
    return (
        <div className={styles.newsSection}>
            <h2 className={styles.title}>Tin mới nhất về HyraCap</h2>
            <div className={styles.newsContainer}>
                <div className={styles.mainNews}>
                <a href={newsData[0].videoLink} className={`${styles.mainNewsLink} ${styles.newsLink}`}>
                    <img src={newsData[0].image} alt="Main News" className={styles.mainImage} />
                    <div className={styles.overlay}>
                       <h2 className={styles.newsTitle}>{newsData[0].title}</h2>
                       <span className={styles.readMore}>TÌM HIỂU THÊM</span>
                    </div>
                </a>
                </div>
                <div className={styles.sideNews}>
                    {newsData.slice(1).map((news, index) => (
                        <div key={index} className={styles.newsItem}>
            <a href={news.link} className={`${styles.newsLink}`}>
                <div className={styles.newsContent}>
                        <div className={styles.sideBorder}>
                            <h2 className={styles.newsTitle}>{news.title}</h2>
                            <div className={styles.newsContent}>
                                <span className={styles.readMore}>TÌM HIỂU THÊM</span>
                                <span className={styles.date}>{news.date}</span>
                        </div>
                        </div>
                    <img src={news.image} alt={`News ${index}`} className={styles.newsImage} />
                </div>
            </a>
        </div>
    ))}
</div>
            </div>

            <button className={styles.moreButton}>TÌM HIỂU THÊM CÁC DỰ ÁN</button>
        </div>
    );
};

export default News;
