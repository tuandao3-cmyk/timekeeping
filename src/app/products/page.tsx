'use client';

import React from 'react';
import styles from '@/app/products/product.module.css';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { useState, useEffect } from 'react';
import { ProfitIcon, MoneyIcon, PiggyBankIcon } from '@/components/icons';
import ProductItem from './components/productItem';
import { start } from 'repl';
import Image from 'next/image';
import DownloadSection from '../download';

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
          title: 'Hyperas Chain',
          start_date: '20/10/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 2500000,
          profit: 200000,
          sponsorship: 75,
          image: <img src="/img/hyperas_chain.png" alt="Hyperas Chain" />,
          field: 'CÔNG NGHỆ',
        },
        {
          title: 'Salala AI',
          start_date: '09/09/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 3000000,
          profit: 300000,
          sponsorship: 75,
          image: <img src="/img/salala_ai.png" alt="Salala AI" />,
          field: 'CÔNG NGHỆ',
        },
        {
          title: 'Rapital Bank',
          start_date: '08/09/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 2500000,
          profit: 100000,
          sponsorship: 75,
          image: <img src="/img/rapital_bank.png" alt="Rapital Bank" />,
          field: 'ĐẦU TƯ TRỰC TIẾP',
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

  return (
    <>
      <div
        style={{ backgroundImage: 'url("/img/productbg.png")' }}
        className=" min-h-[620px]  w-[100%] flex flex-col justify-start items-end relative"
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
              className={` bg-[#48B96D] text-white text-[16px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform ${
                inView2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Đầu tư ngắn hạn
            </button>
            <button
              ref={ref2}
              className={`bg-[#ffffff]/10 border border-[#FFFFFF29] text-[#FFFFFF] text-[16px]text-center px-[16px] py-[14px]  rounded-[999px]  hover:bg-[#379256]  transition-all  duration-300 delay-500 ease-in-out transform ${
                inView2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } `}
            >
              Đầu tư dài hạn
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full absolute top-1/2 px-32">
          <div
            ref={ref2}
            className={` rounded-lg duration-1000  ease-in-out transform ${
              inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15'
            }`}
            // controls
          >
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-white shadow-lg   rounded-lg">
                <div className="border-b-2 flex flex-col justify-between items-center pt-4 px-14 h-[205px]">
                  <p className="text-2xl font-medium uppercase">Gói cơ bản</p>
                  <img src="/img/icon1.png" alt="" />
                </div>
                <div className="flex flex-col py-11 px-14">
                  <p className="text-center font-bold text-[40px] text-[#04141A]">
                    3.5%/năm
                  </p>
                  <p className="text-center font-normal text-base">
                    kỳ hạn 12 tháng
                  </p>
                  <div className="flex flex-col gap-8 py-10">
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Đầu tư thời gian ngắn hạn
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Lợi nhuận hấp dẫn và cố định
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Đầu tư an toàn, dễ dàng quản lý
                      </p>
                    </div>
                  </div>
                  <button
                    className={`uppercase  bg-[#48B96D] text-white text-[16px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform`}
                  >
                    mua ngay
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-lg  rounded-lg">
                <div className="border-b-2 flex flex-col justify-between items-center pt-4 px-14 h-[205px]">
                  <p className="text-2xl font-medium uppercase">Gói NÂNG CAO</p>
                  <p className="px-2 py-1 text-[#0048FF] bg-[#3E91FF]/30 rounded-full">
                    Best value
                  </p>
                  <img src="/img/icon2.png" alt="" />
                </div>
                <div className="flex flex-col py-11 px-14">
                  <p className="text-center font-bold text-[40px] text-[#04141A]">
                    3.7%/năm
                  </p>
                  <p className="text-center font-normal text-base">
                    kỳ hạn 12 tháng
                  </p>
                  <div className="flex flex-col gap-8 py-10">
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Đầu tư thời gian ngắn hạn
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Lợi nhuận hấp dẫn và cố định
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Đầu tư an toàn, dễ dàng quản lý
                      </p>
                    </div>
                  </div>
                  <button
                    className={`uppercase  bg-[#48B96D] text-white text-[16px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform`}
                  >
                    mua ngay
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-lg  rounded-lg">
                <div className="border-b-2 flex flex-col justify-between items-center pt-4 px-14 h-[205px]">
                  <p className="text-2xl font-medium uppercase">Gói cao cấp</p>
                  <img src="/img/icon3.png" alt="" />
                </div>
                <div className="flex flex-col py-11 px-14">
                  <p className="text-center font-bold text-[40px] text-[#04141A]">
                    4.7%/năm
                  </p>
                  <p className="text-center font-normal text-base">
                    kỳ hạn 12 tháng
                  </p>
                  <div className="flex flex-col gap-8 py-10">
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Đầu tư thời gian ngắn hạn
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Lợi nhuận hấp dẫn và cố định
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img
                        className=" p-1 rounded-full bg-[#48B96D] w-[24px] h-[24px]"
                        src="/img/icon/check.svg"
                        alt=""
                      />
                      <p className="font-medium text-base">
                        Đầu tư an toàn, dễ dàng quản lý
                      </p>
                    </div>
                  </div>
                  <button
                    className={`uppercase  bg-[#48B96D] text-white text-[16px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform`}
                  >
                    mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <div className="flex gap-4 items-center  w-full overflow-y-auto py-8 md:px-8 ">
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
      </section>

      {/* dowwnlaod */}
        <DownloadSection/>
    </>
  );
};
export default ProductPage;
