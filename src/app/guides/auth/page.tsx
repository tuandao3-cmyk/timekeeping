'use client';

import React from 'react';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import DownloadSection from '../downloadSection';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const AuthSection: React.FC = () => {
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
          Xác thực eKYC
        </h1>
        <p className=" text-xl 3xl:text-2xl mt-4">
          Để xác thực eKYC bạn làm theo bước sau:
        </p>

        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] text-left">
          <li className="pl-2">
            Bước 1: Trên ứng dụng HyraCap &gt; vào tính năng{' '}
            <strong>Tài khoản</strong> &gt; chọn <strong>Chưa xác thực</strong>
          </li>

          <li className="pl-2">Bước 2: Đọc hướng dẫn chụp ảnh CCCD gắn chíp</li>
          <li className="pl-2">
            <em>Lưu ý:</em>
            <ul className=" text-xl list-disc list-inside">
              <li className="pl-4 marker:text-black">
                {' '}
                <em>Giấy tờ còn hạn sử dụng, là hình gốc</em>
              </li>
              <li className="pl-4 marker:text-black">
                {' '}
                <em>Không scan và photocopy</em>
              </li>
              <li className="pl-4 marker:text-black">
                {' '}
                <em>Đặt giấy tờ trên mặt phẳng</em>
              </li>
              <li className="pl-4 marker:text-black">
                {' '}
                <em>Đảm bảo ảnh rõ nét, không bị mờ lóa</em>
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-center my-5 flex-wrap gap-10 mb-3.5 lg:pl-5">
          <Image
            width={231}
            height={473}
            src="/img/cccd1.png"
            alt="Màn hình chụp ảnh CCCD"
            className="lg:w-[30%] w-[100%] max-w-[300px] "
          />
          <Image
            width={231}
            height={473}
            src="/img/cccd2.png"
            alt="Màn hình chụp ảnh CCCD"
            className="lg:w-[30%] w-[100%] max-w-[300px] "
          />
        </div>
        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
          <li className=" py-1">Bước 3: Chụp mặt trước</li>
          <li className=" py-1">Bước 4: Chụp mặt sau</li>
        </ul>
        {/* Phần hình ảnh cuối */}
        <div className="flex justify-center mt-5 flex-wrap gap-5 lg:pl-[3vw]">
          <Image
            src="/img/mattruoc.png"
            alt="Màn hình chụp mặt trước"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
          <Image
            src="/img/mattruoc.png"
            alt="Màn hình chụp mặt sau"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
        </div>
        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 py-8 ">
          <li className="">
            Bước 5: Kiểm tra và chỉnh sửa thông tin nếu chưa chính xác bạn có
            thể bổ sung các thông tin còn thiếu
          </li>
        </ul>
        {/* Phần hình ảnh cuối */}
        <div className="flex justify-center mt-5 flex-wrap gap-5 lg:pl-[3vw]">
          <Image
            src="/img/ekyctt.png"
            alt="Màn hình ekyc"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
        </div>
        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
          <li className="">Bước 6: Đọc hướng dẫn xác thực khuôn mặt</li>
        </ul>
        {/* Phần hình ảnh cuối */}
        <div className="flex justify-center mt-5 flex-wrap gap-5 lg:pl-[3vw]">
          <Image
            src="/img/ekyctt1.png"
            alt="Màn hình ekyc"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
        </div>
        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
          <li className="">Bước 7: Thực hiện xác thực khuôn mặt</li>
        </ul>
        {/* Phần hình ảnh cuối */}
        <div className="flex justify-center mt-5 flex-wrap gap-5 lg:pl-[3vw]">
          <Image
            src="/img/ekyctt2.png"
            alt="Màn hình ekyc"
            width={1200}
            height={600}
            className="lg:w-[100%] w-[100%] max-w-[1200px] mb-3.5"
          />
        </div>
        <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
          <li className="">
            Sau khi hoàn tất quá trình xác thực ứng dụng hiển thị thông báo Xác
            thực tài khoản thành công
          </li>
        </ul>
        {/* Phần hình ảnh cuối */}
        <div className="flex justify-center mt-5 flex-wrap gap-5 lg:pl-[3vw]">
          <Image
            src="/img/ekycend.png"
            alt="Màn hình ekyc"
            width={300}
            height={600}
            className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
          />
        </div>

        <p className="mt-5 font-normal text-left text-xl 3xl:text-2xl">
          Như vậy, HyraCap đã thực hiện xong phần hướng dẫn xác thực tài khoản
          để sử dụng ứng dụng HyraCap.
          <br />
          Chúc Quý Khách thành công!
        </p>
      </main>
    </>
  );
};

export default AuthSection;
