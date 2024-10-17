'use client';

import React from 'react';
import styles from '@/app/guides/guide.module.css';
import Link from 'next/link';

import { FiSearch } from 'react-icons/fi';
import DownloadSection from './downloadSection';
import { usePathname } from 'next/navigation';

const GuidePage: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              <button className={styles.logoButton}></button>
            </Link>
          </div>
          <Link href="/" className={styles.link}>
            Trang chủ
          </Link>
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
            <h1>Hướng dẫn đầu tư vào HyraCap</h1>
            <p>Hướng dẫn các bước thực hiện đầu tư</p>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <button className={styles.searchButton}>
            <FiSearch />
          </button>
          <input
            type="text"
            placeholder="Nhập thông tin bạn cần tìm"
            className={styles.searchInput}
          />
        </div>
      </header>
      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li>
                <Link
                  href="/guides"
                  className={pathname === '/guides' ? styles.active : ''}
                >
                  Đăng ký
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/login"
                  className={pathname === '/guides/login' ? styles.active : ''}
                >
                  Đăng nhập
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className={pathname === '/guides' ? styles.active : ''}
                >
                  Xác thực eKYC
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className={pathname === '/guides' ? styles.active : ''}
                >
                  Ký hợp đồng
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className={pathname === '/guides' ? styles.active : ''}
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className={pathname === '/guides' ? styles.active : ''}
                >
                  Giao dịch
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className={pathname === '/guides' ? styles.active : ''}
                >
                  Quên mật khẩu
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className={pathname === '/guides' ? styles.active : ''}
                >
                  Đăng xuất
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={styles.mainContent}>
          <p>Hướng dẫn &gt; Đăng ký</p>
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                title="Video hướng dẫn đầu tư HyraCap"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className={styles.videoTitle}>Video hướng dẫn đầu tư HyraCap</p>
          </div>
          <h1>Đăng ký</h1>
          <h2>Đăng ký đầu tư HyraCap</h2>
          <p>
            Để đăng ký đầu tư vào <strong>HyraCap</strong> bạn làm theo bước
            sau:
          </p>
          <ul>
            <li>
              Bước 1: Trên điện thoại vào vào <strong>Appstore</strong> hoặc{' '}
              <strong>Google Play</strong>
            </li>
            <li>Bước 2: Tải app HyraCap về điện thoại của bạn.</li>
            <li>Bước 3: Vào app HyraCap chọn "Đăng ký"</li>
            <li>
              Bước 4: Điền các thông tin trên màn hình Đăng ký mở tài khoản
              HyraCap bao gồm:
              <ul>
                <li>Số điện thoại</li>
                <li>Email</li>
                <li>Mật khẩu</li>
                <li>Nhập lại mật khẩu</li>
                <li>Bấm Đăng ký</li>
              </ul>
            </li>
          </ul>
          <div className={styles.imageContainer}>
            <img src="/img/dky1.png" alt="Màn hình đăng ký HyraCap 1" />
            <img src="/img/dky2.png" alt="Màn hình đăng ký HyraCap 2" />
          </div>
          <ul>
            <li>
              Bước 5: Nhập mã xác thực OTP và bấm Tiếp tục
              <p>
                Sau khi nhập mã OTP ứng dụng hiển thị màn hình Tổng quan với
                popup giới thiệu khách hàng. Bạn có thể Nhập mã giới thiệu hoặc
                bỏ qua.
              </p>
              <p>
                Trên màn hình Tổng quan có thể tiếp tục sử dụng các chức năng
                của HyraCap
              </p>
            </li>
          </ul>
          <div className={styles.imageContainer}>
            <img src="/img/otp1.png" alt="Màn hình nhập OTP" />
            <img src="/img/popup.png" alt="Màn hình popup giới thiệu" />
            <img src="/img/dashboard.png" alt="Màn hình tổng quan" />
          </div>
          <p className={styles.conclusion}>
            Như vậy, HyraCap đã thực hiện xong phần hướng dẫn Đăng ký sử dụng
            ứng dụng HyraCap.
            <br />
            Chúc Quý Khách thành công!
          </p>
        </main>
      </div>
      <DownloadSection />
    </>
  );
};

export default GuidePage;
