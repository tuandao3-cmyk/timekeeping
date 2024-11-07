import styles from './PressSection.module.css';

import { useInView } from 'react-intersection-observer';

const pressLogos = [
  { name: 'Phụ nữ', src: '/img/icon/phunu.png', delay: 0, link: 'https://baophunuthudo.vn/' },
  { name: 'VTC News', src: '/img/icon/vtc.png', delay: 75, link: 'https://vtcnews.vn/' },
  { name: 'Diễn đàn Doanh nghiệp', src: '/img/icon/bao7.png', delay: 150, link: 'https://diendandoanhnghiep.vn/hyra-holdings-ky-vong-dua-cac-du-an-cong-nghe-ung-dung-ai-va-blockchain-len-ngoi-10132475.html' },
  { name: 'CafeF', src: '/img/icon/cafef.png', delay: 200, link: 'https://cafef.vn/dhdcd-hyra-holdings-2024-day-manh-cac-du-an-cong-nghe-ai-va-dien-toan-bien-188240427185159324.chn' },
  { name: 'VietnamBiz', src: '/img/icon/bao6.png', delay: 300, link: 'https://vietnambiz.vn/' },
  { name: 'Genk', src: '/img/icon/bao4.png', delay: 500, link: 'https://genk.vn/' },
  { name: 'Thanh Niên', src: '/img/icon/thanhnien1.png', delay: 700, link: 'https://thanhnien.vn/' },
  { name: 'Thông tin và Truyền thông', src: '/img/icon/bao8.png', delay: 1000, link: 'https://ictvietnam.vn/' },
];

const PressSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section ref={ref} className={styles.pressSection}>
      <div className="flex flex-col items-center justify-center max-w-[1440px] py-[62px] ">
        <h2
          className={`${styles.title} duration-300 text-[28px] md:text-[32px] max-w-[351px] md:max-w-none ease-in-out transform ${
            inView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 font-sans'
          }`}
        >
          TRUYỀN THÔNG NÓI GÌ VỀ CHÚNG TÔI?
        </h2>
        <p
          className={`font-inter text-[#000000]/60 font-normal text-base font-sans leading-6 max-w-[351px] md:max-w-[767px] mx-auto mb-4 text-center duration-300 delay-200 ease-in-out transform ${
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
              className={`${styles.logoWrapper} duration-300 ease-in-out delay-${logo.delay} transform ${
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
