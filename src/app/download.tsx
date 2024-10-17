import React from 'react';
import Image from 'next/image';
import styles from './download.module.css';

const Download: React.FC = () => {
  return (
    <div className={styles.downloadSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Tải ngay ứng dụng HyraCap</h2>
        <p className={styles.description}>
          Tải app dễ dàng, theo dõi giao dịch thuận tiện mọi lúc mọi nơi ngay
          trên chiếc điện thoại của bạn.
        </p>
        <div className={styles.downloadOptions}>
          <div className={styles.qrCode}>
            <Image
              src="/img/qrcode.png"
              alt="QR Code"
              width={150}
              height={150}
            />
            <Image
              src="/img/qrcode.png"
              alt="QR Code"
              width={150}
              height={150}
            />
          </div>
          <div className="mt-8 flex justify-evenly md:justify-start space-x-4">
            <a
              href="https://play.google.com/store"
              className="px-4 py-1 bg-black text-white rounded-lg text-lg hover:bg-green-700 flex items-center justify-center space-x-2 w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/icon/apic2.png"
                alt="Google Play"
                className="w-4 h-4"
              />
              <div>
                <p className="text-[10px] font-thin">Download on</p>
                <p className="text-[10px] font-bold">Apple Store</p>
              </div>
            </a>

            <a
              href="https://play.google.com/store"
              className="px-4 py-1 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 flex items-center justify-center space-x-2 w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/icon/ggpl2.png"
                alt="Google Play"
                className="w-4 h-4"
              />
              <div>
                <p className="text-[10px] font-thin">Get it on</p>
                <p className="text-[10px] font-bold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.phoneImages}>
        <Image
          src="/img/02.png"
          alt="HyraCap App Screen 1"
          width={300}
          height={600}
          className={styles.phoneImage}
        />
        <Image
          src="/img/03.png"
          alt="HyraCap App Screen 2"
          width={300}
          height={600}
          className={styles.phoneImage}
        />
      </div>
    </div>
  );
};

export default Download;
