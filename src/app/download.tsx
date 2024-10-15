import React from 'react';
import Image from 'next/image';
import styles from './download.module.css';

const Download: React.FC = () => {
  return (
    <div className={styles.downloadSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Tải ngay ứng dụng HyraCap</h2>
        <p className={styles.description}>
          Tải app dễ dàng, theo dõi giao dịch thuận tiện mọi lúc mọi nơi ngay trên chiếc điện thoại của bạn.
        </p>
    <div className={styles.downloadOptions}>
        <div className={styles.qrCode}>
          <Image src="/img/qrcode.png" alt="QR Code" width={200} height={200}/>
        </div>
        <div className={styles.storeButtons}>
          <button className={styles.storeButton}>
            <Image src="/img/icon/apic.png" alt="App Store" width={20} height={20} />
            Download on App Store
          </button>
          <button className={styles.storeButton}>
            <Image src="/img/icon/ggpl.png" alt="Google Play" width={20} height={20} />
            Get it on Google Play
          </button>
        </div>
    </div>
      </div>
      <div className={styles.phoneImages}>
        <Image src="/img/02.png" alt="HyraCap App Screen 1" width={300} height={600} className={styles.phoneImage} />
        <Image src="/img/03.png" alt="HyraCap App Screen 2" width={300} height={600} className={styles.phoneImage} />
      </div>
    </div>
  );
};

export default Download;