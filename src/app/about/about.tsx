'use client';

import styles from '@/app/about/about.module.css';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';

import Link from 'next/link';
import ModalEror from '../ModalEror';
import ModalSucses from '../ModalSucses';
import PressSection from '../PressSection';
import News from '../news';
import Partner from '../partner';
import MessageFromCreative from './components/messageFromCreative';
import Image from 'next/image';
import { postContact } from '@/services/contact.service';
import { Page } from '@/type/page.type';

export const leaders = [
  {
    id: 1,
    name: 'Trần Nam Chung',
    title: 'Chief Strategy Officer - Founder',
    fullTitle: 'Chief Strategy Officer - Founder',
    image: '/img/about/TNC.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    id: 2,
    name: 'Trần Nam Chung',
    title: 'Chief Strategy Officer - Founder',
    fullTitle: 'Chief Executive Officer - Co-Founder',
    image: '/img/about/TNC.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    id: 3,
    name: 'Trần Nam Chung',
    title: 'Chief Technology Officer - Co-Founder',
    fullTitle: 'Chief Technology Officer - Co-Founder',
    image: '/img/about/TNC.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    id: 4,
    name: 'Tuấn Đặng',
    title: 'CFO - Co-Founder',
    fullTitle: 'Chief Financial Officer - Co-Founder',
    image: '/img/about/TD.png',
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
];

interface AboutPageProps {
  newsData: any;
  newsPage: typeof Page;
}

const AboutPage = (props: AboutPageProps) => {
  const { newsData, newsPage } = props;
  const [hoveredLeader, setHoveredLeader] = useState<number | null>(null);
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref3,
    inView: inView3,
    entry: entry3,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref4,
    inView: inView4,
    entry: entry4,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref5,
    inView: inView5,
    entry: entry5,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref6,
    inView: inView6,
    entry: entry6,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref7,
    inView: inView7,
    entry: entry7,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    ref: ref8,
    inView: inView8,
    entry: entry8,
  } = useInView({
    threshold: 0,
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    question: '',
  });
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.fullName == '' ||
      formData.email == '' ||
      formData.phone == '' ||
      formData.question == ''
    ) {
      alert('Hãy điền đầy đủ thông tin');
      return;
    }
    const response = await postContact(formData);
    if (response.statusCode == 200) {
      setModal(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        question: '',
      });
    } else {
      setModal2(true);
    }
  };
  return (
    <>
      {/* <div className="max-h-max"> */}
      <div
        className="bg-white min-h-[686px]  w-full flex flex-col justify-center items-center "
        style={{
          backgroundImage: "url('/img/about/bg_about_us.png')",
          backgroundSize: '170% 170%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ModalSucses modal={modal} setModal={setModal} />
        <ModalEror modal={modal2} setModal={setModal2} />
        <div className="flex flex-col items-center justify-center w-full max-w-[1440px]">
          <div className="relative flex justify-between items-center w-full h-full mt-16 max-lg:!flex-col md:pl-20 md:pr-12 px-[12px]">
            <div className="z-10 flex flex-col md:min-h-[620px] mb-[24px] md:mb-0 justify-start items-start lg:justify-start flex-1  gap-[24px] md:gap-10">
              <div className="flex flex-col md:gap-2">
                <p
                  ref={ref}
                  className={`text-[28px] lg:text-[40px] leading-[36px] lg:leading-[56px] text-[#04141A] font-sans font-bold uppercase duration-700 ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  về chúng tôi
                </p>
                <p
                  ref={ref}
                  className={`text-[28px] lg:text-[40px] leading-[36px] lg:leading-[56px] text-[#48B96D] font-sans font-bold uppercase duration-700 delay-200 ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  nền tảng giúp tăng
                </p>
                <p
                  ref={ref}
                  className={`text-[28px] leading-[36px] lg:text-[40px] lg:leading-[56px] font-sans text-[#48B96D] font-bold uppercase duration-700 delay-500 ease-in-out transform ${
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
                className={`text-[14px] lg:text-[20px] text-[#000000]/60 font-sans leading-[24px] lg:leading-[32px] max-w-[500px]   duration-700  ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                Chúng tôi là quỹ đầu tư với sứ mệnh ươm mầm và đầu tư dài hạn
                vào các dự án khởi nghiệp tiềm năng mang lại giá trị phát triển
                bền vững.
              </p>

              <div className="flex w-[100%] justify-center lg:justify-start items-center lg:items-start  max-w-[500px]">
                <a
                  href="/products"
                  className={` bg-[#48B96D] text-white font-sans text-[14px] lg:text-[16px] leading-[20px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  Tham gia cùng chúng tôi
                </a>
              </div>
            </div>
            <div className="z-0 flex flex-col gap-[32px] justify-end items-end">
              <Image
                width={588}
                height={698}
                src="/img/about/up.png"
                layout="responsive"
                alt="Vision illustration"
                className="md:absolute md:bottom-0 md:right-0 right-10 relative"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center max-w-[1440px]"></div>
      </div>

      <Partner />
      <div className={styles['about-container']}>
        <section
          ref={ref2}
          className="flex flex-col w-full justify-center items-center bg-white py-2 lg:py-[62px]"
        >
          <div className="flex flex-col lg:flex-row-reverse lg:p-0 p-5 items-center justify-around w-full max-w-[1440px]">
            <div className={styles.textContent}>
              <Typography
                className={` duration-700 text-center lg:text-left  ease-in-out transform ${
                  inView2
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
                sx={{
                  fontSize: {
                    xs: '28px',
                    lg: '40px',
                  },
                  fontWeight: 'bold',
                  lineHeight: {
                    xs: '36px',
                    lg: '48px',
                  },
                  fontFamily: 'Inter',
                }}
              >
                TẦM NHÌN
              </Typography>
              <p
                className={` duration-700 text-base leading-[24px] text-center lg:text-left ease-in-out font-sans transform ${
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
                    className={`flex flex-row gap-6 py-4 duration-700 ease-in-out transform ${
                      inView2
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <Image
                      width={56}
                      height={56}
                      alt="icon"
                      className="max-w-14 max-h-14"
                      src="/img/icon/seen.jpg"
                      layout="responsive"
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
                    className={`flex flex-row gap-6 py-4 duration-700 delay-200 ease-in-out transform ${
                      inView2
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <Image
                      width={56}
                      height={56}
                      alt="icon"
                      className="max-w-14 max-h-14"
                      src="/img/icon/finance.jpg"
                      layout="responsive"
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
                    className={`flex flex-row gap-6 py-4 duration-700 delay-500 ease-in-out transform ${
                      inView2
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <Image
                      width={56}
                      height={56}
                      alt="icon"
                      className="max-w-14 max-h-14"
                      src="/img/icon/search.jpg"
                      layout="responsive"
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
              className={`${styles.imageContent} duration-700  ease-in-out transform ${
                inView2
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }`}
            >
              <Image
                width={486}
                height={605}
                src="/img/about/about1.png"
                alt="Vision illustration"
                layout="responsive"
              />
            </div>
          </div>
        </section>

        <section
          ref={ref3}
          className="flex flex-col justify-around items-center w-full py-2 lg:py-[62px]"
        >
          <div className="flex flex-col lg:flex-row p-5 lg:p-0 items-center justify-around w-full max-w-[1440px]">
            <div className={styles.textContent}>
              <Typography
                className={` duration-700 text-center lg:text-left ease-in-out transform ${
                  inView3
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
                sx={{
                  fontSize: {
                    xs: '28px',
                    lg: '40px',
                  },
                  fontWeight: 'bold',
                  lineHeight: {
                    xs: '36px',
                    lg: '48px',
                  },
                  fontFamily: 'Inter',
                }}
              >
                SỨ MỆNH
              </Typography>
              <p
                className={` duration-700 text-base leading-[24px] text-center lg:text-left ease-in-out font-sans transform ${
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
                    className={`flex flex-row gap-6 py-4 duration-700  ease-in-out transform ${
                      inView3
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <Image
                      width={56}
                      height={56}
                      alt="icon"
                      className="max-w-14 max-h-14"
                      src="/img/icon/justice.png"
                      layout="responsive"
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
                    className={`flex flex-row gap-6 py-4 duration-700 delay-200 ease-in-out transform ${
                      inView3
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <Image
                      width={56}
                      height={56}
                      alt="icon"
                      className="max-w-14 max-h-14"
                      src="/img/icon/develop.png"
                      layout="responsive"
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
                    className={`flex flex-row gap-6 py-4 duration-700 delay-500 ease-in-out transform ${
                      inView3
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    <Image
                      width={56}
                      height={56}
                      alt="icon"
                      className="max-w-14 max-h-14"
                      src="/img/icon/renew.png"
                      layout="responsive"
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
              className={`${styles.imageContent} duration-700  ease-in-out transform ${
                inView3
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              } `}
            >
              <Image
                width={486}
                height={494}
                src="/img/about/sm.jpg"
                alt="Mission illustration"
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <section
          ref={ref4}
          className="flex flex-col bg-white justify-center items-center w-full py-2 lg:py-[62px]"
        >
          <div className="flex flex-col items-center justify-center w-full max-w-[1440px] px-5 lg:px-[120px] gap-[40px]">
            <div className="flex flex-col text-center gap-10 w-[780px] max-[768px]:!w-full">
              <Typography
                className={`duration-700  ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }`}
                sx={{
                  fontSize: {
                    xs: '28px',
                    lg: '40px',
                  },
                  fontWeight: 'bold',
                  lineHeight: {
                    xs: '36px',
                    lg: '48px',
                  },
                  fontFamily: 'Inter',
                }}
              >
                Giá trị cốt lõi
              </Typography>
              <p
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
                className={`relative h-[280px] 
             duration-300  ease-in-out transform ${
               inView4
                 ? 'opacity-100 scale-100 translate-x-0'
                 : 'opacity-0 translate-x-100 scale-50'
             }
              `}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-full lg:w-[90%] text-center lg:text-left shadow-md absolute -bottom-0 z-50 bg-white min-h-[164px]">
                  <p className="!text-xl leading-[28px] font-semibold !text-black font-sans">
                    Đổi mới sáng tạo
                  </p>
                  <p className="!text-sm leading-[24px] text-clip font-sans">
                    Hyracap luôn cập nhật những công nghệ tiên tiến hiện đại
                    nhất. Chúng tôi thúc đẩy sự sáng tạo và phát triển liên tục.
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <Image
                    width={288}
                    height={192}
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value1.jpg"
                    alt="Đổi mới sáng tạo"
                    layout="responsive"
                  />
                </div>
              </div>
              <div
                className={`relative h-[280px]  duration-300 delay-75  ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 translate-x-100 scale-50'
                }`}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-full lg:w-[90%] text-center lg:text-left shadow-md absolute -bottom-0 z-50 bg-white  min-h-[164px]">
                  <p className="!text-xl leading-[28px] font-semibold !text-black font-sans">
                    Bền vững
                  </p>
                  <p className="!text-sm leading-[24px] text-clip font-sans">
                    Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu
                    nhập thụ động vững vàng tự do tài chính
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <Image
                    width={288}
                    height={192}
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value2.jpg"
                    alt="Bền vững"
                    layout="responsive"
                  />
                </div>
              </div>
              <div
                className={`relative h-[280px]   duration-300  delay-100 ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 translate-x-100 scale-50'
                }`}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-full lg:w-[90%] text-center lg:text-left shadow-md absolute -bottom-0 z-50 bg-white  min-h-[164px]">
                  <p className="!text-xl leading-[28px] font-semibold !text-black font-sans">
                    Minh bạch an toàn
                  </p>
                  <p className="!text-sm leading-[24px] text-clip font-sans">
                    Đảm bảo rằng tất cả các giao dịch và hoạt động trên nền tảng
                    là minh bạch, an toàn và có thể được kiểm tra
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <Image
                    width={288}
                    height={192}
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value3.jpg"
                    alt="Minh bạch an toàn"
                    layout="responsive"
                  />
                </div>
              </div>
              <div
                className={`relative h-[280px]  duration-300 delay-150  ease-in-out transform ${
                  inView4
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 translate-x-100 scale-50'
                }`}
              >
                <div className="rounded-lg p-4 flex flex-col gap-2 w-full lg:w-[90%] text-center lg:text-left shadow-md absolute -bottom-0 z-50 bg-white  min-h-[164px]">
                  <p className="!text-xl leading-[28px] font-semibold !text-black font-sans">
                    Hợp lực
                  </p>
                  <p className="!text-sm leading-[24px] text-clip font-sans">
                    Khuyến khích sự hợp tác giữa các cá nhân và tổ chức. Mang
                    lại lợi ích và giá trị tốt đẹp cho cộng đồng
                  </p>
                </div>
                <div className={styles.valueIcon}>
                  <Image
                    width={288}
                    height={192}
                    style={{ objectFit: 'cover' }}
                    src="/img/about/value4.jpg"
                    alt="Hợp lực"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <MessageFromCreative />
        <section ref={ref6} className={styles.promise}>
          <div className="flex flex-col items-center justify-center relative z-[1] px-5 lg:px-[230px] py-5 lg:py-[60px]">
            <p
              style={{
                fontWeight: '700',
                letterSpacing: '-1%',
              }}
              className={` font-inter leading-[36px] max-w-[80%] text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-5 duration-700 font-sans ease-in-out transform ${
                inView6
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }`}
            >
              LỜI HỨA
              <br className="md:hidden inline" /> THƯƠNG HIỆU
            </p>
            <p
              className={`font-inter text-[16px] lg:text-[24px] font-normal leading-[32px] duration-700 font-sans ease-in-out transform ${
                inView6
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              }`}
            >
              Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
              nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
              mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
            </p>
            <div className="w-[106%] flex flex-row justify-center md:justify-end items-center gap-1 max-lg:!w-[90%]">
              <div className="h-0.5 w-4 bg-[#48B96D]" />
              <span
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
        <News newsData={newsData} newsPage={newsPage} />
        <PressSection />

        <section
          ref={ref7}
          className="flex flex-col justify-center items-center w-full py-5 lg:py-[62px]"
        >
          <div className="flex flex-col justify-center items-center w-full max-w-[1440px]">
            <div className="flex flex-col w-full max-w-[781px] justify-center items-center gap-[40px]">
              <Typography
                className={`duration-700 uppercase ease-in-out transform ${
                  inView7
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 translate-y-10 scale-50'
                }
              `}
                sx={{
                  fontSize: {
                    xs: '28px',
                    lg: '40px',
                  },
                  fontWeight: 'bold',
                  lineHeight: {
                    xs: '36px',
                    lg: '48px',
                  },
                  fontFamily: 'Inter',
                }}
              >
                Đội ngũ sáng lập
              </Typography>
              <p
                className={`text-base text-[#323232] font-sans text-center w-[90%] lg:w-3/5 sm:!w-full duration-700  ease-in-out transform ${
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
            <div className="grow grid grid-cols-1 lg:grid-cols-4 gap-4 w-full mx-auto place-items-center items-center ">
              {leaders.slice(0, 4).map((leader, index) => (
                <Link
                  key={index}
                  href={`/about/leaderdetail/${leader.id}`}
                  className="mt-5 px-[13px] "
                >
                  <div
                    key={index}
                    className={`${styles.leaderCard} duration-300 delay-${index * 100}  ease-in-out transform ${
                      inView7
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }
                  hover:scale-105
                  `}
                  >
                    <div className="px-6 pt-6  bg-transparent">
                      <Image
                        width={215}
                        height={249}
                        className="w-full h-full max-w-[215px] max-h-[249px] object-cover"
                        src={leader.image}
                        alt={leader.name}
                        layout="responsive"
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={ref8}
          className="flex flex-col justify-center items-center w-full py-10 lg:py-[62px]"
        >
          <div className="max-w-[1440px] flex flex-col items-center gap-6 lg:gap-10">
            <h2
              className={`text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] text-center font-sans font-bold text-[#323232] text-center w-full lg:w-3/5 sm:!w-full lg:duration-700  lg:ease-in-out lg:transform ${
                inView8
                  ? 'lg:opacity-100 lg:scale-100 lg:translate-y-0'
                  : 'lg:opacity-0 lg:translate-y-10 lg:scale-50'
              }
              uppercase
              `}
            >
              Nhân sự chủ chốt
            </h2>
            <p
              className={`text-base font-sans text-[#323232] text-center w-[90vw] lg:w-3/5 duration-700  ease-in-out transform ${
                inView8
                  ? 'lg:opacity-100 lg:scale-100 lg:translate-y-0'
                  : 'lg:opacity-0 lg:translate-y-10 lg:scale-50'
              }`}
            >
              Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
              nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
              mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
            </p>
            <div className="flex flex-row items-center overflow-x-auto scrollbar-hide gap-4 w-[100vw] pb-4 px-10 lg:hidden snap-x snap-mandatory scroll-smooth scroll-p-10">
              {staffs.map((leader, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center snap-always min-w-[280px] flex flex-col items-center bg-[#F3F7F4]"
                >
                  <div className="pt-6 w-full h-[280px]">
                    <Image
                      width={288}
                      height={203}
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      layout="responsive"
                    />
                  </div>
                  <div className="w-full p-6 pb-8 text-center">
                    <h3 className="text-[20px] leading-[28px] font-semibold">
                      {leader.name}
                    </h3>
                    <p className="text-base leading-6 text-[#000000b2] mt-2">
                      {leader.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 w-full pb-4 ">
              {staffs.map((leader, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: '#F3F7F4' }}
                  className={`flex flex-col items-center relative max-w-[320px] duration-700 delay-${index * 100}  ease-in-out transform ${
                    inView8
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 translate-y-10 scale-50'
                  }`}
                >
                  <div className="pt-6">
                    <Image
                      width={288}
                      height={203}
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-contain hover:scale-125 trasform ease-in-out duration-300"
                      layout="responsive"
                    />
                  </div>
                  <div className="w-full flex justify-end bg-[#f3f7f4]">
                    <div className="w-full bg-[#F3F7F4] p-6 pb-8 text-center font-sans">
                      <h3 className="text-[20px] leading-[28px] font-semibold font-sans text-[#000000e5]">
                        {leader.name}
                      </h3>
                      <p className="font-sans text-base leading-6 text-[#000000b2] mt-2">
                        {leader.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={ref9}
          className="flex flex-col justify-center items-center w-full py-10 lg:py-[62px] bg-white"
        >
          <div className={styles.contactSection}>
            <div
              className={`${styles.contactInfo} hidden lg:block duration-300   ease-in-out transform ${
                inView9
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 translate-y-10 scale-50'
              } hover:scale-110`}
            >
              <Image
                width={572}
                height={625}
                src="/img/about/contact.jpg"
                layout="responsive"
                alt="contact"
              />
            </div>

            <div className="flex-1 p-[1px] rounded-t-[40px] bg-gradient-to-b from-[#00000016] to-[#00000000] max-md:!w-full">
              <div className={styles.contactForm}>
                <div
                  className={`p-8 rounded-t-[32px] bg-gradient-to-b from-[#00000014] to-[#00000000] duration-300 ease-in-out transform ${
                    inView9
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 translate-y-10 scale-50'
                  }`}
                >
                  <h3
                    className={`duration-700 font-sans ease-in-out transform ${
                      inView9
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 translate-y-10 scale-50'
                    }`}
                  >
                    Chúng tôi sẵn sàng đón nhận mọi ý kiến từ các bạn.
                  </h3>
                  <form>
                    <input
                      className={`duration-700  font-sans ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      name="fullName"
                      type="text"
                      placeholder="Tên"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{ color: 'black' }}
                    />
                    <input
                      name="email"
                      className={`duration-700 font-sans delay-100 ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ color: 'black' }}
                    />
                    <input
                      name="phone"
                      className={`duration-700 delay-200 font-sans ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      type="tel"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ color: 'black' }}
                    />
                    <textarea
                      name="question"
                      className={`duration-700 delay-300 font-sans ease-in-out transform ${
                        inView9
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 translate-y-10 scale-50'
                      }`}
                      placeholder="Câu hỏi của bạn"
                      required
                      value={formData.question}
                      onChange={handleChange}
                      style={{ color: 'black' }}
                    ></textarea>
                    <button
                      className={`${styles.recaptcha} duration-700 delay-300 ease-in-out transform`}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      <span className="text-lg font-medium font-sans">Gửi</span>
                      <Image
                        width={24}
                        height={24}
                        src="/img/icon/sendBlack.svg"
                        layout="responsive"
                        alt="send icon"
                      />
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
