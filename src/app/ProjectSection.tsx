import Link from 'next/link';
import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
        <>           
        <section className={styles.showcaseSection}>
        <h2 className={styles.title}>Dự án đang gọi vốn</h2>
        <div className={styles.projectCards}>
          <div className={styles.projectCard}>
            <Link href="/productdetail"><img src="/img/19.jpg" alt="Hyperas Chain" className={styles.projectImage} /></Link>
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$3.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Link href="/productdetail"><img src="/img/18.jpg" alt="Hyperas Chain" className={styles.projectImage} /></Link>
            <div className={styles.badge}>Series B</div>
            <h3 className={styles.projectName}>Salala AI</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$3.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '98%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 98%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Link href="/productdetail"><img src="/img/16.jpg" alt="Hyperas Chain" className={styles.projectImage} /></Link>
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Rapital Bank</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$1.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <Link href="/productdetail"><img src="/img/17.jpg" alt="Hyperas Chain" className={styles.projectImage} /></Link>
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Egabid</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$500.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '80%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 80%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          {/* Repeat similar structure for Salala AI, Rapital Bank, and Egabid */}
        </div>
        <button className={styles.moreProjectsButton}>TÌM HIỂU THÊM CÁC DỰ ÁN</button>
      </section>

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

    </>
    

  );
};

export default ProjectSection;