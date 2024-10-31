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

const GuidePage: React.FC = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('default');

  const renderContent = () => {
    switch(activeSection) {
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
        return (
          <SigninSection />
        );
    }
  };


  return (
    <>

    <div className="relative w-full  h-[80vh] overflow-hidden">

      <div className=" -inset-[10px]  bg-no-repeat bg-cover bg-center blur-sm -z-10"></div>

      <div className=" flex flex-col justify-between  bg-white bg-[url('/img/guidebg.png')] bg-no-repeat bg-cover bg-center w-full h-full">
        <div className="text-white flex flex-col my-auto text-left pl-5 lg:pl-[100px]">
          <div className="flex flex-col mt-[60px]">
          <div className='font-bold text-4xl 2xl:text-6xl 4xl:text-8xl pb-5'>Hướng dẫn đầu tư vào HyraCap</div>
          <div className='font-normal text-2xl 3xl:text-3xl 4xl:text-4xl'>Hướng dẫn các bước thực hiện đầu tư</div>
          </div>
        </div>
        <div className=" flex text-left ml-[50px] lg:ml-[150px] my-[50px] lg:my-[100px] 2xl:mx-auto items-center max-h-[50px] w-[80vw] max-w-[1200px]  bg-white rounded-[30px] overflow-hidden shadow-md ">
          <button className="bg-transparent border-none px-5 py-4 cursor-pointer">
            <FiSearch />
          </button>
          <input
            type="text"
            placeholder="Nhập thông tin bạn cần tìm"
            className="flex-1 px-5 py-4  text-base "
          />
        </div>
    </div>
  </div>
      <div className="flex max-w-[1440px] mx-auto ">
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
