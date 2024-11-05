'use client';

import React from 'react';

import { useInView } from 'react-intersection-observer';

import { useState, useEffect } from 'react';
import { ProfitIcon, MoneyIcon, PiggyBankIcon } from '@/components/icons';
import ProductItem from './components/productItem';
import { start } from 'repl';
import Image from 'next/image';
import DownloadSection from '../download';
import ShortTermSection from './short-term/page';
import LongTermSection from './long-term/page';

const ProductPage: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });
  //

  const products = [
    {
      title: 'Đầu tư linh hoạt',
      type: 'flexible',
      package: [
        {
          title: 'Egabid',
          start_date: '20/10/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 2500000,
          profit: 2000000,
          sponsorship: 75,
          image: (
            <img
              src="/img/egabid_pc.png"
              alt="Hyperas Chain"
              className="md:h-[250px] md:w-[384px]"
            />
          ),
          field: 'CÔNG NGHỆ',
        },
        {
          title: 'Salala AI',
          start_date: '09/09/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 3000000,
          profit: 3000000,
          sponsorship: 98,
          image: (
            <img
              src="/img/salala2.png"
              alt="Salala AI"
              className="md:h-[250px] md:w-[384px]"
            />
          ),
          field: 'CÔNG NGHỆ',
        },
        {
          title: 'HYPERAS CHAIN',
          start_date: '08/09/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 2500000,
          profit: 1000000,
          sponsorship: 80,
          image: (
            <img
              src="/img/hyperas_chain1.png"
              alt="Rapital Bank"
              className="md:h-[250px] md:w-[384px]"
            />
          ),
          field: 'CÔNG NGHỆ',
        },
      ],
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 4,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });
  const [activeSection, setActiveSection] = useState<string>('short-term');

  const renderContent = () => {
    switch (activeSection) {
      case 'short-term':
        return <ShortTermSection />;
      case 'long-term':
        return <LongTermSection />;

      default:
        return <ShortTermSection />;
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: 'url("/img/productbg.png")' }}
        className=" min-h-[620px]  w-[100%] flex flex-col justify-start items-end relative font-sans"
      >
        <div className="flex flex-col gap-8 justify-center items-center w-full mt-16 max-md:!flex-col pl-32 pr-12">
          <p
            ref={ref2}
            className={`text-[40px]  text-white font-bold uppercase duration-700 ease-in-out transform ${
              inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Sản phẩm đầu tư tại HyraCap
          </p>

          <p
            ref={ref2}
            className={`text-[20px] text-[#ffffff]/70 duration-700  ease-in-out transform ${
              inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Chúng tôi cung cấp các gói sản phẩm đầu tư phù hợp với từng nhu cầu
            của khách hàng.
          </p>
          <div className="flex w-[100%] justify-center items-start gap-[24px]">
            <button
              ref={ref2}
              onClick={() => setActiveSection('short-term')}
              className={` hover:bg-[#48B96D] text-white text-[16px] px-[20px] py-[14px] rounded-[999px] text-center transition-all duration-300 delay-200 ease-in-out transform ${
                inView2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${activeSection === 'short-term' ? 'bg-[#48B96D]' : 'bg-[#ffffff]/10'}`}
            >
              Đầu tư ngắn hạn
            </button>
            <button
              ref={ref2}
              onClick={() => setActiveSection('long-term')}
              className={` hover:bg-[#48B96D] text-white text-[16px] px-[20px] py-[14px] rounded-[999px] text-center transition-all duration-300 delay-500 ease-in-out transform ${
                inView2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${activeSection === 'long-term' ? 'bg-[#48B96D]' : 'bg-[#ffffff]/10'}`}
            >
              Đầu tư dài hạn
            </button>
          </div>
        </div>
        {renderContent()}
      </div>

      {/* Các gói đầu tư */}
      <section className="w-full h-auto mt-[450px] bg-white py-6 flex flex-col justify-center items-center px-[120px]">
        {products.map((product: (typeof products)[0], index) => (
          <div
            className="w-full h-auto bg-white px-1 flex flex-col justify-center items-left"
            key={index}
          >
            <h2
              className={`text-black px-4 font-bold text-5xl uppercase md:text-3xl text-center md:text-[35px] text-[20px] duration-300 `}
            >
              {product.title}
            </h2>
            <div className="flex gap-[24px] items-center  w-full overflow-y-auto justify-center py-8 md:px-8  ">
              {product.package.map((packageItem: any, index) => (
                <ProductItem
                  key={index}
                  descriptions={packageItem.descriptions}
                  image={packageItem.image}
                  interest_rate={packageItem.interest_rate}
                  term={packageItem.term}
                  title={packageItem.title}
                  type={product.type}
                  startDate={packageItem.start_date}
                  profit={packageItem.profit}
                  sponsorship={packageItem.sponsorship}
                  invested={packageItem.invested}
                  field={packageItem.field}
                />
              ))}
            </div>
          </div>
        ))}
        <button className="border-[#0000003D] border-[1px] rounded-[999px] py-[14px] px-[16px] font-[500] text-[16px] text-black text-opacity-90 hover:bg-[#48B96D] hover:text-white transform ease-in-out duration-100 hover:border-transparent">
          Tìm hiểu thêm các dự án &gt;
        </button>
      </section>

      {/* dowwnlaod */}
      <DownloadSection />
    </>
  );
};
export default ProductPage;
