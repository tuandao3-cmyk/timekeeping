'use client';
import dynamic from 'next/dynamic';
import React from "react";
import styles from "@/app/contact/contact.module.css";
import Link from "next/link";
import Footer from '../Footer';

const Map = dynamic(() => import('./Map'), { ssr: false });

const ContactPage: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
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
            <div className={styles.mapContainer}>
                    <Map />
                </div>
            </header>
            <main className={styles.main}>

            </main>
            <Footer /> 
        </div>
    );
};
export default ContactPage;
