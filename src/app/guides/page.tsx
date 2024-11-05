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
      <div className=" w-full h-[520px]  bg-[#07212C] bg-[url('/img/guides/guide_bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="  flex flex-col w-full h-full items-center pb-[107px]  gap-10 justify-center">
          <div className="flex flex-col items-center justify-end text-center max-w-[1440px] text-[#0B3546] gap-[22px]">
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
          <div className="bg-white h-[56px] gap-[24px] w-full max-w-[800px]  p-2 flex  rounded-[20px]  ">
            <input
              type="text"
              placeholder="Nhập thông tin bạn cần tìm"
              className="w-full  bg-[#FFFFFF] border-none px-[20px] text-[#686868] font-400 text-[16px] leading-[24px] outline-none"
            />
            <button className="bg-[#48B96D] transition ease-in-out duration-300 hover:bg-[#297241] px-[16px] py-[10px] rounded-[16px] text-[#fff] text-[15px] font-500 leading-[20px] min-w-[140px]">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1440px] mx-auto  ">
        <aside className="max-w-[330px] w-[23vw] p-5 border-r border-[#E0E0E0]">
          <nav>
            <ul className=" flex flex-col gap-10 text-xl 3xl:text-2xl text-left pt-[50px] lg:ml-[60px] ">
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('signin')}
                  className={`no-underline font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'signin' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
                  }`}
                >
                  Đăng ký
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('login')}
                  className={`no-underline  font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'login' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
                  }`}
                >
                  Đăng nhập
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('auth')}
                  className={`no-underline  font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'auth' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
                  }`}
                >
                  Xác thực eKYC
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('contract')}
                  className={`no-underline  font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'contract' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
                  }`}
                >
                  Ký hợp đồng
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('product')}
                  className={`no-underline  font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'product' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
                  }`}
                >
                  Thực hiện đầu tư
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('transaction')}
                  className={`no-underline  font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'transaction' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
                  }`}
                >
                  Giao dịch
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('forgot')}
                  className={`no-underline  font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'forgot' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
                  }`}
                >
                  Quên mật khẩu
                </button>
              </li>
              <li className="mb-2.5">
                <button
                  onClick={() => setActiveSection('logout')}
                  className={`no-underline  font-roboto font-bold flex flex-col hover:text-[#28a745] cursor-pointer bg-transparent border-none ${
                    activeSection === 'logout' ? 'text-[#28a745]' : 'text-[#8A8A8A]'
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
