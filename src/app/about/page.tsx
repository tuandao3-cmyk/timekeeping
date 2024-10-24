'use client';

import React from 'react';
import styles from '@/app/about/about.module.css';
import Link from 'next/link';

import Partner from '../partner';
import ArticlesSection from '../ArticlesSection';
import PressSection from '../PressSection';
import News from '../news';
import { Typography } from '@mui/material';


const leaders = [
  {
    name: 'Trần Nam Chung',
    title: 'Chief Strategy Officer - Founder',
    image: '/img/tran-nam-chung.jpg',
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
    image: '/img/tuan-nguyen.jpg',
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
    image: '/img/hoang-thanh-dat.jpg',
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
    image: '/img/tuan-dang.jpg',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Jun Do',
    title: 'CMO - Co-Founder',
    image: '/img/jun-do.jpg',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  // Thêm các thành viên khác tương tự
];

const staffs = [
  {
    name: 'Cris Nguyễn',
    title: 'Blockchain Leader',
    image: '/img/staff1.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Nguyễn Văn Ngân',
    title: 'BE Leader',
    image: '/img/staff2.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Trần Quang Tú',
    title: 'Mobile Leader',
    image: '/img/staff3.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Lê Xuân Minh',
    title: 'FE Leader',
    image: '/img/staff4.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Bùi Lương Châu',
    title: 'SA',
    image: '/img/staff5.png',
    description: [
      'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
      'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
      'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
      'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.',
    ],
  },
  {
    name: 'Nguyễn mạnh Hưng',
    title: 'Creative Director',
    image: '/img/staff6.png',
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
  return (
    <>
      {/* <div className="max-h-max"> */}
      <div className="bg-[#07212C] min-h-[820px]  w-[100%] flex flex-col justify-end items-end relative px-32">
        <div className="flex justify-between items-center h-auto w-full mt-16 max-md:!flex-col">
          <div className="flex-1 gap-2">
            <p className="text-[40px] leading-[56px] text-white font-bold uppercase">
              Investment Fund
            </p>
            <p className="text-[40px] leading-[56px] text-[#48B96D] font-bold uppercase">
              Sustainable Growth
            </p>
            <p className="text-[40px] leading-[56px] text-[#48B96D] font-bold uppercase">
              Nurturing Innovation
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[32px] justify-end items-end">
            <p className="text-[20px] text-[#F3F7F4] leading-[32px] max-w-[500px]">
              We are committed to investing in innovative startups and
              small-to-medium enterprises, fostering creativity, innovation, and
              sustainable development.
            </p>

            <div className="flex w-[100%] justify-start items-start gap-[24px] max-w-[500px]">
              <button className=" bg-[#48B96D] text-white text-[16px] leading-[20px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-colors duration-300">
                Explore Opportunities
              </button>
              <button className="bg-transparent border border-[#FFFFFF29] text-[#FFFFFF] text-[16px] leading-[20px] text-center   px-[16px] py-[14px]  rounded-[999px]  hover:bg-[#379256]  transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full  bg-transparent relative -bottom-20 ">
          <video
            className="w-full border border-gray-200 rounded-lg dark:border-gray-700"
            muted
            autoPlay
            loop
            // controls
          >
            <source src="/video/about_vd.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <Partner />
      <div className={styles['about-container']}>
        <section className={styles.vision}>
          <div className={styles.textContent}>
            <h2>
              Tầm nhìn
            </h2>
            <p>
              HyraCap mong muốn trở thành nhà cung cấp nền tảng đầu tư uy tín hàng đầu,
              đồng hành cùng người dùng trên con đường đạt được tự do tài chính. 
              Chúng tôi cam kết mang đến các dự án đầu tư tiềm năng với thông tin minh bạch, rõ ràng, 
              giúp người dùng tự tin đưa ra những quyết định đầu tư sáng suốt và hiệu quả.
            </p>
            <ul className={styles.bulletPoints}>
              <li>
                <div className='flex flex-row gap-6 py-4'>
                  <img
                  alt='icon'
                  className='w-14 h-14'
                    src='/img/icon/seen.svg'
                  />
                  <div className='gap-1'>
                    <Typography className='text-base text-black font-semibold'>
                      Uy tín hàng đầu
                    </Typography>
                    <Typography className='!text-[14px]'>
                      Chúng tôi cam kết xây dựng lòng tin bằng sự minh bạch và rõ ràng trong mọi dự án.
                    </Typography>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex flex-row gap-6 py-4'>
                  <img
                    alt='icon'
                    className='w-14 h-14'
                    src='/img/icon/finance.svg'
                  />
                  <div className='gap-1'>
                    <Typography className='text-base text-black font-semibold'>
                      Tự do tài chính
                    </Typography>
                    <Typography className='!text-[14px]'>
                      Hỗ trợ người dùng phát triển tài sản và đạt được mục tiêu tài chính lâu dài.
                    </Typography>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex flex-row gap-6 py-4'>
                  <img
                    alt='icon'
                    className='w-14 h-14'
                    src='/img/icon/search.svg'
                  />
                  <div className='gap-1'>
                    <Typography className='text-base text-black font-semibold'>
                      Minh bạch thông tin
                    </Typography>
                    <Typography className='!text-[14px] '>
                      Mọi thông tin về dự án đều được cung cấp rõ ràng, giúp người dùng dễ dàng đưa ra quyết định.
                    </Typography>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <img src="/img/about/about1.svg" alt="Vision illustration" />
          </div>
        </section>

        <section className={styles.mission}>
          <div className={styles.textContent}>
            <h2>Sứ mệnh</h2>
            <p>
              Tại HyraCap, chúng tôi cam kết tạo ra một môi trường kinh doanh nơi các tài 
              nguyên và cơ hội được phân bổ công bằng và minh bạch. Chúng tôi luôn nỗ lực 
              thúc đẩy sự phát triển bền vững và không ngừng đổi mới trong thị trường tài chính, 
              nhằm mang lại giá trị lâu dài cho các nhà đầu tư và doanh nghiệp.
            </p>
            <ul className={styles.bulletPoints}>
              <li>
                <div className='flex flex-row gap-6 py-4'>
                  <img
                    alt='icon'
                    className='w-14 h-14'
                    src='/img/icon/justice.svg'
                  />
                  <div className='gap-1'>
                    <Typography className='text-base text-black font-semibold'>
                      Công bằng và minh bạch
                    </Typography>
                    <Typography className='!text-[14px]'>
                      Phân bổ tài nguyên và cơ hội một cách rõ ràng, minh bạch.
                    </Typography>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex flex-row gap-6 py-4'>
                  <img
                    alt='icon'
                    className='w-14 h-14'
                    src='/img/icon/develop.svg'
                  />
                  <div className='gap-1'>
                    <Typography className='text-base text-black font-semibold'>
                      Phát triển bền vững
                    </Typography>
                    <Typography className='!text-[14px] '>
                      Luôn tìm kiếm những cơ hội đầu tư để thúc đẩy sự phát triển liên tục.
                    </Typography>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex flex-row gap-6 py-4'>
                  <img
                    alt='icon'
                    className='w-14 h-14'
                    src='/img/icon/renew.svg'
                  />
                  <div className='gap-1'>
                    <Typography className='text-base text-black font-semibold'>
                      Đổi mới tài chính
                    </Typography>
                    <Typography className='!text-[14px]'>
                      Liên tục đổi mới để dẫn đầu trong các xu hướng của thị trường tài chính.
                    </Typography>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <img src="/img/about/sm.svg" alt="Mission illustration" />
          </div>
        </section>
        <section className={styles.values}>
         <div className='flex flex-col text-center gap-10 w-[780px] max-[768px]:!w-full'>
            <h2>Giá trị cốt lõi</h2>
            <p>
              Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi nhuận
              hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng mình và
              chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
            </p>
         </div>
          <div className={styles.valueGrid}>
            <div className="relative h-[280px] ">
              <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white">
                <p className='!text-xl font-semibold !text-black'>
                  Đổi mới sáng tạo
                </p>
                <p className='!text-sm text-clip'>
                  Hyracap luôn cập nhật những công nghệ tiên tiến hiện đại nhất.
                   Chúng tôi thúc đẩy sự sáng tạo và phát triển liên tục.
                </p>
              </div>
              <div className={styles.valueIcon}>
                <img 
                style={{objectFit:"cover"}}
                  src="/img/about/value1.svg" 
                alt="Đổi mới sáng tạo" />
              </div>
            
            </div>
            <div className="relative h-[280px] ">
              <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white">
                <p className='!text-xl font-semibold !text-black'>
                  Bền vững
                </p>
                <p className='!text-sm text-clip'>
                  Tạo nên mô hình đầu tư bền vững.
                   Giúp mọi người có nguồn thu nhập thụ động vững vàng tự do tài chính
                </p>
              </div>
              <div className={styles.valueIcon}>
                <img
                  style={{ objectFit: "cover" }}
                  src="/img/about/value2.svg"
                  alt="Bền vững" />
              </div>

            </div>
            <div className="relative h-[280px] ">
              <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white">
                <p className='!text-xl font-semibold !text-black'>
                  Minh bạch an toàn
                </p>
                <p className='!text-sm text-clip'>
                  Đảm bảo rằng tất cả các giao dịch và hoạt động trên nền tảng là minh bạch, an toàn và có thể được kiểm tra
                </p>
              </div>
              <div className={styles.valueIcon}>
                <img
                  style={{ objectFit: "cover" }}
                  src="/img/about/value3.svg"
                  alt="Minh bạch an toàn" />
              </div>

            </div>
            <div className="relative h-[280px] ">
              <div className="rounded-lg p-4 flex flex-col gap-2 w-[90%] shadow-md absolute -bottom-0 z-50 bg-white">
                <p className='!text-xl font-semibold !text-black'>
                  Hợp lực
                </p>
                <p className='!text-sm text-clip'>
                  Khuyến khích sự hợp tác giữa các cá nhân và tổ chức. Mang lại lợi ích và giá trị tốt đẹp cho
                  cộng đồng
                </p>
              </div>
              <div className={styles.valueIcon}>
                <img
                  style={{ objectFit: "cover" }}
                  src="/img/about/value1.svg"
                  alt="Hợp lực" />
              </div>

            </div>
         
            
          </div>
        </section>
        <section className={styles.founder}>
          <div className={styles.founderImage}>
            <img src="/img/about/founder.svg" alt="Trần Thị Thu Hương" />
          </div>
      
        </section>
        <section className={styles.promise}>
          <div className={styles.promiseContent}>
            <h2>Lời hứa thương hiệu</h2>
            <p>
              Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
              nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
              mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
            </p>
            <div className='w-[106%] flex flex-row justify-end items-center gap-1 max-lg:!w-[90%]'>
              <div className='h-0.5 w-4 bg-[#48B96D]' />
              <span className="text-xl font-bold text-[#48B96D] uppercase">
                HyraCap
              </span>
            </div>
          </div>
        
        </section>
        <News />
        <PressSection />
      
        <div className={styles.leadershipSection}>
          <h2>Đội ngũ sáng lập</h2>
          <p className='text-base text-[#323232] text-center w-3/5 sm:!w-full'>
            Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi nhuận hấp dẫn cho bạn!
             Bạn là người tạo ra tài chính của riêng mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó. 
          </p>
          <div className={styles.leadershipGrid}>
            {leaders.slice(0, 4).map((leader, index) => (
              <div key={index} className={styles.leaderCard}>
                <div className='pt-6'>
                  <img
                    src={"/img/about/lead.svg"}
                    alt={leader.name}
                    className={styles.leaderImage}
                  />
                </div>
                <div className={styles.leaderInfo}>
                  <div className='h-12 w-12 bg-[#48B96D] absolute text-center left-0 flex items-center justify-center'>
                    <img src='/img/icon/arrow-right.svg' />
                  </div>
                  <div className='w-[90%] bg-white p-6 pb-8'>
                    <h3>{leader.name}</h3>
                    <p className={styles.leaderTitle}>{leader.title}</p>
                  </div>
                
                </div>
              </div>
            ))}
          </div>
        
        </div>
        <div className={styles.leadershipSection}>
          <h2>Nhân sự chủ chốt</h2>
          <p className='text-base text-[#323232] text-center w-3/5'>
            Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi nhuận hấp dẫn cho bạn!
            Bạn là người tạo ra tài chính của riêng mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
          </p>
          <div className={styles.leadershipGrid}>
            {leaders.slice(0, 4).map((leader, index) => (
              <div key={index} style={{ backgroundColor:"#F3F7F4"}}  className={styles.leaderCard}>
                <div className='pt-6'>
                  <img
                    src={"/img/about/lead.svg"}
                    alt={leader.name}
                    className={styles.leaderImage}
                  />
                </div>
                <div className={styles.leaderInfo}>
                  <div className='w-full bg-white p-6 pb-8 text-center'>
                    <h3>{leader.name}</h3>
                    <p className={styles.leaderTitle}>{leader.title}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
   
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <img src='/img/about/contact.svg'/>
          </div>

          <div className='flex-1 p-[1px] rounded-t-[40px] bg-gradient-to-b from-[#00000016] to-[#00000000] max-md:!w-full'>
            <div className={styles.contactForm}>
              <div className='p-8 rounded-t-[32px] bg-gradient-to-b from-[#00000014] to-[#00000000]'>
                <h3>We’re open for any suggestion or just have a chat.</h3>
                <form>
                  <input type="text" placeholder="Tên*" required />
                  <input type="email" placeholder="Email*" required />
                  <input type="tel" placeholder="Số điện thoại" />
                  <textarea placeholder="Câu hỏi của bạn*" required></textarea>
                  <div className={styles.recaptcha}>
                    <input type="checkbox" id="notRobot" className='w-5 h-5'/>
                    <label htmlFor="notRobot">Tôi không phải là robot</label>
                    <img src='/img/icon/cacha.svg' />
                  </div>
                  <button type="submit">
                    <span className='text-lg font-medium '>
                      Send 
                    </span>
                    <img src='/img/icon/sendBlack.svg'/>

                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
