'use client';
import React from "react";
import styles from "@/app/reports/report.module.css";
import Link from "next/link";
import { FaDownload, FaEye } from "react-icons/fa";
import Footer from "../Footer";

// report
const ReportPage: React.FC = () => {
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
                <Link href="/" className={styles.link}>Trang chủ</Link>
                <Link href="/about" className={styles.link}>Giới thiệu</Link>
                <Link href="/categories" className={styles.link}>Danh mục</Link>
                <Link href="/products" className={styles.link}>Sản phẩm</Link>
                <Link href="/guides" className={styles.link}>Hướng dẫn</Link>
                <Link href="/news" className={styles.link}>Tin tức</Link>
                <Link href="/reports" className={styles.link}>Báo cáo</Link>
                <Link href="/contact" className={styles.link}>Liên hệ</Link>


            </nav>
            <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Sản phẩm đầu tư của HyraCap</h1>
                        <p>Chúng tôi cung cấp các gói sản phẩm đầu tư phù hợp với từng nhu cầu của khách hàng.</p>
                    </div>
            </div>
            </header>
            <main className={styles.main}>
                <section>
                <h2 className={styles.sectionTitle}>BÁO CÁO TÀI CHÍNH</h2>
                <div className={styles.reportTabs}>
                    <button className={`${styles.tabButton} ${styles.active}`}>Hàng Quý</button>
                    <button className={styles.tabButton}>Hàng Năm</button>
                </div>
                <div className={styles.reportList}>
                    {[
                        { title: "Báo cáo tài chính quý I năm 2024", date: "02/03/2024" },
                        { title: "Báo cáo tài chính quý II năm 2024", date: "02/06/2024" },
                        { title: "Báo cáo tài chính quý III năm 2024", date: "02/09/2024" },
                        { title: "Báo cáo tài chính quý IV năm 2024", date: "02/12/2024" },
                    ].map((report, index) => (
                        <div key={index} className={styles.reportItem}>
                            <div className={styles.reportInfo}>
                                <h3>{report.title}</h3>
                                <span className={styles.reportDate}>{report.date}</span>
                            </div>
                            <div className={styles.reportActions}>
                            <button className={styles.viewButton}>
                                <FaEye />
                            </button>
                            <button className={styles.downloadButton}>
                                    <FaDownload />
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
                </section>
                <section>
                    <h2 className={styles.sectionTitle}>BÁO CÁO DỰ ÁN</h2>
                    <div className={styles.reportList}>
                        {[
                            { title: "Báo cáo tiến độ dự án", date: "02/03/2024" },
                            { title: "Báo cáo kết quả dự án", date: "02/06/2024" },
                            { title: "Báo cáo đánh giá dự án", date: "02/06/2024" },
                        ].map((report, index) => (
                            <div key={index} className={styles.reportItem}>
                                <div className={styles.reportInfo}>
                                    <h3>{report.title}</h3>
                                    <span className={styles.reportDate}>{report.date}</span>
                                </div>
                                <div className={styles.reportActions}>
                                    <button className={styles.viewButton}>
                                        <FaEye />
                                    </button>
                                    <button className={styles.downloadButton}>
                                        <FaDownload />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className={styles.sectionTitle}>BÁO CÁO XÃ HỘI</h2>
                    <div className={styles.reportList}>
                        {[
                            { title: "Trách nhiệm xã hội", date: "02/03/2024" },
                            { title: "Phát triển bền vững", date: "02/06/2024" },
                        ].map((report, index) => (
                            <div key={index} className={styles.reportItem}>
                                <div className={styles.reportInfo}>
                                    <h3>{report.title}</h3>
                                    <span className={styles.reportDate}>{report.date}</span>
                                </div>
                                <div className={styles.reportActions}>
                                    <button className={styles.viewButton}>
                                        <FaEye />
                                    </button>
                                    <button className={styles.downloadButton}>
                                        <FaDownload />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className={styles.sectionTitle}>BÁO CÁO KHÁC</h2>
                    <div className={styles.reportList}>
                        {[
                            { title: "Phân tích thị trường", date: "02/03/2024" },
                            { title: "Nghiên cứu và phát triển", date: "02/06/2024" },
                        ].map((report, index) => (
                            <div key={index} className={styles.reportItem}>
                                <div className={styles.reportInfo}>
                                    <h3>{report.title}</h3>
                                    <span className={styles.reportDate}>{report.date}</span>
                                </div>
                                <div className={styles.reportActions}>
                                    <button className={styles.viewButton}>
                                        <FaEye />
                                    </button>
                                    <button className={styles.downloadButton}>
                                        <FaDownload />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />  
        </>
    );
};
export default ReportPage;
