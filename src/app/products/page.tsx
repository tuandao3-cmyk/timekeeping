'use client';

import React from "react";
import styles from "@/app/products/product.module.css";
import Link from "next/link";
import Footer from "../Footer";
import { useState, useEffect } from 'react';

const ProductPage: React.FC = () => {

    const features = [
        { icon: '/img/icon/icon1.png', title: 'Gói đầu tư đa dạng', description: 'Dễ dàng sử dụng với nhuận hấp dẫn, đầu tư minh bạch' },
        { icon: '/img/icon/icon2.png', title: 'Lợi nhuận hấp dẫn', description: 'Dễ dàng sử dụng với nhuận hấp dẫn, đầu tư minh bạch' },
        { icon: '/img/icon/icon3.png', title: 'Bảo mật chặt chẽ', description: 'Dễ dàng sử dụng với nhuận hấp dẫn, đầu tư minh bạch' },
        { icon: '/img/icon/icon4.png', title: 'Thông tin rõ ràng', description: 'Dễ dàng sử dụng với nhuận hấp dẫn, đầu tư minh bạch' },
        { icon: '/img/icon/icon5.png', title: 'Sử dụng dễ dàng', description: 'Dễ dàng sử dụng với nhuận hấp dẫn, đầu tư minh bạch' },
        { icon: '/img/icon/icon6.png', title: 'Nạp rút nhanh chóng', description: 'Dễ dàng sử dụng với nhuận hấp dẫn, đầu tư minh bạch' },
      ];

      const products = [
        {
          title: 'Đầu tư ngắn hạn',
          description: 'Đa dạng gói đầu tư ngắn hạn',
          profit: '5 % - 8%/năm',
          duration: '3 - 6 tháng',
          interestPayment: 'Cuối kỳ'
        },
        {
          title: 'Đầu tư dài hạn',
          description: 'Đa dạng gói đầu tư dài hạn',
          profit: '5 % - 8%/năm',
          duration: '1 - 3 năm',
          interestPayment: 'Cuối kỳ'
        },
        {
          title: 'Đầu tư trực tiếp',
          description: 'Đầu tư vào công ty hoặc dự án',
          profit: '5 % - 8%/năm',
          duration: 'Theo dự án',
          interestPayment: 'Cuối kỳ'
        }
      ];

      const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 3, minutes: 4, seconds: 5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
                        <button className={styles.ctaButton}>Đăng ký ngay!</button>
                    </div>
            </div>
            </header>
            <section className={styles.appFeatures}>
      <h2>Ứng dụng đầu tư HyraCap</h2>
      <p>Với giao diện trực quan thao tác đầu tư dễ dàng, thực hiện nạp rút nhanh chóng</p>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresList}>
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className={styles.feature}>
              <img src={feature.icon} alt={feature.title} width={80} height={80} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.appPreview}>
          <div className={styles.circleBackground}></div>
          <div className={styles.phoneFrame}>
            <img src="/img/04.png" alt="HyraCap App Preview" className={styles.appScreenshot} />
          </div>
        </div>
        <div className={styles.featuresList}>
          {features.slice(3).map((feature, index) => (
            <div key={index} className={styles.feature}>
              <img src={feature.icon} alt={feature.title} width={80} height={80} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className={styles.investmentProducts}>
      <h2>Sản phẩm đầu tư HyraCap</h2>
      <p>Đa dạng gói đầu tư từ ngắn hạn đến dài hạn</p>
      <div className={styles.productContainer}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.iconContainer}>
              <div className={styles.circleOuter}></div>
              <div className={styles.circleInner}></div>
              <img src="/img/icon/icon7.png" alt={product.title} className={styles.icon} />
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className={styles.productDetails}>
              <div>
                <span>Lợi nhuận</span>
                <span className={styles.highlight}>{product.profit}</span>
              </div>
              <div>
                <span>Thời hạn</span>
                <span className={styles.highlight}>{product.duration}</span>
              </div>
              <div>
                <span>Hình thức nhận lãi</span>
                <span className={styles.highlight}>{product.interestPayment}</span>
              </div>
            </div>
            <button className={styles.registerButton}>Đăng ký ngay!</button>
          </div>
        ))}
      </div>
    </section>

    
    <div className={styles.flexContainer}>
      <div className={styles.registerForm}>
        <h2>ĐĂNG KÝ TƯ VẤN MIỄN PHÍ SẢN PHẨM HYRACAP</h2>
        <p>Chương trình kết thúc sau</p>
        <div className={styles.countdown}>
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className={styles.timeBox}>
              <span>{value.toString().padStart(2, '0')}</span>
              <span>{key === 'days' ? 'Ngày' : key === 'hours' ? 'Giờ' : key === 'minutes' ? 'Phút' : 'Giây'}</span>
            </div>
          ))}
        </div>
        <input type="text" placeholder="Họ và tên" />
        <input type="tel" placeholder="Số điện thoại" />
        <input type="text" placeholder="Tỉnh/Thành phố" />
        <button className={styles.registerButton}>ĐĂNG KÝ NGAY</button>
      </div>
      <div className={styles.appPreviewContainer}>
        
        <div className={styles.appPreviewFrame}>
          <h2>Ứng dụng đầu tư HyraCap</h2>
          <img src="/img/04.png" alt="HyraCap App Preview 1" className={styles.appScreenshotFirst} />
          <img src="/img/02.png" alt="HyraCap App Preview 2" className={styles.appScreenshotSecond} />
        </div>
        <div className={styles.appStoreButtons}>
          <a href="#" className={styles.storeButton}>
            <img src="/img/icon/ggpl.png" alt="Google Play" />
            <span>
              {/* <small>Tải miễn phí tại</small> */}
              <strong>Google Play</strong>
            </span>
          </a>
          <a href="#" className={styles.storeButton}>
            <img src="/img/icon/apic.png" alt="App Store" />
            <span>
              {/* <small>Tải miễn phí tại</small> */}
              <strong>App Store</strong>
            </span>
          </a>
        </div>
      </div>

    </div>
    
            <Footer/>   

        </>
    );
};
export default ProductPage;
