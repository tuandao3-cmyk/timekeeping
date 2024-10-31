'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const SigninSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <>


<main className=" pt-[50px] pl-[70px] text-black text-left font-roboto">
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
          <h1 className=" text-3xl 3xl:text-4xl font-bold ">Các bước thực hiện</h1>
          <h1 className="text-3xl 3xl:text-4xl  text-[#009467] py-6">Đăng ký</h1>
          
          <p className=" text-xl 3xl:text-2xl ">
            Để đăng ký đầu tư vào <strong>HyraCap</strong> bạn làm theo bước sau:
          </p>

          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] text-left">
            <li className="pl-2">
              Bước 1: Trên điện thoại vào vào <strong>Appstore</strong> hoặc{' '}
              <strong>Google Play</strong>
            </li>
            <li className="pl-2">Bước 2: Tải app HyraCap về điện thoại của bạn.</li>
            <li className="pl-2">Bước 3: Vào app HyraCap chọn "Đăng ký"</li>
            <li className="pl-2">
              Bước 4: Điền các thông tin trên màn hình Đăng ký mở tài khoản HyraCap bao gồm:
              <ul className=" text-xl list-disc list-inside">
                <li className="pl-4 marker:text-black"> Số điện thoại</li>
                <li className="pl-4 marker:text-black"> Email</li>
                <li className="pl-4 marker:text-black"> Mật khẩu</li>
                <li className="pl-4 marker:text-black"> Nhập lại mật khẩu</li>
                <li className="pl-4 marker:text-black"> Bấm Đăng ký</li>
              </ul>
            </li>
          </ul>

          <div className="flex justify-start my-5 flex-wrap gap-10 pl-5 mb-4">
            <img className="w-[30%] max-w-[300px] " src="/img/dky1.png" alt="Màn hình đăng ký HyraCap 1" />
            <img className="w-[30%] max-w-[300px] " src="/img/dky2.png" alt="Màn hình đăng ký HyraCap 2" />
          </div>

          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
            <li className="">
              Bước 5: Nhập mã xác thực OTP và bấm Tiếp tục
              <p >
                Sau khi nhập mã OTP ứng dụng hiển thị màn hình Tổng quan với popup giới thiệu khách hàng. 
                
              </p>
              <p>Bạn có thể Nhập mã giới thiệu hoặc bỏ qua.</p>
              <p >
                Trên màn hình Tổng quan có thể tiếp tục sử dụng các chức năng của HyraCap
              </p>
            </li>
          </ul>

          <div className="flex justify-start mt-5 flex-wrap gap-5  pl-5">
            <img className="w-[30%] max-w-[300px] " src="/img/otp1.png" alt="Màn hình nhập OTP" />
            <img className="w-[30%] max-w-[300px] " src="/img/popup.png" alt="Màn hình popup giới thiệu" />
            <img className="w-[30%] max-w-[300px] " src="/img/dashboard.png" alt="Màn hình tổng quan" />
          </div>

          <p className="mt-5 font-normal text-left text-xl 3xl:text-2xl">
            Như vậy, HyraCap đã thực hiện xong phần hướng dẫn Đăng ký sử dụng ứng dụng HyraCap.
            <br />
            Chúc Quý Khách thành công!
          </p>
        </main>

    </>
  );
};

export default SigninSection;
