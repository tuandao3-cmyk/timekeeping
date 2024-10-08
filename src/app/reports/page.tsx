'use client';
import React from "react";
import styles from "@/app/reports/report.module.css";
import Link from "next/link";

// report
const ReportPage: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                {/*<div className={styles.logo2}></div>*/}
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
            <h1 className={styles.reportTitle}>Báo cáo tài chính</h1>
            <div className={styles.reports}>
                <div className={styles.tabs}>
                    <button className={styles.active}>2023</button>
                    <button>2022</button>
                    <button>2021</button>
                </div>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h3>Audited 2020 Consolidated Financial Statements</h3>
                        <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                        <div className={styles.buttons}>
                            <button className={styles.viewBtn}>👁️</button>
                            <button className={styles.downloadBtn}>⬇️</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3>Audited 2020 Consolidated Financial Statements</h3>
                        <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                        <div className={styles.buttons}>
                            <button className={styles.viewBtn}>👁️</button>
                            <button className={styles.downloadBtn}>⬇️</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3>Audited 2020 Consolidated Financial Statements</h3>
                        <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                        <div className={styles.buttons}>
                            <button className={styles.viewBtn}>👁️</button>
                            <button className={styles.downloadBtn}>⬇️</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3>Audited 2020 Consolidated Financial Statements</h3>
                        <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                        <div className={styles.buttons}>
                            <button className={styles.viewBtn}>👁️</button>
                            <button className={styles.downloadBtn}>⬇️</button>
                        </div>
                    </div>
                    {/* Thêm các card tương tự */}
                </div>

                <button className={styles.loadMoreBtn}>Hiển thị thêm</button>
            </div>
            <div className={styles.reportsBG}>
                <h1 className={styles.reportTitle}>Báo cáo Phát triển bền vững ESG</h1>
                <div className={styles.reports}>
                    <div className={styles.tabs}>
                        <button className={styles.active}>2023</button>
                        <button>2022</button>
                        <button>2021</button>
                    </div>

                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <h3>Audited 2020 Consolidated Financial Statements</h3>
                            <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                            <div className={styles.buttons}>
                                <button className={styles.viewBtn}>👁️</button>
                                <button className={styles.downloadBtn}>⬇️</button>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Audited 2020 Consolidated Financial Statements</h3>
                            <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                            <div className={styles.buttons}>
                                <button className={styles.viewBtn}>👁️</button>
                                <button className={styles.downloadBtn}>⬇️</button>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Audited 2020 Consolidated Financial Statements</h3>
                            <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                            <div className={styles.buttons}>
                                <button className={styles.viewBtn}>👁️</button>
                                <button className={styles.downloadBtn}>⬇️</button>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h3>Audited 2020 Consolidated Financial Statements</h3>
                            <p><span className={styles.dateIcon}>📅</span> 20/12/2023</p>
                            <div className={styles.buttons}>
                                <button className={styles.viewBtn}>👁️</button>
                                <button className={styles.downloadBtn}>⬇️</button>
                            </div>
                        </div>
                        {/* Thêm các card tương tự */}
                    </div>

                    <button className={styles.loadMoreBtn}>Hiển thị thêm</button>
                </div>
            </div>
        </>
    );
};
export default ReportPage;
