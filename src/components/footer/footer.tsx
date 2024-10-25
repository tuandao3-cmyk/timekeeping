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
      <div className="mx-auto w-full max-w-screen-xl pt-16 pl-3 pr-3">
        {/* <div>
          <img
            ref={ref}
            src="/img/logohyracap.png"
            alt="footer logo"
            className={`w-full max-w-48 md:max-w-48 lg:max-w-45 transition-opacity duration-700 ease-in-out transform ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          />
        </div> */}
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          <div>
            <h2
              ref={ref}
              className={`mb-6 text-[#FFFFFF] text-[16px] text-base font-semibold leading-6 uppercase duration-1000 ease-in-out transform ${
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
                <a href="#" className=" hover:underline text-[14px] font-[400]">
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
                  href="#"
                  className=" hover:underline text-[14px] font-[400] flex gap-[8px] justify-start"
                >
                  <SmsIcon className="w-4 h-4 mr-2" />
                  info@hyratek.com
                </a>
              </li>
              <li className={`mb-4 max-w-md `}>
                <a
                  ref={ref}
                  href="#"
                  className={` hover:underline text-[14px] font-[400] flex gap-[8px] justify-start duration-2500 ease-in-out transform ${
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
          <div></div>
          <div>
            <h2
              ref={ref}
              className={`mb-6 font-inter text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase text-[16px] duration-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-10'
              }`}
            >
              CÔNG TY
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 ">
              <li className="mb-4">
                <a href="/about" className="hover:underline">
                  Về chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Công nghệ của chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Bộ phương tiện truyền thông
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              ref={ref}
              className={`mb-6 font-inter text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase  text-[16px] duration-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-10'
              }`}
            >
              Hệ sinh thái
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 ">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Hyperas
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Salala AI
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Egabid
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              ref={ref}
              className={`mb-6 font-inter text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase  text-[16px] duration-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-10'
              }`}
            >
              Khác
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 ">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tin tức
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tuyển dụng
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Liên hệ chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Quan hệ cổ đông
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={ref}
          className={`px-4 py-6 bg-transparent dark:bg-transparent md:flex md:items-center md:justify-between duration-1000 ease-in-out transform ${
            inView
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-10'
          }`}
        >
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            Hyratek là nhãn hiệu đã đăng ký. 2022 - 2027 Bảo lưu mọi quyền.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon />
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <XIcon />
              <span className="sr-only">X page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <YouTubeIcon />
              <span className="sr-only">Youtube page</span>
            </a>
            <a
              href="#"
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
