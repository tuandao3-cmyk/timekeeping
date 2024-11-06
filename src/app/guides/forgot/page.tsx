'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const ForgotSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
        <main className=" pt-[50px] px-8 pb-[30px]  lg:px-[70px] text-black text-left font-sans ">
            <p className=" text-3xl font-bold text-[#000000]  text-left">Video hướng dẫn</p>
          
            <div className="flex justify-center  my-[50px]  ">
            
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Video hướng dẫn đầu tư HyraCap"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className=" h-[420px] w-[615px] rounded-[20px] "
            ></iframe>
          
          
        </div>
        <h1 className="text-3xl 3xl:text-4xl font-bold">Các bước thực hiện</h1>
          <h1 className="text-3xl 3xl:text-4xl  text-[#009467] py-6">Quên mật khẩu</h1>

          <p className=" text-xl 3xl:text-2xl mt-4">
          Để thực hiện lấy lại mật khẩu bạn làm theo các bước sau:
          </p>

          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] text-left">
            <li className="pl-2">
            Bước 1: Trên ứng dụng HyraCap &gt; chọn Quên mật khẩu
            </li>

            <li className="pl-2">
            Nhập Số điện thoại hoặc email đã đăng ký trên HyraCap

            </li>
          </ul>

         
          <div className="flex justify-center my-5 flex-wrap gap-10 mb-3.5 pl-5">
            <img 
              src="/img/forgot1.png" 
              alt="Màn hình đăng nhập HyraCap"
              className="w-[30%] max-w-[300px] "
            />
          </div>
          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
            <li className="">
            Bước 2: Trên ứng dụng HyraCap &gt; chọn Quên mật khẩu

            </li>
            <li className="pl-2">
            Nhập mã xác thực đã được gửi tới Số điện thoại hoặc Email
            </li>
          </ul>

          <div className="flex justify-center mt-5 flex-wrap gap-5 pl-[3vw]">
            <img
              src="/img/forgot2.png"
              alt="Màn hình nhập OTP"
              width={300}
              height={600}
              className="w-[30%] max-w-[300px] mb-3.5"
            />

          </div>
          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
            <li className="">
            Bước 3: Thực hiện nhập mật khẩu mới &gt; Nhập Xác nhận mật khẩu &gt; Bấm xác nhận

            </li>

          </ul>

          <div className="flex justify-center mt-5 flex-wrap gap-5 pl-[3vw]">
            <img
              src="/img/forgot2.png"
              alt="Màn hình nhập OTP"
              width={300}
              height={600}
              className="w-[30%] max-w-[300px] mb-3.5"
            />

          </div>


          <p className="mt-5 font-normal text-left text-xl 3xl:text-2xl">
          Như vậy, HyraCap đã thực hiện xong phần hướng dẫn đặt lại mật khẩu trên ứng dụng HyraCap.
            <br />
            Chúc Quý Khách thành công!
          </p>
        </main>

    </>
  );
};

export default ForgotSection;
