import React from 'react';
import styles from '@/app/productdetail/productdetail.module.css';
import Link from 'next/link';

const ProductDetail: React.FC = () => {
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
            <Link href="/products" className={styles.link}>Sản phẩm</Link>
            <Link href="/categories" className={styles.link}>Danh mục</Link>
            <Link href="/guides" className={styles.link}>Hướng dẫn</Link>
            <Link href="/news" className={styles.link}>Tin tức</Link>
            <Link href="/reports" className={styles.link}>Báo cáo</Link>
            <Link href="/contact" className={styles.link}>Liên hệ</Link>

        </nav>

    </header>
        <div className={styles.container}>
            <div className={styles.header}>
                <img src="path/to/logo.png" alt="Logo" className={styles.logo} />
                <h1 className={styles.title}>Dự án Salala AI</h1>
            </div>
            <div className={styles.info}>
                <h2>Thông tin</h2>
                <p>Salala là một nền tảng điện toán biên cho phép người dùng tận dụng phần cứng của các thiết bị biên (edge devices) để huấn luyện mô hình trí tuệ nhân tạo (AI).</p>
                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <strong>Slot:</strong> 20
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Tổng số tiền đầu tư:</strong> $220.5M
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Vòng đầu tư:</strong> Series C
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Nhà đầu tư:</strong> 18
                    </div>
                </div>
            </div>
            <div className={styles.activity}>
                <h2>Hoạt động gần đây</h2>
                <p>Tin tức 10/10/2024: Dự án Salala AI tăng trưởng mạnh mẽ với lượng thiết bị tăng liên tục với lượt tải đã đạt trên 1M.</p>
                <p>Tin tức 8/10/2024: Dự án Salala AI tăng trưởng mạnh mẽ với lượng thiết bị tăng liên tục với lượt tải đã đạt trên 1M.</p>
                <p>Tin tức 10/10/2024: Dự án Salala AI tăng trưởng mạnh mẽ với lượng thiết bị tăng liên tục với lượt tải đã đạt trên 1M.</p>
            </div>
        </div>
            </>
    );
};

export default ProductDetail;