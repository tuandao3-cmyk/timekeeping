import Link from 'next/link';
import styles from './ProjectSection.module.css';
import ProjectGrid from '@/components/projectGrid';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Hyperas Chain',
      image: '/img/hyperas_chain.png',
      badge: 'Series A',
      amount: '$3.000.000',
      progress: '75%',
      fundingAmount: '$1.500.00',
      fundingPercent: '75%',
      category: 'CÔNG NGHỆ',
    },
    {
      title: 'Salala AI',
      image: '/img/salala.png',
      badge: 'Series B',
      amount: '$3.000.000',
      progress: '98%',
      fundingAmount: '$1.500.00',
      fundingPercent: '98%',
      category: 'CÔNG NGHỆ',
    },

    {
      title: 'Egabid',
      image: '/img/egabid_pc.png',
      badge: 'Series A',
      amount: '$500.000',
      progress: '80%',
      fundingAmount: '$1.500.00',
      fundingPercent: '80%',
      category: 'CÔNG NGHỆ',
    },
  ];

  return (
    <>
      {' '}
      <ProjectGrid /> 
      <section className={styles.showcaseSection}>
        <h2 className={styles.title}>Dự án đã đầu tư và ươm tạo</h2>
        <div className="w-full flex justify-center items-center">
          <div className={styles.projectCards}>
            {projects.map((project, index) => (
              <div key={index} className={`${styles.projectCard} group relative`}>
                <a href="/detail-category">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.badge}>{project.badge}</div>
                  <h3 className={styles.projectName}>{project.title}</h3>
                  <div className={styles.projectInfo}>
                    <span className="text-1xl text-[#000000]/70 font-normal mb-2 text-left">MỤC TIÊU HUY ĐỘNG</span>
                    <div className={styles.amount}>{project.amount}</div>
                    <div className={styles.progress}>
                      <div
                        className={styles.progressBar}
                        style={{ width: project.progress }}
                      ></div>
                    </div>
                    <div className={styles.fundingInfo}>
                      <div><span>{project.fundingAmount}</span><span className='text-[#000000]/70 pl-0'> Đã huy động</span></div>
                      <div><span>{project.fundingPercent}</span><span className='text-[#000000]/70 pl-0'> Hoàn thành</span></div>
                    </div>
                    <div className={styles.category}>{project.category}</div>
                  </div>
                </a>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FFFFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="/project-detail" 
                    className="bg-[#4CAF50] text-white text-sm font-medium px-6 py-2 rounded-full cursor-pointer text-center flex items-center"
                  >
                    Xem chi tiết
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.moreProjectsButton}>
          TÌM HIỂU THÊM CÁC DỰ ÁN
      
        </button>
      </section>
    </>
  );
};

export default ProjectSection;
