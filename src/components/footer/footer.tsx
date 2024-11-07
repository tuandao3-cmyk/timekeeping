'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import {
  CallIcon,
  SmsIcon,
  FacebookIcon,
  XIcon,
  YouTubeIcon,
  LinkedInIcon,
} from '@/components/icons';

const Footer: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <footer
      ref={ref}
      className={`bg-[#04141A] dark:bg-[#04141A] duration-700 ease-in-out transform `}
    >
      <div className="mx-auto w-full max-w-screen-xl py-[62px] pl-3 pr-3">

        <div className="grid grid-cols-1 gap-8 px-4   md:grid-cols-5">
          <div className="md:col-span-2 md:max-w-[258px]">
            <h2
              ref={ref}
              className={`mb-6 font-sans text-[#FFFFFF] text-[16px] text-base font-semibold leading-6 uppercase duration-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-10'
              }`}
            >
              CÔNG TY CỔ PHẦN HYRATEK
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li
                className={`mb-4 max-w-md duration-1500 ease-in-out transform ${
                  inView
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-90 translate-y-10'
                }`}
                ref={ref}
              >
                <a
                  href="/contact"
                  className=" hover:underline text-[14px] font-[400] font-sans"
                >
                  Địa chỉ: Lô CX01, khu đô thị Văn Khê, phường La Khê, quận Hà
                  Đông, Hà Nội.
                </a>
              </li>
              <li
                ref={ref}
                className={`mb-4 max-w-md duration-2000 ease-in-out transform ${
                  inView
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-90 translate-y-10'
                }`}
              >
                <a
                  href="/contact"
                  className=" hover:underline text-[14px] font-[400] flex gap-[8px] justify-start font-sans"
                >
                  <SmsIcon className="w-4 h-4 mr-2" />
                  info@hyratek.com
                </a>
              </li>
              <li className={`mb-4 max-w-md `}>
                <a
                  ref={ref}
                  href="/contact"
                  className={` font-sans hover:underline text-[14px] font-[400] flex gap-[8px] justify-start duration-2500 ease-in-out transform ${
                    inView
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-90 translate-y-10'
                  }`}
                >
                  <CallIcon className="w-4 h-4 mr-2" />
                  (+84) 58 8668 777
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2
              ref={ref}
              className={`mb-6 font-sans  text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase text-[16px] duration-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-10'
              }`}
            >
              CÔNG TY
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 ">
              <li className="mb-4">
                <a
                  href="/about"
                  className="hover:underline font-sans text-[14px]"
                >
                  Về chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="about" className="hover:underline font-sans text-[14px]">
                  Công nghệ của chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="https://www.facebook.com/hyraholdings/" className="hover:underline font-sans text-[14px]">
                  Bộ phương tiện truyền thông
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              ref={ref}
              className={`mb-6 font-sans text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase  text-[16px] duration-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-10'
              }`}
            >
              Hệ sinh thái
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 ">
              <li className="mb-4">
                <a href="https://www.hyperaschain.com/vi" className="hover:underline font-sans text-[14px]">
                  Hyperas
                </a>
              </li>
              <li className="mb-4">
                <a href="https://salala.ai/vi" className="hover:underline font-sans text-[14px]">
                  Salala AI
                </a>
              </li>
              <li className="mb-4">
                <a href="https://egabid.com/vi" className="hover:underline font-sans text-[14px]">
                  Egabid
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              ref={ref}
              className={`mb-6 font-sans text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase  text-[16px] duration-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-10'
              }`}
            >
              Khác
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 ">
              <li className="mb-4">
                <a href="/news" className="hover:underline font-sans text-[14px]">
                  Tin tức
                </a>
              </li>
              <li className="mb-4">
                <a href="https://hr1tech.com/en/company/cong-ty-co-phan-hyra-holdings-37455.html" className="hover:underline font-sans text-[14px]">
                  Tuyển dụng
                </a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:underline font-sans text-[14px]">
                  Liên hệ chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="/about/leaderdetail" className="hover:underline font-sans text-[14px]">
                  Quan hệ cổ đông
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={ref}
          className={`px-4 pt-6 bg-transparent dark:bg-transparent md:flex md:items-center md:justify-between duration-1000 ease-in-out transform ${
            inView
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-10'
          }`}
        >
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center font-sans">
            Hyratek là nhãn hiệu đã đăng ký. 2022 - 2027 Bảo lưu mọi quyền.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com/hyraholdings/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon />
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://x.com/hyraholdings"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <XIcon />
              <span className="sr-only">X page</span>
            </a>
            <a
              href="https://www.youtube.com"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <YouTubeIcon />
              <span className="sr-only">Youtube page</span>
            </a>
            <a
              href="https://www.linkedin.com/company/hyraholdings/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <LinkedInIcon />
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
