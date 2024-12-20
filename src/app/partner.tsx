import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const ProjectGrid: React.FC = () => {
  return (
    <>
      <Marquee
        autoFill
        className="!hidden md:!flex items-center bg-[#F3F7F4] py-[40px] lg:py-[62px]"
      >
        <Image
          width={257}
          height={82}
          src="/img/icon/coop1.png"
          // layout="responsive"
          alt="Pindias"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />
        <Image
          width={257}
          height={82}
          src="/img/icon/coop2.png"
          // layout="responsive"
          alt="Vitala"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />

        <Image
          width={257}
          height={82}
          src="/img/icon/coop4.png"
          // layout="responsive"
          alt="Qualcomm"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />
        <Image
          width={257}
          height={82}
          src="/img/icon/coop5.png"
          // layout="responsive"
          alt="Certik"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />
        <Image
          width={257}
          height={82}
          src="/img/icon/coop6.png"
          // layout="responsive"
          alt="TaiPy"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />
        <Image
          width={257}
          height={82}
          src="/img/icon/coop3.png"
          // layout="responsive"
          alt="Pencil"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />
        <Image
          width={257}
          height={82}
          src="/img/icon/coop7.png"
          // layout="responsive"
          alt="Eureka"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />
        <Image
          width={257}
          height={82}
          src="/img/icon/coop8.png"
          // layout="responsive"
          alt="Corex"
          className={`h-16 object-contain w-auto max-w-[224px] lg:max-w-[300px] px-[20px] lg:px-[50px]`}
        />
      </Marquee>
      <div className="md:hidden grid grid-cols-2 items-center justify-items-center grid-rows-5 gap-y-4  bg-[#F3F7F4] py-[40px] px-[12px] gap-x-2  ">
        <h2 className="m-0 col-span-2 lg:text-[48px]/[56px] text-[32px]/[40px] tracking-[-0.32px] lg:tracking-[-0.96px] px-16 uppercase text-[#04141A] font-bold aos-init aos-animate">
          Đối tác
        </h2>
        <a
          data-aos="zoom-out"
          href="https://pindias.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={257}
            height={82}
            quality={100}
            src="/img/icon/coop1.png"
            alt="Pindias"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg  hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto px-[20px] aos-init aos-animate"
          />
        </a>

        <a
          href="https://www.qualcomm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={257}
            height={82}
            src="/img/icon/coop4.png"
            alt="Qualcomm"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg  hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto px-[20px] aos-init aos-animate"
          />
        </a>
        <a
          href="https://vitalaretail.vn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={257}
            height={82}
            src="/img/icon/coop2.png"
            alt="Vitala"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg  hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto px-[20px] aos-init aos-animate"
          />
        </a>
        <a
          href="https://www.certik.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={257}
            height={82}
            src="/img/icon/coop5.png"
            alt="Certik"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg  hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto px-[20px] aos-init aos-animate"
          />
        </a>
        <a href="https://pencil.vn/" target="_blank" rel="noopener noreferrer">
          <Image
            width={257}
            height={82}
            src="/img/icon/coop3.png"
            alt="Pencil"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg  hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto py-2 px-[20px] aos-init aos-animate"
          />
        </a>
        <a href="https://taipy.io" target="_blank" rel="noopener noreferrer">
          <Image
            width={257}
            height={82}
            src="/img/icon/coop6.png"
            alt="TaiPy"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg  hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto px-[20px] aos-init aos-animate"
          />
        </a>
        <a
          href="https://www.eurekainternational.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={257}
            height={82}
            src="/img/icon/coop7.png"
            alt="Eureka"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg  hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto py-1 px-[20px] aos-init aos-animate"
          />
        </a>

        <a
          href="https://corex.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={257}
            height={82}
            src="/img/icon/coop8.png"
            alt="Corex"
            data-aos="fade-up"
            className="h-16 object-contain bg-white rounded-lg shadow-lg hover:backdrop-blur-[1px] hover:border-1 hover:border-[#f542ec] w-[200px] sm:w-[250px] mx-auto px-[20px] aos-init aos-animate"
          />
        </a>
      </div>
    </>
  );
};

export default ProjectGrid;
