import React from 'react';
import styles from './Partner.module.css';
import Marquee from 'react-fast-marquee';


const ProjectGrid: React.FC = () => {
  return (
    <Marquee autoFill className="bg-[#F3F7F4] py-[62px]">
      <img
        src="/img/icon/coop1.png"
        alt="Pindias"
        className={`h-16 object-contain ${styles.partnerLogo}`}
      />
      <img
        src="/img/icon/coop2.png"
        alt="Vitala"
        className={`h-16 object-contain ${styles.partnerLogo}`}
      />
      <img
        src="/img/icon/coop3.png"
        alt="Pencil"
        className={`h-16 object-contain w-[200px] ${styles.partnerLogo}`}
      />
      <img
        src="/img/icon/coop4.png"
        alt="Qualcomm"
        className={`h-16 object-contain ${styles.partnerLogo}`}
      />
      <img
        src="/img/icon/coop5.png"
        alt="Certik"
        className={`h-16 object-contain ${styles.partnerLogo}`}
      />
      <img
        src="/img/icon/coop6.png"
        alt="TaiPy"
        className={`h-16 object-contain ${styles.partnerLogo}`}
      />
      <img
        src="/img/icon/coop7.png"
        alt="Eureka"
        className={`h-16 object-contain ${styles.partnerLogo}`}
      />
      <img
        src="/img/icon/coop8.png"
        alt="Corex"
        className={`h-16 object-contain ${styles.partnerLogo}`}
      />
    </Marquee>
  );
};

export default ProjectGrid;

{
  /* <img
            src="/img/icon/coop1.png"
            alt="Pindias"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          />
          <img
            src="/img/icon/coop2.png"
            alt="Vitala"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          />
          <img
            src="/img/icon/coop3.png"
            alt="Pencil"
            className={`h-16 object-contain w-[200px] ${styles.partnerLogo}`}
          />
          <img
            src="/img/icon/coop4.png"
            alt="Qualcomm"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          />
          <img
            src="/img/icon/coop5.png"
            alt="Certik"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          />
          <img
            src="/img/icon/coop6.png"
            alt="TaiPy"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          />
          <img
            src="/img/icon/coop7.png"
            alt="Eureka"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          />
          <img
            src="/img/icon/coop8.png"
            alt="Corex"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          /> */
}
