import React from 'react';
import styles from './Partner.module.css';

const ProjectGrid: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap pt-28 pb-10  bg-[#F3F7F4]">
      <div className={`inline-flex ${styles.animateSlide}`}>
        <div className="flex items-center space-x-8">
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
          {/* <img
            src="/img/icon/coop8.png"
            alt="Corex"
            className={`h-16 object-contain ${styles.partnerLogo}`}
          /> */}
        </div>
        {/* Lặp lại các biểu tượng để tạo hiệu ứng liên tục */}
        <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
