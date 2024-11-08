'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const TransactionSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <>


        <main className=" lg:pt-[50px] pt-0 px-8 pb-[30px]  lg:px-[70px] text-black text-left font-sans ">
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
          <h1 className="text-3xl 3xl:text-4xl  text-[#009467] py-6">Giao dịch</h1>
          <p className=" text-xl 3xl:text-2xl mt-4">
          Để kiểm tra lịch sử giao dịch bạn làm theo các bước sau:
          </p>

          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] text-left">
            <li className="pl-2">
            Bước 1: Trên ứng dụng HyraCap &gt; vào tính năng Giao dịch
            </li>

            <li className="pl-2">
            Tại màn hình Giao dịch cho phép người dùng theo dõi và tìm kiếm gói đầu tư

            </li>
          </ul>

         
          <div className="flex justify-center my-5 flex-wrap gap-10 mb-3.5 pl-5">
            <img 
              src="/img/trans1.png" 
              alt="Màn hình đăng nhập HyraCap"
              className="lg:w-[30%] w-[100%] max-w-[300px] "
            />
          </div>
          <ul className=" text-xl 3xl:text-2xl leading-7 text-[#000000] pl-4 ">
            <li className="pl-2">
            Bước 2: Chọn vào gói đầu tư hiển thị thông tin chi tiết về gói đang đầu tư
            </li>
            <li className="pl-2">
            Bạn có thể theo dõi lợi nhuận theo dòng thời gian tại màn hình chi tiết này.
            </li>
          </ul>
          {/* Phần hình ảnh cuối */}
          <div className="flex justify-center items-center mt-5 flex-wrap gap-5 pl-[3vw]">
            <img
              src="/img/trans2.png"
              alt="Màn hình nhập OTP"
              width={300}
              height={600}
              className="lg:w-[30%] w-[100%] max-w-[300px] mb-3.5"
            />

          </div>

          <p className="mt-5 font-normal text-left text-xl 3xl:text-2xl">
          Như vậy, HyraCap đã thực hiện xong phần hướng dẫn theo dõi giao dịch đầu tư trên ứng dụng HyraCap.
            <br />
            Chúc Quý Khách thành công!
          </p>
        </main>

    </>
  );
};

export default TransactionSection;
