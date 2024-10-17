'use client';

import React from 'react';
import styles from '@/app/guides/guide.module.css';
import Link from 'next/link';

import { FiSearch } from 'react-icons/fi';
import DownloadSection from '../downloadSection';
import { usePathname } from 'next/navigation';

const Login: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <header className={styles.header}>
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
          <p>Hướng dẫn &gt; Đăng nhập</p>
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
          <h1>Đăng nhập</h1>
          <h2>Đăng nhập đầu tư HyraCap</h2>
          <p>
            Để đăng nhập vào <strong>HyraCap</strong> bạn làm theo bước sau:
          </p>
          <ul>
            <li>Bước 1: Vào app HyraCap chọn "Đăng nhập"</li>
            <li>
              Bước 2: Điền các thông tin trên màn hình Đăng nhập bao gồm:
              <ul>
                <li>Số điện thoại hoặc Email</li>
                <li>Mật khẩu</li>
                <li>Bấm Đăng nhập</li>
              </ul>
            </li>
          </ul>
          <div className={styles.imageContainer}>
            <img src="/img/dnhap.png" alt="Màn hình đăng nhập HyraCap" />
          </div>
          <ul>
            <li>
              Bước 3: Nhập mã xác thực OTP và bấm Tiếp tục
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
            <img
              src="/img/otp1.png"
              alt="Màn hình nhập OTP"
              width={300}
              height={600}
            />
            <img
              src="/img/popup.png"
              alt="Màn hình popup giới thiệu"
              width={300}
              height={600}
            />
            <img
              src="/img/dashboard.png"
              alt="Màn hình tổng quan"
              width={300}
              height={600}
            />
          </div>
          <p className={styles.conclusion}>
            Như vậy, HyraCap đã thực hiện xong phần hướng dẫn Đăng nhập sử dụng
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

export default Login;
