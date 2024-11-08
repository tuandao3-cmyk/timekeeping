'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    if (window.scrollY > 100 && window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { href: '/', text: 'Trang chủ' },
    { href: '/about', text: 'Giới thiệu' },
    {
      href: '/categories',
      text: 'Danh mục',
      activeLinks: ['/categories', '/detail-category'],
    },
    { href: '/products', text: 'Sản phẩm' },
    { href: '/guides', text: 'Hướng dẫn' },
    {
      href: '/news',
      text: 'Tin tức',
      activeLinks: ['/news'],
    },
    { href: '/reports', text: 'Báo cáo' },
    { href: '/contact', text: 'Liên hệ' },
  ];
  useEffect(() => {
    setIsMenuOpen(false);
    console.log('pathname', pathname);
  }, [pathname]);
  const isActive = (item: any) => {
    if (
      item.activeLinks &&
      item.activeLinks.some((link: any) => new RegExp(link).test(pathname))
    ) {
      return true;
    }
    const regex = /^\/news\/[^/]+/;
    if (regex.test(pathname) && item.href === '/news') {
      return true;
    }

    return false;
  };
  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 border-b-2 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1440px]">
          <Link href="/" className="flex items-center">
            <Image
              width={118}
              height={40}
              src="/img/logohyracap.png"
              className="mr-3 h-6 sm:h-9"
              alt="HyraCap Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Mở menu chính</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out lg:ml-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col text-sm text-[#000000]/90 leading-6 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`block py-2 pr-4 pl-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 transition duration-300 ${
                      pathname === item.href ||
                      (item.activeLinks && isActive(item))
                        ? 'text-[#48B96D] lg:text-[#48B96D]'
                        : 'text-[#000000]/90 lg:hover:text-[#48B96D]'
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
