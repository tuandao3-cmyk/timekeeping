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

const GuidePage: React.FC = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('default');

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

  return (
    <>
      <div className="relative w-full h-[520px] bg-[#07212C] bg-[url('/img/guides/guides_banner.png')] bg-no-repeat bg-cover bg-center">
        <div
          className="absolute inset-0 bg-gradient-to-b flex  items-end pb-[107px] justify-center"
          style={{
            background:
              'linear-gradient(180deg, rgba(11, 53, 70, 0.08) 17.75%, rgba(11, 53, 70, 0.747169) 51.39%, rgba(11, 53, 70, 0.862047) 71.15%, #0B3546 88.52%)',
          }}
        >
          <div className="flex flex-col items-center justify-end text-center max-w-[1440px] text-white gap-[22px]">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px',
                textAlign: 'center',
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
              }}
            >
              Hướng dẫn chi tiết để đầu tư hiệu quả vào HyraCap và khám phá các
              cơ hội sinh lợi hấp dẫn.
            </Typography>
          </div>
        </div>
        <div className="bg-[#F3F7F4]  gap-[24px] w-full max-w-[1200px] absolute -bottom-[68px] p-[40px] flex left-1/2 transform -translate-x-1/2 rounded-[20px]  ">
          <input
            type="text"
            placeholder="Nhập thông tin bạn cần tìm"
            className="w-full h-[56px] bg-[#FFFFFF] border-none rounded-[10px] px-[20px] text-[#686868] font-400 text-[16px] leading-[24px]"
          />
          <button className="bg-[#48B96D] px-[32px] py-[18px] rounded-[16px] text-[#fff] text-[15px] font-500 leading-[20px] min-w-[140px]">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="flex max-w-[1440px] mx-auto pt-[68px] ">
        <aside className="max-w-[330px] w-[23vw] p-5 border-r border-[#E0E0E0]">
          <nav>
            <ul className=" flex flex-col gap-10 text-xl 3xl:text-2xl text-left pt-[50px] lg:ml-[60px] ">
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('signin')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'signin' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Đăng ký
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('login')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'login' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Đăng nhập
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('auth')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'auth' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Xác thực eKYC
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('contract')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'contract' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Ký hợp đồng
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('product')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'product' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Sản phẩm
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('transaction')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'transaction' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Giao dịch
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('forgot')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'forgot' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Quên mật khẩu
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('logout')}
                  className={`no-underline text-[#8A8A8A] font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'logout' ? 'text-[#28a745]' : ''
                  }`}
                >
                  Đăng xuất
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        {renderContent()}
      </div>
      <DownloadSection />
    </>
  );
};

export default GuidePage;
