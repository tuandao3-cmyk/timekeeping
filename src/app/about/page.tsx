'use client';

import React from 'react';
import styles from '@/app/about/about.module.css';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material';

import Partner from '../partner';
import ArticlesSection from '../ArticlesSection';
import PressSection from '../PressSection';
import News from '../news';
import DiamondImage from '@/components/diamond_image';
import Image from 'next/image';
import MessageFromCreative from './components/messageFromCreative';
import CustomWidthTooltip from './components/customToolTip';

const leaders = [
  {
    name: 'Trần Nam Chung',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/tran-nam-chung.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Tuấn Nguyễn',
    title: 'CEO - Co-Founder',
    image: '/img/tuan-nguyen.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Hoàng Thành Đạt',
    title: 'CEO - CTO-Founder',
    image: '/img/hoang-thanh-dat.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Tuấn Đặng',
    title: 'CFO - Co-Founder',
    image: '/img/tuan-dang.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
];

const staffs = [
  {
    name: 'Cris Nguyễn',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/crisNguyen.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Nguyễn Văn Ngân',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/nNgan.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Trần Quang Tú',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/tTu.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Lê Xuân Minh',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/lMinh.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Bùi Lương Châu',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/bChau.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Nguyễn Mạnh Hưng',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/mHung.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Tuấn Hùng',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/tHung.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Trung Kiên',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/about/tKien.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  // Thêm các thành viên khác tương tự
];

const AboutPage: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref3,
    inView: inView3,
    entry: entry3,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref4,
    inView: inView4,
    entry: entry4,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref5,
    inView: inView5,
    entry: entry5,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref6,
    inView: inView6,
    entry: entry6,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref7,
    inView: inView7,
    entry: entry7,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref8,
    inView: inView8,
    entry: entry8,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref9,
    inView: inView9,
    entry: entry9,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <>
      {/* <div className="max-h-max"> */}
      <div className="bg-white min-h-[812px]  w-full flex flex-col justify-center items-center "
        style={{
          backgroundImage: "url('/img/about/bg_about_us.png')",
          backgroundSize: '170% 170%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-[1440px]">
          <div className="flex justify-between items-center w-full h-full mt-16 max-md:!flex-col pl-20 pr-12">
            <div className="flex flex-col min-h-[620px] justify-start flex-1  gap-10">
              <div className="flex flex-col gap-2">
              <p
                ref={ref}
                className={`text-[40px] leading-[56px] text-[#04141A] font-sans font-bold uppercase duration-700 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                về chúng tôi
              </p>
              <p
                ref={ref}
                className={`text-[40px] leading-[56px] text-[#48B96D] font-sans font-bold uppercase duration-700 delay-200 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                nền tảng giúp tăng
              </p>
              <p
                ref={ref}
                className={`text-[40px] leading-[56px] font-sans text-[#48B96D] font-bold uppercase duration-700 delay-500 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                  trưởng tài sản nhanh hơn
                </p>
              </div>
              <p
                ref={ref}
                className={`text-[20px] text-[#000000]/60 font-sans leading-[32px] max-w-[500px]  duration-700  ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                Chúng tôi là quỹ đầu tư với sứ mệnh ươm mầm và đầu tư dài hạn
                vào các dự án khởi nghiệp tiềm năng mang lại giá trị phát triển
                bền vững.
              </p>

              <div className="flex w-[100%] justify-start items-start  max-w-[500px]">
                <button
                  ref={ref}
                  className={` bg-[#48B96D] text-white font-sans text-[16px] leading-[20px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  Khám phá cơ hội
                </button>
                {/* <button
                  ref={ref}
                  className={`bg-transparent border font-sans border-[#FFFFFF29] text-[#FFFFFF] text-[16px] leading-[20px] text-center   px-[16px] py-[14px]  rounded-[999px]  hover:bg-[#379256]  transition-all  duration-300 delay-500 ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  } `}
                >
                  Liên hệ
                </button> */}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[32px] justify-end items-end">
              <img src="/img/about/about_img_1.png" alt="Vision illustration" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center max-w-[1440px]">
          {/* <div className="flex justify-center items-center w-full  bg-transparent  px-32">
            <video
              ref={ref}
              className={`w-full border  border-gray-200 rounded-[16px] dark:border-gray-700  duration-1000  ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-15'
              }`}
              muted
              autoPlay
              loop
            >
              <source src="/video/about_vd.mp4" type="video/mp4" />
            </video>
          </div> */}
        </div>
      </div>

      <Partner />
      <div className={styles['about-container']}>
        <section className="flex flex-col w-full justify-center items-center bg-white py-[62px]">
          <div className="flex flex-row-reverse  items-center justify-around w-full max-w-[1440px]">
            <div className={styles.textContent}>
              <Typography
                ref={ref2}
                className={` duration-700 ease-in-out transform ${
                  inView2
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
                sx={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  lineHeight: '48px',
                  fontFamily: 'Inter',
                }}
              >
                TẦM NHÌN
              </Typography>
              <p
                ref={ref2}
                className={` duration-700 ease-in-out font-sans transform ${
                  inView2
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
              >
                HyraCap mong muốn trở thành nhà cung cấp nền tảng đầu tư uy tín
                hàng đầu, đồng hành cùng người dùng trên con đường đạt được tự
                do tài chính. Chúng tôi cam kết mang đến các dự án đầu tư tiềm
                năng với thông tin minh bạch, rõ ràng, giúp người dùng tự tin
                đưa ra những quyết định đầu tư sáng suốt và hiệu quả.
              </p>
              <ul className={styles.bulletPoints}>
                <li>
                  <div
                    ref={ref2}
                    className={`flex flex-row gap-6 py-4 duration-700 ease-in-out transform ${
                      inView2
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <img
                      alt="icon"
                      className="w-14 h-14"
                      src="/img/icon/seen.svg"
                    />
                    <div className="gap-1">
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          lineHeight: '20px',
                          transform: 'uppercase',
                          fontFamily: 'Inter',
                        }}
                      >
                        Uy tín hàng đầu
                      </Typography>
                      <Typography className="!text-[14px]" fontFamily={'Inter'}>
                        Chúng tôi cam kết xây dựng lòng tin bằng sự minh bạch và
                        rõ ràng trong mọi dự án.
                      </Typography>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    ref={ref2}
                    className={`flex flex-row gap-6 py-4 duration-700 delay-200 ease-in-out transform ${
                      inView2
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <img
                      alt="icon"
                      className="w-14 h-14"
                      src="/img/icon/finance.svg"
                    />
                    <div className="gap-1">
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          lineHeight: '20px',
                          transform: 'uppercase',
                          fontFamily: 'Inter',
                        }}
                      >
                        Tự do tài chính
                      </Typography>
                      <Typography className="!text-[14px]" fontFamily={'Inter'}>
                        Hỗ trợ người dùng phát triển tài sản và đạt được mục
                        tiêu tài chính lâu dài.
                      </Typography>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    ref={ref2}
                    className={`flex flex-row gap-6 py-4 duration-700 delay-500 ease-in-out transform ${
                      inView2
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <img
                      alt="icon"
                      className="w-14 h-14"
                      src="/img/icon/search.svg"
                    />
                    <div className="gap-1">
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          lineHeight: '20px',
                          transform: 'uppercase',
                          fontFamily: 'Inter',
                        }}
                      >
                        Minh bạch thông tin
                      </Typography>
                      <Typography
                        className="!text-[14px] "
                        fontFamily={'Inter'}
                      >
                        Mọi thông tin về dự án đều được cung cấp rõ ràng, giúp
                        người dùng dễ dàng đưa ra quyết định.
                      </Typography>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              ref={ref2}
              className={`${styles.imageContent} duration-700  ease-in-out transform ${
                inView2
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }`}
            >
              <img src="/img/about/about1.png" alt="Vision illustration" />
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-around items-center w-full py-[62px]">
          <div className="flex flex-row items-center justify-around w-full max-w-[1440px]">
            <div className={styles.textContent}>
              <Typography
                ref={ref3}
                className={` duration-700 ease-in-out transform ${
                  inView3
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
                sx={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  lineHeight: '48px',
                  fontFamily: 'Inter',
                }}
              >
                SỨ MỆNH
              </Typography>
              <p
                ref={ref3}
                className={` duration-700 ease-in-out font-sans transform ${
                  inView3
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
              >
                Tại HyraCap, chúng tôi cam kết tạo ra một môi trường kinh doanh
                nơi các tài nguyên và cơ hội được phân bổ công bằng và minh
                bạch. Chúng tôi luôn nỗ lực thúc đẩy sự phát triển bền vững và
                không ngừng đổi mới trong thị trường tài chính, nhằm mang lại
                giá trị lâu dài cho các nhà đầu tư và doanh nghiệp.
              </p>
              <ul className={styles.bulletPoints}>
                <li>
                  <div
                    ref={ref3}
                    className={`flex flex-row gap-6 py-4 duration-700  ease-in-out transform ${
                      inView3
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <img
                      alt="icon"
                      className="w-14 h-14"
                      src="/img/icon/justice.svg"
                    />
                    <div className="gap-1">
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          lineHeight: '20px',
                          transform: 'uppercase',
                          fontFamily: 'Inter',
                        }}
                      >
                        Công bằng và minh bạch
                      </Typography>
                      <Typography
                        className="!text-[14px] "
                        fontFamily={'Inter'}
                      >
                        Phân bổ tài nguyên và cơ hội một cách rõ ràng, minh
                        bạch.
                      </Typography>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    ref={ref3}
                    className={`flex flex-row gap-6 py-4 duration-700 delay-200 ease-in-out transform ${
                      inView3
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <img
                      alt="icon"
                      className="w-14 h-14"
                      src="/img/icon/develop.svg"
                    />
                    <div className="gap-1">
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          lineHeight: '20px',
                          transform: 'uppercase',
                          fontFamily: 'Inter',
                        }}
                      >
                        Phát triển bền vững
                      </Typography>
                      <Typography
                        className="!text-[14px] "
                        fontFamily={'Inter'}
                      >
                        Luôn tìm kiếm những cơ hội đầu tư để thúc đẩy sự phát
                        triển liên tục.
                      </Typography>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    ref={ref3}
                    className={`flex flex-row gap-6 py-4 duration-700 delay-500 ease-in-out transform ${
                      inView3
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <img
                      alt="icon"
                      className="w-14 h-14"
                      src="/img/icon/renew.svg"
                    />
                    <div className="gap-1">
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          lineHeight: '20px',
                          transform: 'uppercase',
                          fontFamily: 'Inter',
                        }}
                      >
                        Đổi mới tài chính
                      </Typography>
                      <Typography className="!text-[14px]" fontFamily={'Inter'}>
                        Liên tục đổi mới để dẫn đầu trong các xu hướng của thị
                        trường tài chính.
                      </Typography>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              ref={ref3}
              className={`${styles.imageContent} duration-700  ease-in-out transform ${
                inView3
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              } `}
            >
              <img src="/img/about/sm.svg" alt="Mission illustration" />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-full py-[62px]">
          <div className="flex flex-col items-center justify-center w-full max-w-[1440px] px-[120px] gap-[40px]">
            <div className="flex flex-col text-center gap-10 w-[780px] max-[768px]:!w-full">
              <Typography
                ref={ref4}
                className={`duration-700  ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '40px',
                  fontWeight: 'bold',
                  lineHeight: '48px',
                  fontFamily: 'Inter',
                }}
              >
                Giá trị cốt lõi
              </Typography>
              <p
                ref={ref4}
                className={`duration-700 text-[16px] font-[400px] font-sans leading-[24px]  ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
              >
                Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
                nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
                mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
              </p>
            </div>
            <div className={styles.valueGrid}>
              <div
                ref={ref4}
                className={`relative h-[280px] 
             duration-300  ease-in-out transform ${
               inView4
                 ? 'opacity-100 scale-100 translate-x-0'
                 : 'opacity-0 translate-x-100 scale-50'
             }
              `}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white min-h-[164px]">
                  <p className="!text-xl font-semibold !text-black font-sans">
                    Đổi mới sáng tạo
                  </p>
                  <p className="!text-sm text-clip font-sans">
                    Hyracap luôn cập nhật những công nghệ tiên tiến hiện đại
                    nhất. Chúng tôi thúc đẩy sự sáng tạo và phát triển liên tục.
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <img
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value1.svg"
                    alt="Đổi mới sáng tạo"
                  />
                </div>
              </div>
              <div
                ref={ref4}
                className={`relative h-[280px]  duration-300 delay-75  ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 translate-x-100 scale-50'
                }`}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white  min-h-[164px]">
                  <p className="!text-xl font-semibold !text-black font-sans">
                    Bền vững
                  </p>
                  <p className="!text-sm text-clip font-sans">
                    Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu
                    nhập thụ động vững vàng tự do tài chính
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <img
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value2.svg"
                    alt="Bền vững"
                  />
                </div>
              </div>
              <div
                ref={ref4}
                className={`relative h-[280px]   duration-300  delay-100 ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 translate-x-100 scale-50'
                }`}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white  min-h-[164px]">
                  <p className="!text-xl font-semibold !text-black font-sans">
                    Minh bạch an toàn
                  </p>
                  <p className="!text-sm text-clip font-sans">
                    Đảm bảo rằng tất cả các giao dịch và hoạt động trên nền tảng
                    là minh bạch, an toàn và có thể được kiểm tra
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <img
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value3.svg"
                    alt="Minh bạch an toàn"
                  />
                </div>
              </div>
              <div
                ref={ref4}
                className={`relative h-[280px]  duration-300 delay-150  ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 translate-x-100 scale-50'
                }`}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white  min-h-[164px]">
                  <p className="!text-xl font-semibold !text-black font-sans">
                    Hợp lực
                  </p>
                  <p className="!text-sm text-clip font-sans">
                    Khuyến khích sự hợp tác giữa các cá nhân và tổ chức. Mang
                    lại lợi ích và giá trị tốt đẹp cho cộng đồng
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <img
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value1.svg"
                    alt="Hợp lực"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <MessageFromCreative />
        <section className={styles.promise}>
          <div className={styles.promiseContent}>
            <h2
              ref={ref6}
              className={`duration-700  font-sans ease-in-out transform ${
                inView6
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }`}
            >
              LỜI HỨA THƯƠNG HIỆU
            </h2>
            <p
              ref={ref6}
              className={`duration-700 font-sans  ease-in-out transform ${
                inView6
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }`}
            >
              Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
              nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
              mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
            </p>
            <div className="w-[106%] flex flex-row justify-end items-center gap-1 max-lg:!w-[90%]">
              <div className="h-0.5 w-4 bg-[#48B96D]" />
              <span
                ref={ref6}
                className={`text-xl font-bold font-sans text-[#48B96D] uppercase duration-700  ease-in-out transform ${
                  inView6
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
              >
                HyraCap
              </span>
            </div>
          </div>
        </section>
        <News />
        <PressSection />

        <section className="flex flex-col justify-center items-center w-full py-[62px]">
          <div className="flex flex-col justify-center items-center w-full max-w-[1440px]">
            <div className="flex flex-col w-full max-w-[781px] justify-center items-center gap-[40px]">
              <Typography
                ref={ref7}
                className={`duration-700  ease-in-out transform ${
                  inView7
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }
              `}
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '40px',
                  fontWeight: 'bold',
                  lineHeight: '48px',
                  fontFamily: 'Inter',
                }}
              >
                Đội ngũ sáng lập
              </Typography>
              <p
                ref={ref7}
                className={`text-base text-[#323232] font-sans text-center w-3/5 sm:!w-full duration-700  ease-in-out transform ${
                  inView7
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
              >
                Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
                nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
                mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó. 
              </p>
            </div>
            <div className={styles.leadershipGrid}>
              {leaders.slice(0, 4).map((leader, index) => (
                <CustomWidthTooltip
                  title={
                    <div className="w-[300px] px-[13px] py-[16px] rounded-[4px]">
                      <Typography
                        sx={{
                          fontSize: '20px',
                          fontWeight: 600,
                          lineHeight: '28px',
                          width: '100%',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                        }}
                      >
                        {leader.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          lineHeight: '24px',
                          marginBottom: '14px',
                          width: '100%',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                        }}
                      >
                        {leader.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          lineHeight: '24px',
                          width: '100%',
                          textAlign: 'center',
                          fontWeight: 400,
                          padding: '0 16px',
                          fontFamily: 'Inter',
                        }}
                      >
                        {leader.description}
                      </Typography>
                    </div>
                  }
                  key={index}
                  className="mt-5 px-[13px]"
                >
                  <div
                    key={index}
                    ref={ref7}
                    className={`${styles.leaderCard} duration-300 delay-${index * 100}  ease-in-out transform ${
                      inView7
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }
                  hover:scale-105
                  `}
                  >
                    <div className="px-6 pt-6 bg-transparent">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className={styles.leaderImage}
                      />
                    </div>
                    <div className="w-full relative bg-[#48B96D] rounded-[4px]">
                      <div className="w-full max-w-[255px] absolute min-h-[46px] top-[-23px] left-1/2 transform -translate-x-1/2  bg-white rounded-[4px] py-[8px] px-[24px] text-center font-[600] text-[20px]">
                        {leader.name}
                      </div>
                      <div className="  rounded-[4px] pt-[31px] pb-[13px]">
                        <p className="w-full text-center text-[#fff] font-[400] font-sans text-[14px] leading-[24px]">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CustomWidthTooltip>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full py-[62px]">
          <div className={styles.leadershipSection}>
            <h2
              ref={ref8}
              className={`text-base font-sans text-[#323232] text-center w-3/5 sm:!w-full duration-700  ease-in-out transform ${
                inView8
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }
              uppercase
              `}
            >
              Nhân sự chủ chốt
            </h2>
            <p
              ref={ref8}
              className={`text-base font-sans text-[#323232] text-center w-3/5 duration-700  ease-in-out transform ${
                inView8
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }`}
            >
              Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
              nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
              mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
            </p>
            <div className={`grid grid-cols-4 grid-rows-2`}>
              {staffs.map((leader, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: '#F3F7F4' }}
                  ref={ref8}
                  className={`${styles.leaderCard} duration-700 delay-${index * 100}  ease-in-out transform ${
                    inView8
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 translate-y-10 scale-50'
                  }`}
                >
                  <div className="pt-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className={`${styles.leaderImage} hover:scale-125 trasform ease-in-out duration-300`}
                    />
                  </div>
                  <div className={styles.leaderInfo}>
                    <div className="w-full bg-[#F3F7F4] p-6 pb-8 text-center font-sans">
                      <h3>{leader.name}</h3>
                      <p className={styles.leaderTitle}>{leader.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full py-[62px] bg-white">
          <div className={styles.contactSection}>
            <div
              ref={ref9}
              className={`${styles.contactInfo}  duration-300   ease-in-out transform ${
                inView9
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              } hover:scale-110`}
            >
              <img src="/img/about/contact.svg" />
            </div>

            <div className="flex-1 p-[1px] rounded-t-[40px] bg-gradient-to-b from-[#00000016] to-[#00000000] max-md:!w-full">
              <div className={styles.contactForm}>
                <div
                  className={`p-8 rounded-t-[32px] bg-gradient-to-b from-[#00000014] to-[#00000000] duration-300   ease-in-out transform
                  ${
                    inView9
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 translate-y-10 scale-50'
                  }
                `}
                >
                  <h3
                    ref={ref9}
                    className={` duration-700  font-sans  ease-in-out transform ${
                      inView9
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    Chúng tôi sẵn sàng đón nhận mọi ý kiến từ các bạn.
                  </h3>
                  <form>
                    <input
                      ref={ref9}
                      className={` duration-700 font-sans   ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      type="text"
                      placeholder="Tên*"
                      required
                    />
                    <input
                      ref={ref9}
                      className={` duration-700 font-sans  delay-100  ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      type="email"
                      placeholder="Email*"
                      required
                    />
                    <input
                      ref={ref9}
                      className={` duration-700 delay-200  font-sans  ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      type="tel"
                      placeholder="Số điện thoại"
                    />
                    <textarea
                      ref={ref9}
                      className={` duration-700  delay-300 font-sans ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      placeholder="Câu hỏi của bạn*"
                      required
                    ></textarea>
                    <div
                      ref={ref9}
                      className={`${styles.recaptcha} duration-700  delay-300  ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        id="notRobot"
                        className="w-5 h-5 font-sans"
                      />
                      <label htmlFor="notRobot " className="font-sans">
                        Tôi không phải là robot
                      </label>
                      <img src="/img/icon/cacha.svg" />
                    </div>
                    <button
                      ref={ref9}
                      className={`duration-700   delay-500  ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      type="submit"
                    >
                      <span className="text-lg font-medium font-sans ">
                        Send
                      </span>
                      <img src="/img/icon/sendBlack.svg" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutPage;
