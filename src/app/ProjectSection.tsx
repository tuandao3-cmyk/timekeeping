'use client';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from './ProjectSection.module.css';
import ProjectGrid from '@/components/projectGrid';

const ProjectSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Hyperas Chain',
      image: '/img/hyperas_chain.png',
      badge: 'Series A',
      amount: '$3.000.000',
      progress: '75%',
      fundingAmount: '$1.500.00',
      fundingPercent: '75%',
      category: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
    },
    {
      title: 'Salala AI',
      image: '/img/salala.png',
      badge: 'Series B',
      amount: '$3.000.000',
      progress: '98%',
      fundingAmount: '$1.500.00',
      fundingPercent: '98%',
      category: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
    },

    {
      title: 'Egabid',
      image: '/img/egabid_pc.png',
      badge: 'Series A',
      amount: '$500.000',
      progress: '80%',
      fundingAmount: '$1.500.00',
      fundingPercent: '80%',
      category: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
    },
  ];

  return (
    <>
      {' '}
      <ProjectGrid />
      <section className={styles.showcaseSection}>
        <h2 className="text-center text-[40px] font-bold leading-[48px] pb-10">
          DỰ ÁN ĐÃ ĐẦU TƯ VÀ ƯƠM TẠO
        </h2>
        <div className="w-full flex justify-center items-center">
          <div className={styles.projectCards}>
            {projects.map((project, index) => (
              <a href="/detail-category" key={index}>
                <div
                  ref={ref}
                  key={index}
                  className={`${styles.projectCard} group relative duration-700 ease-in-out delay-${index * 100} transform ${
                    inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.badge}>{project.badge}</div>

                  <div className="text-left !text-left">
                    {' '}
                    {/* Sử dụng !important */}
                    <h3 className="text-[clamp(1.2rem,2vw,2.4rem)] font-bold my-2 w-full pl-4">
                      {project.title}
                    </h3>
                    <span className="text-sm text-[#000000]/70 font-normal mb-2 block pl-4 pb-2">
                      MỤC TIÊU HUY ĐỘNG
                    </span>
                    <div className="font-inter font-semibold text-xl leading-7 pl-4 pb-2">
                      {project.amount}
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <div className={styles.progress}>
                      <div
                        className={styles.progressBar}
                        style={{ width: project.progress }}
                      ></div>
                    </div>
                    <div className={styles.fundingInfo}>
                      <div>
                        <span>{project.fundingAmount}</span>
                        <span className="text-[#000000]/70 pl-0">
                          {' '}
                          Đã huy động
                        </span>
                      </div>
                      <div>
                        <span>{project.fundingPercent}</span>
                        <span className="text-[#000000]/70 pl-0">
                          {' '}
                          Hoàn thành
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {project.category.map((cat, index) => (
                        <span
                          key={index}
                          className="bg-[#000000]/10 text-[#000000]/70 font-inter leading-4 px-2 py-1  text-xs font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FFFFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="/detail-category"
                      className="bg-[#4CAF50] text-white text-sm font-medium px-6 py-2 rounded-full cursor-pointer text-center flex items-center"
                    >
                      Xem chi tiết
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <button className={styles.moreProjectsButton}>
          TÌM HIỂU THÊM CÁC DỰ ÁN{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" />
          </svg>
        </button>
      </section>
    </>
  );
};

export default ProjectSection;
