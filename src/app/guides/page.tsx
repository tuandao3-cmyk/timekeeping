'use client';

import React from "react";
import styles from "@/app/guides/guide.module.css";
import Link from "next/link";

const GuidePage: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
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
            <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Hướng dẫn đầu tư</h1>
                        <p>Chúng tôi cung cấp các gói sản phẩm đầu tư phù hợp với từng nhu cầu của khách hàng.</p>
                        <button className={styles.ctaButton}>Đăng ký ngay!</button>
                    </div>
            </div>
            </header>

        </>
    );
};
export default GuidePage;
