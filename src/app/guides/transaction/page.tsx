'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const TransactionSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <>


        <main className=" pt-[50px] pl-[70px] text-black text-left font-roboto ">
            <p className=" text-3xl font-bold text-[#000000]  text-left">Video hướng dẫn</p>
          
            <div className="flex justify-center  my-[50px]  ">
            
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Video hướng dẫn đầu tư HyraCap"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className=" lg:h-[420px] lg:w-[615px] rounded-[20px] "
            ></iframe>
          
          
        </div>
        <h1 className="text-3xl 3xl:text-4xl font-bold">Các bước thực hiện</h1>
          <h1 className="text-3xl 3xl:text-4xl  text-[#009467] py-6">Thực hiện đầu tư</h1>
          <p className=" text-xl 3xl:text-2xl mt-4">
          Để đầu tư bạn làm theo các bước sau:
          </p>

          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] text-left">
            <li className="pl-2">
            Bước 1: Trên ứng dụng HyraCap &gt; vào tính năng <strong>Sản phẩm</strong>
            </li>

            <li className="pl-2">
            Bước 2: Chọn gói sản phẩm đầu tư phù hợp

            </li>
          </ul>

         
          <div className="flex justify-center my-5 flex-wrap gap-10 mb-3.5 pl-5">
            <img 
              src="/img/product1.png" 
              alt="Màn hình đăng nhập HyraCap"
              className="w-[30%] max-w-[300px] "
            />
          </div>
          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
            <li className="pl-2">
            Bước 3: Điền thông tin vào gói đầu tư đã chọn bao gồm:
              <ul className=" text-xl list-disc list-inside">
                <li className="pl-4 marker:text-black"> Số tiền đầu tư</li>
                <li className="pl-4 marker:text-black"> Chọn kỳ hạn</li>
                <li className="pl-4 marker:text-black"> Chọn Nhân viên tư vấn</li>
              </ul>
            </li>
            Hệ thống sẽ tự động tính lãi suất  từng quý dựa trên số tiền đầu tư và kỳ hạn bạn chọn
          </ul>
          {/* Phần hình ảnh cuối */}
          <div className="flex justify-start mt-5 flex-wrap gap-5 pl-[3vw]">
            <img
              src="/img/otp1.png"
              alt="Màn hình nhập OTP"
              width={300}
              height={600}
              className="w-[30%] max-w-[300px] mb-3.5"
            />
            <img
              src="/img/popup.png"
              alt="Màn hình popup giới thiệu"
              width={300}
              height={600}
              className="w-[30%] max-w-[300px] mb-3.5"
            />
            <img
              src="/img/dashboard.png"
              alt="Màn hình tổng quan"
              width={300}
              height={600}
              className="w-[30%] max-w-[300px] mb-3.5"
            />
          </div>

          <p className="mt-5 font-normal text-left text-xl 3xl:text-2xl">
            Như vậy, HyraCap đã thực hiện xong phần hướng dẫn Đăng Nhập sử dụng ứng dụng HyraCap.
            <br />
            Chúc Quý Khách thành công!
          </p>
        </main>

    </>
  );
};

export default TransactionSection;
