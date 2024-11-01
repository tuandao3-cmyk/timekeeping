'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import InfoSection from './info/page';
import BusinessPlanSection from './business plan/page';
import ContractSampleSection from './contract_sample/page';
import FinanceRoadSection from './finance_road/page';
import ProductSection from '../guides/product/page';
import PitchingDeckSection from './pitchingdeck/page';

const DetailCategoryPage: React.FC = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('default');
  const renderContent = () => {
    switch (activeSection) {
      // case 'info':
      //   return <InfoSection />;
      // case 'business_plan':
      //   return <BusinessPlanSection />;
      // case 'contract_sample':
      //   return <ContractSampleSection />;
      // case 'finance_road':
      //   return <FinanceRoadSection />;
      // case 'pitchingdeck':
      //   return <PitchingDeckSection />;
      // case 'product':
      //   return <ProductSection />;
      default:
        return <InfoSection />;
    }
  };
  return (
    <>
      <main className=" bg-[#F7F9FC] flex justify-center items-center font-roboto">
        <div className="py-6 rounded-lg shadow-md max-w-[1440px]">
          <div className="flex flex-col gap-3 sm:flex-row px-11 lg:px-28">
            <img
              src="/img/19.jpg"
              alt="/img/19.jpg"
              className="w-52 h-44 object-cover rounded-xl md:mr-8"
            />
            <div className="flex flex-col justify-between">
              <div className="sm:ml-10">
                <span className="text-base font-normal text-black pb-3">
                  CÔNG NGHỆ
                </span>
                <h2 className="text-3xl font-bold text-[#363636]">
                  Dự án Salala AI
                </h2>
              </div>
              <div className="lg:flex justify-start hidden ">
                <a
                  onClick={() => setActiveSection('info')}
                  className={`text-lg font-semibold px-5 py-3 ${activeSection === 'info' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
                >
                  Thông tin
                </a>
                <a
                  onClick={() => setActiveSection('pitchingdeck')}
                  className={`text-lg font-semibold px-5 py-3 ${activeSection === 'pitchingdeck' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
                >
                  Pitchingdeck
                </a>
                <a
                  onClick={() => setActiveSection('contract_sample')}
                  className={`text-lg font-semibold px-5 py-3 ${activeSection === 'contract_sample' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
                >
                  Hợp đồng mẫu
                </a>
                <a
                  onClick={() => setActiveSection('finance_road')}
                  className={`text-lg font-semibold px-5 py-3 ${activeSection === 'finance_road' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
                >
                  Lộ trình tài chính
                </a>
                <a
                  onClick={() => setActiveSection('business_plan')}
                  className={`text-lg font-semibold px-5 py-3 ${activeSection === 'business_plan' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
                >
                  Kế hoạch kinh doanh
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-3 lg:hidden ">
            <a
              onClick={() => setActiveSection('info')}
              className={`text-lg font-semibold px-7 py-3 ${activeSection === 'info' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
            >
              Thông tin
            </a>
            <a
              onClick={() => setActiveSection('pitchingdeck')}
              className={`text-lg font-semibold px-7 py-3 ${activeSection === 'pitchingdeck' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
            >
              Pitchingdeck
            </a>
            <a
              onClick={() => setActiveSection('contract_sample')}
              className={`text-lg font-semibold px-7 py-3 ${activeSection === 'contract_sample' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
            >
              Hợp đồng mẫu
            </a>
            <a
              onClick={() => setActiveSection('finance_road')}
              className={`text-lg font-semibold px-7 py-3 ${activeSection === 'finance_road' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
            >
              Lộ trình tài chính
            </a>
            <a
              onClick={() => setActiveSection('business_plan')}
              className={`text-lg font-semibold px-7 py-3 ${activeSection === 'business_plan' ? 'text-[#009467] bg-white' : 'text-gray-500'}`}
            >
              Kế hoạch kinh doanh
            </a>
          </div>
          {renderContent()}
        </div>
      </main>
    </>
  );
};
export default DetailCategoryPage;
