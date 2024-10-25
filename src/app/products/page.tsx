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

const ProductPage: React.FC = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });
  //

  const products = [
    {
      title: 'Đầu tư ngắn hạn',
      type: 'short',
      package: [
        {
          title: 'Gói cơ bản',
          interest_rate: '3.5%',
          descriptions: [
            'Đầu tư thời gian ngắn hạn',
            'Lợi nhuận hấp dẫn và cố định',
            'Đầu tư an toàn, dễ dàng quản lý',
          ],
          term: '3 tháng',
          image: <PiggyBankIcon />,
        },
        {
          title: 'Gói nâng cao',
          interest_rate: '3.7%',
          descriptions: [
            'Đầu tư thời gian ngắn hạn',
            'Lợi nhuận hấp dẫn và cố định',
            'Đầu tư an toàn, dễ dàng quản lý',
          ],
          term: '6 tháng',
          image: <MoneyIcon />,
        },
        {
          title: 'Gói cao cấp',
          interest_rate: '4.8%',
          descriptions: [
            'Đầu tư thời gian ngắn hạn',
            'Lợi nhuận hấp dẫn và cố định',
            'Đầu tư an toàn, dễ dàng quản lý',
          ],
          term: '12 tháng',
          image: <ProfitIcon />,
        },
      ],
    },
    {
      title: 'Đầu tư dài hạn',
      type: 'long',
      package: [
        {
          title: 'Gói cơ bản',
          interest_rate: '3.5%',
          descriptions: [
            'Đầu tư thời gian ngắn hạn',
            'Lợi nhuận hấp dẫn và cố định',
            'Đầu tư an toàn, dễ dàng quản lý',
          ],
          term: '3 tháng',
          image: <PiggyBankIcon />,
        },
        {
          title: 'Gói nâng cao',
          interest_rate: '3.7%',
          descriptions: [
            'Đầu tư thời gian ngắn hạn',
            'Lợi nhuận hấp dẫn và cố định',
            'Đầu tư an toàn, dễ dàng quản lý',
          ],
          term: '6 tháng',
          image: <MoneyIcon />,
        },
        {
          title: 'Gói cao cấp',
          interest_rate: '4.8%',
          descriptions: [
            'Đầu tư thời gian ngắn hạn',
            'Lợi nhuận hấp dẫn và cố định',
            'Đầu tư an toàn, dễ dàng quản lý',
          ],
          term: '12 tháng',
          image: <ProfitIcon />,
        },
      ],
    },
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

  return (
    <>
      <section
        ref={ref}
        className={`relative w-full h-auto bg-cover bg-center px-[120px] duration-700 ease-in-out transform ${
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-70'
        }`}
        style={{ backgroundImage: 'url("/img/productbg.png")' }}
      >
        <div className="flex justify-start max-w-[50%] px-5 pt-[20%] pb-5">
          <div className="flex flex-col justify-center items-left text-left gap-6">
            <h1
              ref={ref}
              className={`text-white font-bold md:text-[35px]  text-xl duration-700 ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Sản phẩm đầu tư tại HyraCap
            </h1>
            <p
              ref={ref}
              className={`text-white text-left text-[11px]  md:text-[25px] duration-700 delay-300 ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Chúng tôi cung cấp các gói sản phẩm đầu tư phù hợp với từng nhu
              cầu của khách hàng.
            </p>
            <button
              ref={ref}
              className={`mt-4 px-4 py-2 bg-[#48B96D] text-white rounded-[30px] hover:bg-[#2d834a] max-w-[250px] transition-shadow  duration-700 delay-1000 ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
            >
              Đăng kí ngay!
            </button>
          </div>
        </div>
      </section>

      {/* Các gói đầu tư */}
      <section className="w-full h-auto bg-white py-6 flex flex-col justify-center items-center px-[120px]">
        <h1
          ref={ref}
          className={`text-black font-bold text-2xl md:text-4xl text-center `}
        >
          Các gói đầu tư tại HyraCap{' '}
        </h1>
        {products.map((product: (typeof products)[0], index) => (
          <div
            className="w-full h-auto bg-white px-1 flex flex-col justify-center items-left"
            key={index}
          >
            <h2
              className={`text-black px-4 font-bold text-2xl md:text-3xl text-left md:text-[35px] text-[20px] duration-300 `}
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
      <section className="w-full h-auto bg-white py-6 flex flex-col-reverse md:flex-row gap-4 justify-center items-center px-[120px]">
        <div className="px-8 flex flex-col gap-2 justify-center items-center">
          <h1 className="text-black font-bold text-2xl md:text-4xl text-center">
            Trải nghiệm ngay ứng dụng đầu tư HyraCap
          </h1>
          <p className="text-[#009467] text-center text-[11px]  md:text-[25px]">
            Quét mã QR tại đây!
          </p>
          <img
            src="/img/qrcode.png"
            alt="qr code"
            className="max-w-[200px] max-h-[200px]"
          />
          <div className="flex justify-center  flex-grow gap-4 w-full">
            <a
              href="https://www.apple.com/app-store/"
              className="px-2 flex-grow py-2 bg-black md:max-w-[250px] text-white rounded-lg  hover:bg-gray-800 flex items-center justify-center space-x-2 w-full md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/icon/apic2.png"
                alt="App Store"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <div>
                <p className="text-[10px] font-thin md:text-xs ">
                  Download on the
                </p>
                <h3 className="text-[14px] font-bold md:text-xs">App Store</h3>
              </div>
            </a>

            <a
              href="https://play.google.com/store"
              className="px-4 flex-grow py-2 bg-green-600 md:max-w-[250px] text-white rounded-lg  hover:bg-green-700 flex items-center justify-center space-x-2 w-full md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/icon/ggpl2.png"
                alt="Google Play"
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <div>
                <p className="text-[10px] font-thin md:text-xs">Get it on</p>
                <h3 className="text-[14px] font-bold md:text-xs">
                  Google Play
                </h3>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-grow ">
          <img src="/img/product/product_image.png" alt="image" className="" />
        </div>
      </section>
    </>
  );
};
export default ProductPage;
