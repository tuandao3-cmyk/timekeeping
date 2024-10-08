import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
        <>
            <section className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Dự án đã đầu tư & ươm tạo</h2>
      <p className={styles.sectionSubtitle}>Dành cho bạn những dự án đầu tư tốt nhất</p>
      <div className={styles.projectGrid}>
        <div className={`${styles.projectCard} ${styles.mainProject}`}>
          <img src="/img/11.jpg" alt="Salala Mini Bot" />
        </div>
        <div className={styles.smallProjects}>
          <div className={styles.smallProject}>
            <img src="/img/13.jpg" alt="Hyra Wallet" />
          </div>
          <div className={styles.smallProject}>
            <img src="/img/14.jpg" alt="Salala Edge Computing" />
          </div>
          <div className={styles.smallProject}>
            <img src="/img/15.jpg" alt="Shop Illustration" />
          </div>
        </div>
      </div>

    </section>
    <section className={styles.showcaseSection}>
          <h2 className={styles.title}>Các dự án đang gọi vốn tại HyraCap</h2>
          <p className={styles.subtitle}>Dành cho bạn những dự án đầu tư tốt nhất</p>
          <div className={styles.imageContainer}>
            <img 
              src="/img/goivon.jpg" 
              alt="AI and Blockchain Showcase" 
              className={styles.showcaseImage}
            />
          </div>
    </section>
    </>
    

  );
};

export default ProjectSection;