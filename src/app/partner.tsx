import React from 'react';
import styles from './Partner.module.css';

const ProjectGrid: React.FC = () => {
  return (
    <>
      <div className={styles.logoSection}>
        <img
          src="/img/icon/coop1.png"
          alt="Pindias"
          className={styles.partnerLogo}
        />
        <img
          src="/img/icon/coop2.png"
          alt="Vitala"
          className={styles.partnerLogo}
        />
        <img
          src="/img/icon/coop3.png"
          alt="Pencil"
          className={styles.partnerLogo}
          style={{
            width: '200px',
          }}
        />
        <img
          src="/img/icon/coop4.png"
          alt="Qualcomm"
          className={styles.partnerLogo}
        />
        <img
          src="/img/icon/coop5.png"
          alt="Qualcomm"
          className={styles.partnerLogo}
        />
      </div>
    </>
  );
};

export default ProjectGrid;
