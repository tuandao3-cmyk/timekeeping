'use client';

import React from 'react';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import DownloadSection from '../downloadSection';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const LogoutSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <main className=" lg:pt-[50px] pt-0 px-8 pb-[30px]  lg:px-[70px] text-black text-left font-sans ">
        <p className=" text-3xl font-bold text-[#000000]  text-left">
          Video hướng dẫn
        </p>

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
        <h1 className="text-3xl 3xl:text-4xl  text-[#009467] py-6">
          Đăng nhập
        </h1>
        <p className=" text-xl 3xl:text-2xl mt-4">
          Để đăng nhập vào <strong>HyraCap</strong> bạn làm theo bước sau:
        </p>

        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] text-left">
          <li className="pl-2">Bước 1: Vào app HyraCap chọn “Đăng nhập”</li>

          <li className="pl-2">
            Bước 2: Điền các thông tin trên màn hình Đăng nhập bao gồm:
            <ul className=" text-xl ">
              <li className="pl-4">+ Số điện thoại</li>
              <li className="pl-4">+ hoặc Email</li>
              <li className="pl-4">+ Mật khẩu</li>
              <li className="pl-4">+ Bấm Đăng nhập</li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-start my-5 flex-wrap gap-10 mb-3.5 lg:pl-5">
          <Image
            width={284}
            height={583}
            src="/img/dnhap.png"
            alt="Màn hình đăng nhập HyraCap"
            className="lg:w-[30%] w-[100%] max-w-[300px] "
          />
        </div>
        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
          <li className="">
            Bước 3: Nhập mã xác thực OTP và bấm Tiếp tục
            <p>
              Sau khi nhập mã OTP ứng dụng hiển thị màn hình Tổng quan với popup
              giới thiệu khách hàng.
            </p>
            <p>Bạn có thể Nhập mã giới thiệu hoặc bỏ qua.</p>
            <p>
              Trên màn hình Tổng quan có thể tiếp tục sử dụng các chức năng của
              HyraCap
            </p>
          </li>
        </ul>
        {/* Phần hình ảnh cuối */}
        <div className="flex justify-start mt-5 flex-wrap gap-5 lg:pl-[3vw]">
          <Image
            src="/img/otp1.png"
            alt="Màn hình nhập OTP"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
          <Image
            src="/img/popup.png"
            alt="Màn hình popup giới thiệu"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
          <Image
            src="/img/dashboard.png"
            alt="Màn hình tổng quan"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
        </div>

        <p className="mt-5 font-normal text-left text-xl 3xl:text-2xl">
          Như vậy, HyraCap đã thực hiện xong phần hướng dẫn Đăng Nhập sử dụng
          ứng dụng HyraCap.
          <br />
          Chúc Quý Khách thành công!
        </p>
      </main>
    </>
  );
};

export default LogoutSection;
