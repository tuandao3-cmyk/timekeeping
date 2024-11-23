import React from 'react';
import styles from './Partner.module.css';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const ProjectGrid: React.FC = () => {
  return (
    <Marquee autoFill className="flex items-center bg-[#F3F7F4] py-[62px]">
      <Image
        width={257}
        height={82}
        src="/img/icon/coop1.png"
        // layout="responsive"
        alt="Pindias"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />
      <Image
        width={257}
        height={82}
        src="/img/icon/coop2.png"
        // layout="responsive"
        alt="Vitala"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />

      <Image
        width={257}
        height={82}
        src="/img/icon/coop4.png"
        // layout="responsive"
        alt="Qualcomm"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />
      <Image
        width={257}
        height={82}
        src="/img/icon/coop5.png"
        // layout="responsive"
        alt="Certik"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />
      <Image
        width={257}
        height={82}
        src="/img/icon/coop6.png"
        // layout="responsive"
        alt="TaiPy"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />
        <Image
        width={257}
        height={82}
        src="/img/icon/coop3.png"
        // layout="responsive"
        alt="Pencil"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />
      <Image
        width={257}
        height={82}
        src="/img/icon/coop7.png"
        // layout="responsive"
        alt="Eureka"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />
      <Image
        width={257}
        height={82}
        src="/img/icon/coop8.png"
        // layout="responsive"
        alt="Corex"
        className={`h-16 object-contain w-auto max-w-[200px] px-4`}
      />
    </Marquee>
  );
};

export default ProjectGrid;
