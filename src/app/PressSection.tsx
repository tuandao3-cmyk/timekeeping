import styles from './PressSection.module.css';

import { useInView } from 'react-intersection-observer';

const pressLogos = [
  { name: 'Phụ nữ', src: '/img/icon/phunu.png', delay: 0 },
  { name: 'VTC News', src: '/img/icon/vtc.png', delay: 75 },
  { name: 'Diễn đàn Doanh nghiệp', src: '/img/icon/bao7.png', delay: 150 },
  { name: 'CafeF', src: '/img/icon/cafef.png', delay: 200 },
  { name: 'VietnamBiz', src: '/img/icon/bao6.png', delay: 300 },
  { name: 'Genk', src: '/img/icon/bao4.png', delay: 500 },
  { name: 'Thanh Niên', src: '/img/icon/thanhnien1.png', delay: 700 },
  { name: 'Thông tin và Truyền thông', src: '/img/icon/bao8.png', delay: 1000 },
];

const PressSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className={styles.pressSection}>
      <div className="flex flex-col items-center justify-center max-w-[1200px] py-[62px] ">
        <h2
          ref={ref}
          className={`${styles.title} duration-700 ease-in-out transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          TRUYỀN THÔNG NÓI GÌ VỀ CHÚNG TÔI?
        </h2>
        <p
          ref={ref}
          className={`font-inter text-[#000000]/60 font-normal text-base leading-6 max-w-[54%] mx-auto mb-4 text-center duration-700 delay-200 ease-in-out transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Khám phá các bài viết và nhận xét từ báo chí, nơi chúng tôi được công
          nhận là một trong những nền tảng đầu tư hàng đầu, mang lại cơ hội và
          giá trị bền vững cho nhà đầu tư.
        </p>
        <div className={styles.logoContainer}>
          {pressLogos.map((logo, index) => (
            <div
              key={index}
              ref={ref}
              className={`${styles.logoWrapper} duration-700 ease-in-out delay-${logo.delay} transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            >
              <img src={logo.src} alt={logo.name} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
