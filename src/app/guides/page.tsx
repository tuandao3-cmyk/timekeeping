'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { FiSearch } from 'react-icons/fi';

import { usePathname } from 'next/navigation';
import AuthSection from './auth/page';
import ContractSection from './contract/page';
import ForgotSection from './forgot/page';
import ProductSection from './product/page';
import SigninSection from './signin/page';
import TransactionSection from './transaction/page';
import Login from './login/page';
import LogoutSection from './logout/page';
import DownloadSection from '../download';
import { Typography } from '@mui/material';
const PROJECTS = [
  {
    id: 1,
    img: '/img/egabid_pc.png',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed'],
  },
  {
    id: 2,
    img: '/img/Salala.png',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 3,
    img: '/img/hyperas_chain.png',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 4,
    img: '/img/egabid_pc.png',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 5,
    img: '/img/Salala.png',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 6,
    img: '/img/hyperas_chain.png',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
];

const data = [
  { id: 'signin', text: 'Đăng ký' },
  { id: 'login', text: 'Đăng nhập' },
  { id: 'auth', text: 'Xác thực eKYC' },
  { id: 'contract', text: 'Ký hợp đồng' },
  { id: 'product', text: 'Thực hiện đầu tư' },
  { id: 'transaction', text: 'Giao dịch' },
  { id: 'forgot', text: 'Quên mật khẩu' },
];

const GuidePage: React.FC = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('signin');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuItemClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'auth':
        return <AuthSection />;
      case 'contract':
        return <ContractSection />;
      case 'forgot':
        return <ForgotSection />;
      case 'login':
        return <Login />;
      case 'logout':
        return <LogoutSection />;
      case 'product':
        return <ProductSection />;
      case 'signin':
        return <SigninSection />;
      case 'transaction':
        return <TransactionSection />;
      default:
        return <SigninSection />;
    }
  };
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = () => {
    const searchTerm = searchValue.toLowerCase();
    if (searchTerm) {
      if (searchTerm.includes('đăng ký') || searchTerm.includes('register')) {
        setActiveSection('signin');
      } else if (
        searchTerm.includes('đăng nhập') ||
        searchTerm.includes('login')
      ) {
        setActiveSection('login');
      } else if (
        searchTerm.includes('ekyc') ||
        searchTerm.includes('xác thực') ||
        searchTerm.includes('auth')
      ) {
        setActiveSection('auth');
      } else if (
        searchTerm.includes('hợp đồng') ||
        searchTerm.includes('contract')
      ) {
        setActiveSection('contract');
      } else if (
        searchTerm.includes('đầu tư') ||
        searchTerm.includes('invest')
      ) {
        setActiveSection('product');
      } else if (
        searchTerm.includes('giao dịch') ||
        searchTerm.includes('transaction')
      ) {
        setActiveSection('transaction');
      } else if (
        searchTerm.includes('quên mật khẩu') ||
        searchTerm.includes('forgot')
      ) {
        setActiveSection('forgot');
      } else if (
        searchTerm.includes('đăng xuất') ||
        searchTerm.includes('logout')
      ) {
        setActiveSection('logout');
      }
    }
  };
  return (
    <>
      <div className=" w-full h-[520px]  bg-[#07212C] bg-[url('/img/guides/guide_bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="  flex flex-col w-full h-full items-center pb-[107px]  gap-10 justify-center">
          <div className="flex flex-col items-center justify-end text-center max-w-[1440px] text-[#0B3546] gap-[22px]">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px',
                textAlign: 'center',
                padding: '0 20px',
              }}
            >
              Hướng dẫn đầu tư vào HyraCap
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
                padding: '0 20px',
              }}
            >
              Hướng dẫn chi tiết để đầu tư hiệu quả vào HyraCap và khám phá các
              cơ hội sinh lợi hấp dẫn.
            </Typography>
          </div>
          <div className="px-[20px] h-[56px] w-full max-w-[800px]">
            <div className=" h-[56px] bg-white gap-[24px] w-full max-w-[800px]  p-2 flex  rounded-[20px]  ">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Nhập thông tin bạn cần tìm"
                className="w-full  bg-[#FFFFFF] border-none px-[20px] text-[#686868] font-400 text-[16px] leading-[24px] outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-[#48B96D] transition ease-in-out duration-300 hover:bg-[#297241] px-[16px] py-[10px] rounded-[16px] text-[#fff] text-[15px] font-500 leading-[20px] min-w-[140px]"
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto  ">
        <aside className="hidden lg:block max-w-[330px] min-w-[210px] w-[23vw] p-5 border-r border-[#E0E0E0]">
          <nav>
            <ul className=" flex flex-col gap-10 text-xl 3xl:text-2xl text-left pt-[50px]  ">
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('signin')}
                  className={`no-underline font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'signin'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Đăng ký
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('login')}
                  className={`no-underline  font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'login'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Đăng nhập
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('auth')}
                  className={`no-underline  font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'auth'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Xác thực eKYC
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('contract')}
                  className={`no-underline  font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'contract'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Ký hợp đồng
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('product')}
                  className={`no-underline  font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'product'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Thực hiện đầu tư
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('transaction')}
                  className={`no-underline  font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'transaction'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Giao dịch
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('forgot')}
                  className={`no-underline  font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'forgot'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Quên mật khẩu
                </button>
              </li>
              {/* <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('logout')}
                  className={`no-underline  font-sans font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'logout'
                      ? 'text-[#28a745]'
                      : 'text-[#8A8A8A]'
                  }`}
                >
                  Đăng xuất
                </button>
              </li> */}
            </ul>
          </nav>
        </aside>
        <div className="lg:hidden p-5 w-full ">
          <div className="relative w-full ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" text-[#8A8A8A] border rounded-lg border-[#E0E0E0] py-3 px-4  justify-between  font-bold flex items-center w-full gap-2"
            >
              {(!!activeSection &&
                data.find((item) => item.id === activeSection)?.text) ||
                'Hướng dẫn'}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
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
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50">
                <ul className="gap-[20px] pl-3 text-base">
                  {data?.map((item) => (
                    <li
                      key={item.id}
                      className="flex rounded-[10px] text-left p-2"
                    >
                      <button
                        onClick={() => handleMenuItemClick(item.id)}
                        className={`w-full text-left no-underline font-sans font-bold hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                          activeSection === item.id
                            ? 'text-[#28a745]'
                            : 'text-[#8A8A8A]'
                        }`}
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {renderContent()}
      </div>
      <DownloadSection />
    </>
  );
};

export default GuidePage;
