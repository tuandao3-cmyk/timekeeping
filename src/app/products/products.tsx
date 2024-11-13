'use client';

import { useInView } from 'react-intersection-observer';

import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DownloadSection from '../download';
import ProjectItem from '@/components/projectItem/projectItem';
import LongTermSection from './long-term/page';
import ShortTermSection from './short-term/page';

interface ProductProps {
  projectData: any;
}

const Product = (props: ProductProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([
    {
      title: 'Có thể bạn quan tâm',
      type: 'flexible',
      package: [...props.projectData],
    },
  ]);

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 4,
    seconds: 5,
  });

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
        className="min-h-[620px] w-full flex flex-col justify-start items-center relative font-sans bg-cover bg-center "
      >
        <div className="flex justify-center items-center w-full max-w-[1440px]">
          <div className="flex flex-col gap-6 w-full mt-16 md:gap-4 lg:gap-8 ">
            <p
              ref={ref2}
              className={`text-[35px] sm:text-[40px] lg:text-[40px] text-center text-white font-bold uppercase duration-700 ease-in-out transform ${
                inView2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Sản phẩm đầu tư tại HyraCap
            </p>
            <p
              ref={ref2}
              className={`text-[16px]  xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] px-1 text-center text-[#ffffff]/70 duration-700 ease-in-out transform ${
                inView2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Chúng tôi cung cấp các gói sản phẩm đầu tư phù hợp với từng nhu
              cầu của khách hàng.
            </p>

            <div className="flex w-full justify-center items-start gap-[24px]">
              <button
                ref={ref2}
                onClick={() => setActiveSection('short-term')}
                className={`hover:bg-[#48B96D] text-white text-[16px] px-[20px] py-[14px] rounded-[999px] text-center transition-all duration-300 delay-200 ease-in-out transform ${
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
                className={`hover:bg-[#48B96D] text-white text-[16px] px-[20px] py-[14px] rounded-[999px] text-center transition-all duration-300 delay-500 ease-in-out transform ${
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
      </div>

      {/* Các gói đầu tư */}
      <section className="w-full h-auto mt-[1420px] sm:mt-[250px] md:mt-[250px] md:px-[120px] lg:mt-[350px] lg bg-white py-2 xl:py-6 flex flex-col justify-center items-center xl:px-[120px] ">
        <div className="w-full flex justify-center items-center max-w-[1440px]">
          {products.map((product: (typeof products)[0], index) => (
            <div
              className="w-full h-auto bg-white px-1 flex flex-col justify-center items-left"
              key={index}
            >
              <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                px={'20px'}
              >
                <Typography
                  className="cursor-pointer"
                  fontFamily={'Inter'}
                  fontWeight={700}
                  fontSize={{
                    xs: '28px',
                    sm: '32px',
                  }}
                  lineHeight={'40px'}
                  letterSpacing={'-1%'}
                  color="#000000"
                >
                  {product.title}
                </Typography>
                <Button
                  sx={{
                    color: '#31814B',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textTransform: 'none',
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                  onClick={() => router.push(`/categories`)}
                >
                  Xem thêm
                </Button>
              </Stack>
              <div className="flex md:flex-row flex-col gap-[24px] items-center  w-full  justify-center py-5  scrollbar-none ">
                {product?.package?.map((packageItem: any, index: number) => (
                  <ProjectItem
                    key={index}
                    capital_raising_target={packageItem.capital_raising_target}
                    images={packageItem.images}
                    mobilized_fund={packageItem.mobilized_fund}
                    id={packageItem.id}
                    industries={packageItem.industries}
                    name={packageItem.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="border-[#0000003D] border-[1px] rounded-[999px] py-[8px] px-[12px] font-[500] text-[16px] text-black text-opacity-90 hover:bg-[#48B96D] hover:text-white transform ease-in-out duration-100 hover:border-transparent sm:hidden">
          Tìm hiểu thêm các dự án &gt;
        </button>

        <button
          onClick={() => router.push(`/categories`)}
          className="hidden sm:inline border-[#0000003D] border-[1px] rounded-[999px] py-[14px] px-[16px] font-[500] text-[16px] text-black text-opacity-90 hover:bg-[#48B96D] hover:text-white transform ease-in-out duration-100 hover:border-transparent"
        >
          Tìm hiểu thêm các dự án &gt;
        </button>
      </section>

      {/* dowwnlaod */}
      <DownloadSection />
    </>
  );
};
export default Product;
