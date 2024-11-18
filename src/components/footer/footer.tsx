'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  CallIcon,
  SmsIcon,
  FacebookIcon,
  XIcon,
  YouTubeIcon,
  LinkedInIcon,
} from '@/components/icons';

interface LinkItem {
  id: string;
  text: string;
  link: string;
  isExternal?: boolean;
}

interface FooterSectionProps {
  title: string;
  data: LinkItem[];
  refProp: any;
  inView: boolean;
}

const ecosystemData: LinkItem[] = [
  {
    id: 'hyperas',
    text: 'Hyperas',
    link: 'https://www.hyperaschain.com/vi',
    isExternal: true,
  },
  {
    id: 'salala',
    text: 'Salala AI',
    link: 'https://salala.ai/vi',
    isExternal: true,
  },
  {
    id: 'egabid',
    text: 'Egabid',
    link: 'https://egabid.com/vi',
    isExternal: true,
  },
];

const companyData: LinkItem[] = [
  {
    id: 'about',
    text: 'Về chúng tôi',
    link: '/about',
    isExternal: false,
  },
  {
    id: 'tech',
    text: 'Công nghệ của chúng tôi',
    link: '/about',
    isExternal: false,
  },
  {
    id: 'media',
    text: 'Bộ phương tiện truyền thông',
    link: 'https://www.facebook.com/hyraholdings/',
    isExternal: true,
  },
];

const otherData: LinkItem[] = [
  {
    id: 'news',
    text: 'Tin tức',
    link: '/news',
    isExternal: false,
  },
  {
    id: 'recruitment',
    text: 'Tuyển dụng',
    link: 'https://hr1tech.com/en/company/cong-ty-co-phan-hyra-holdings-37455.html',
    isExternal: true,
  },
  {
    id: 'contact',
    text: 'Liên hệ chúng tôi',
    link: '/contact',
    isExternal: false,
  },
  {
    id: 'shareholder',
    text: 'Quan hệ cổ đông',
    link: '/about/leaderdetail',
    isExternal: false,
  },
];

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  data,
  refProp,
  inView,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: LinkItem) => {
    if (item.isExternal) {
      window.open(item.link, '_blank');
    } else {
      window.location.href = item.link;
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left mb-6 font-sans text-sm leading-4 font-semibold text-[#ffffff]/80 flex items-center justify-between"
      >
        <span className="duration-1000 ease-in-out transform normal-case">
          {title}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 -rotate-90 ${
            isOpen ? 'rotate-0' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`text-[#FFFFFF]/70 ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul>
          {data.map((item) => (
            <li key={item.id} className="mb-4">
              <button
                onClick={() => handleItemClick(item)}
                className="hover:underline font-sans text-[14px] text-left w-full"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer className="bg-[#04141A] dark:bg-[#04141A]">
      <div className="mx-auto w-full max-w-screen-xl py-[62px] pl-3 pr-3">
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-5">
          {/* Company Info - Always visible */}
          <div className="md:col-span-2 md:max-w-[258px]">
            <h2 className="mb-6 font-sans text-[#FFFFFF] text-[16px] text-base font-semibold leading-6 uppercase">
              CÔNG TY CỔ PHẦN HYRACAP
            </h2>
            <ul className="text-[#FFFFFF]/70 font-medium">
              <li className="mb-4 max-w-md">
                <a
                  href="/contact"
                  className="hover:underline text-[14px] font-[400] font-sans"
                >
                  Địa chỉ: Lô CX01, khu đô thị Văn Khê, phường La Khê, quận Hà
                  Đông, Hà Nội.
                </a>
              </li>
              <li className="mb-4 max-w-md">
                <a
                  href="/contact"
                  className="hover:underline text-[14px] font-[400] flex gap-[8px] justify-start font-sans"
                >
                  <SmsIcon className="w-4 h-4 mr-2" />
                  info@hyracap.com
                </a>
              </li>
              <li className="mb-4 max-w-md">
                <a
                  href="/contact"
                  className="font-sans hover:underline text-[14px] font-[400] flex gap-[8px] justify-start"
                >
                  <CallIcon className="w-4 h-4 mr-2" />
                  (+84) 58 8668 777
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menus */}
          <div className="md:hidden">
            <FooterSection
              title="Công ty"
              data={companyData}
              refProp={ref}
              inView={inView}
            />
            <FooterSection
              title="Hệ sinh thái"
              data={ecosystemData}
              refProp={ref}
              inView={inView}
            />
            <FooterSection
              title="Khác"
              data={otherData}
              refProp={ref}
              inView={inView}
            />
          </div>

          {/* Desktop Menus */}
          <div className="hidden md:block">
            <h2 className="mb-6 font-sans text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase text-[16px]">
              CÔNG TY
            </h2>
            <ul className="text-[#FFFFFF]/70">
              {companyData.map((item) => (
                <li key={item.id} className="mb-4">
                  <a
                    href={item.link}
                    target={item.isExternal ? '_blank' : undefined}
                    className="hover:underline font-sans text-[14px]"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h2 className="mb-6 font-sans text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase text-[16px]">
              HỆ SINH THÁI
            </h2>
            <ul className="text-[#FFFFFF]/70">
              {ecosystemData.map((item) => (
                <li key={item.id} className="mb-4">
                  <a
                    href={item.link}
                    target="_blank"
                    className="hover:underline font-sans text-[14px]"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h2 className="mb-6 font-sans text-sm md:text-base leading-4 md:leading-6 font-semibold text-[#ffffff] uppercase text-[16px]">
              KHÁC
            </h2>
            <ul className="text-[#FFFFFF]/70">
              {otherData.map((item) => (
                <li key={item.id} className="mb-4">
                  <a
                    href={item.link}
                    target={item.isExternal ? '_blank' : undefined}
                    className="hover:underline font-sans text-[14px]"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="px-4 pt-6 bg-transparent md:flex md:items-center md:justify-between">
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
