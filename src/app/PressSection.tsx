import styles from './PressSection.module.css';

const pressLogos = [
  { name: 'Phụ nữ', src: '/img/icon/bao1.png' },
  { name: 'CafeF', src: '/img/icon/bao2.png' },
  { name: 'VTC News', src: '/img/icon/bao3.png' },
  { name: 'Genk', src: '/img/icon/bao4.png' },
  { name: 'Thanh Niên', src: '/img/icon/bao5.png' },
  { name: 'VietnamBiz', src: '/img/icon/bao6.png' },
  { name: 'Diễn đàn Doanh nghiệp', src: '/img/icon/bao7.png' },
  { name: 'Thông tin và Truyền thông', src: '/img/icon/bao8.png' },
];

const PressSection = () => {
  return (
    <section className={styles.pressSection}>
      <h2 className={styles.title}>Đối tác truyền thông</h2>
      <div className={styles.logoGrid}>
        {pressLogos.map((logo, index) => (
          <div key={index} className={styles.logoWrapper}>
            <img src={logo.src} alt={logo.name} className={styles.logo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressSection;