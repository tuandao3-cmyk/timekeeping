'use client';

import React from 'react';
import styles from '@/app/guides/guide.module.css';
import Link from 'next/link';

const GuidePage: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              <button className={styles.logoButton}></button>
            </Link>
          </div>
          <Link href="/about" className={styles.link}>
            Giới thiệu
          </Link>
          <Link href="/products" className={styles.link}>
            Sản phẩm
          </Link>
          <Link href="/categories" className={styles.link}>
            Danh mục
          </Link>
          <Link href="/guides" className={styles.link}>
            Hướng dẫn
          </Link>
          <Link href="/news" className={styles.link}>
            Tin tức
          </Link>
          <Link href="/reports" className={styles.link}>
            Báo cáo
          </Link>
          <Link href="/contact" className={styles.link}>
            Liên hệ
          </Link>
        </nav>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Hướng dẫn đầu tư</h1>
            <p>
              Chúng tôi cung cấp các gói sản phẩm đầu tư phù hợp với từng nhu
              cầu của khách hàng.
            </p>
            <button className={styles.ctaButton}>Đăng ký ngay!</button>
          </div>
        </div>
      </header>
      <section className={styles.benefits}>
        <h2>Lợi ích khi đầu tư vào Hyracap</h2>
        <p>
          Với mong muốn kiến tạo một môi trường đầu tư tốt nhất. Chúng tôi luôn
          cố gắng phát triển để mang lại những giá trị tốt nhất cho những nhà
          đầu tư.
        </p>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <img src="/img/icon/icon8.png" alt="Đa dạng gói đầu tư" />
            </div>
            <h3>Đa dạng gói đầu tư</h3>
            <p>
              Với mong muốn kiến tạo một môi trường đầu tư tốt nhất. Chúng tôi
              luôn cố gắng phát triển để mang lại những giá trị tốt nhất
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <img src="/img/icon/icon9.png" alt="Lợi nhuận hấp dẫn" />
            </div>
            <h3>Lợi nhuận hấp dẫn</h3>
            <p>
              Với mong muốn kiến tạo một môi trường đầu tư tốt nhất. Chúng tôi
              luôn cố gắng phát triển để mang lại những giá trị tốt nhất
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <img src="/img/icon/icon10.png" alt="Thông tin minh bạch" />
            </div>
            <h3>Thông tin minh bạch</h3>
            <p>
              Với mong muốn kiến tạo một môi trường đầu tư tốt nhất. Chúng tôi
              luôn cố gắng phát triển để mang lại những giá trị tốt nhất
            </p>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <img src="/img/icon/icon11.png" alt="Bảo mật chặt chẽ" />
            </div>
            <h3>Bảo mật chặt chẽ</h3>
            <p>
              Với mong muốn kiến tạo một môi trường đầu tư tốt nhất. Chúng tôi
              luôn cố gắng phát triển để mang lại những giá trị tốt nhất
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default GuidePage;
