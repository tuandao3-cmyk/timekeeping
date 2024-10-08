'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
// import AboutPage from "@/app/about/page";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            {/* <div className={styles.logo2}></div> */}
            <nav className={styles.nav}>
                <div className={styles.logo}>
                <Link href="/">
                        <button className={styles.logoButton}>
                        </button>
                    </Link>
                </div>
                <Link href="/about" className={styles.link}>Giới thiệu</Link>
                <Link href="/products" className={styles.link}>Sản phẩm</Link>
                <Link href="/categories" className={styles.link}>Danh mục</Link>
                <Link href="/guides" className={styles.link}>Hướng dẫn</Link>
                <Link href="/news" className={styles.link}>Tin tức</Link>
                <Link href="/reports" className={styles.link}>Báo cáo</Link>
                <Link href="/contact" className={styles.link}>Liên hệ</Link>

            </nav>
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Đầu tư thông minh<br /> sinh lời tuyệt đỉnh</h1>
                    <p className={styles.heroSubtitle}>Trải nghiệm ứng dụng đầu tư HyraCap<br /> mang lại lợi nhuận hấp dẫn dành cho bạn<br /> Tải ứng dụng tại đây!</p>
                    <div className={styles.ctaButtons}>
                        <a href="#" className={`${styles.ctaButton} ${styles.appleButton}`}>Download on the<br /> App Store</a>
                        <a href="#" className={`${styles.ctaButton} ${styles.googleButton}`}>Get it on<br /> Google Play</a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src="/img/01.png" alt="HyraCap App Screenshot 1" className={styles.phoneScreen} />
                    <img src="/img/02.png" alt="HyraCap App Screenshot 2" className={styles.phoneScreen} />
                    <img src="/img/03.png" alt="HyraCap App Screenshot 3" className={styles.phoneScreen} />
                </div>
            </div>

        </header>
    );
};

export default Header;
