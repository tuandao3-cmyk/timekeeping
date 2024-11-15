'use client';

import Image from 'next/image';
import React from 'react';

import { FiSearch } from 'react-icons/fi';

const DownloadSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#78ca94] to-[#2a7082] text-white text-center py-10 px-5 mt-10">
      <h2 className="text-2xl mb-2.5">
        Trải nghiệm ngay nền tảng đầu tư HyraCap
      </h2>
      <p className="text-[35px] font-normal font-inter mb-5">
        Đầu tư dễ dàng - Sinh lời vững vàng
      </p>

      <div className="mb-5">
        <p className="text-2xl mb-2.5">Quét mã QR tại đây!</p>
        <Image
          width={150}
          height={150}
          src="/img/qrcode.png"
          alt="QR Code"
          className="mx-auto w-[150px] h-[150px]"
          layout="responsive"
        />
      </div>

      <div className="flex justify-center gap-5">
        <a
          href="https://play.google.com/store/apps/details?id=com.hyracap"
          className="flex items-center bg-white text-[#333333] px-5 py-2.5 rounded font-bold no-underline"
        >
          <Image
            width={24}
            height={24}
            src="/img/icon/ggpl.png"
            alt="Google Play"
            className="w-6 h-6 mr-2.5"
            layout="responsive"
          />
          <span>
            Tải miễn phí
            <br />
            Google Play
          </span>
        </a>

        <a
          href="https://apps.apple.com/app/hyracap/id123456789"
          className="flex items-center bg-white text-[#333333] px-5 py-2.5 rounded font-bold no-underline"
        >
          <Image
            width={24}
            height={24}
            src="/img/icon/apic.png"
            alt="App Store"
            className="w-6 h-6 mr-2.5"
            layout="responsive"
          />
          <span>
            Tải miễn phí
            <br />
            App Store
          </span>
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;
