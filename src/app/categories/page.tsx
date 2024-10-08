'use client';

import React from "react";
import styles from "@/app/categories/category.module.css";
import Link from "next/link";

const CategoryPage: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo2}></div>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    {/*<button ></button>*/}
                </div>
                <Link href="/about" className={styles.link}>Về chúng tôi</Link>
                <Link href="/products" className={styles.link}>Sản phẩm</Link>
                <Link href="/categories" className={styles.link}>Danh mục</Link>
                <Link href="/guides" className={styles.link}>Hướng dẫn đầu tư</Link>
                <Link href="/news" className={styles.link}>Tin tức</Link>
                <Link href="/reports" className={styles.link}>Báo cáo</Link>
                <Link href="/contact" className={styles.link}>Liên hệ</Link>
                <button className={styles.search_button}>
                    <i className="fas fa-search"></i>
                </button>
                <div className={styles.len_icon}>
                </div>
            </nav>
        </header>
    );
};
export default CategoryPage;
