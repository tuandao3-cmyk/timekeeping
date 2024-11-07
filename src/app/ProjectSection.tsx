'use client';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from './ProjectSection.module.css';
import ProjectGrid from '@/components/projectGrid';

const ProjectSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
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
    {
      title: 'Salala AI',
      image: '/img/Salala.png',
      badge: 'Series B',
      amount: '$3.000.000',
      progress: '98%',
      fundingAmount: '$1.500.00',
      fundingPercent: '98%',
      category: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
    },
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
  ];

  return (
    <>
      {' '}
      <ProjectGrid />
      <section
        className={`${styles.showcaseSection} flex flex-col justify-center items-center bg-[#FFFFFF]`}
      >
        <div
          ref={ref}
          className="flex flex-col justify-center items-center max-w-screen-xl w-full"
        >
          <h2 className="text-center text-[28px] md:text-[38px] font-bold leading-[36px] md:leading-[48px] pb-10 uppercase font-sans">
            DỰ ÁN ĐÃ ĐẦU TƯ VÀ ƯƠM TẠO
          </h2>
          <div className="w-full flex justify-center items-center max-w-[1440px]">
            <div className="4xl:max-w-[2100px]   3xl:max-w-[1600px] 2xl:max-w-[1400px] 4xl:gap-16 3xl:gap-8 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-[1440px] w-full">
              {projects.map((project, index) => (
                <a
                  href={`/detail-category/${project.title}`}
                  key={index}
                  className="flex flex-col justify-center items-center flex-grow"
                >
                  <div
                    key={index}
                    className={`${styles.projectCard} group relative duration-300 ease-in-out delay-${index * 100} transform ${
                      inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    } max-w-[384px]
                    
                    `}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={` h-[250px] w-[351px]`}
                    />
                    {/* <div className={`${styles.badge} font-sans`}>{project.badge}</div> */}

                    <div className="text-left !text-left">
                      {' '}
                      {/* Sử dụng !important */}
                      <h3 className="md:text-[clamp(1.2rem,2vw,2.4rem)] text-[24px] font-bold my-2 w-full pl-4 font-sans uppercase">
                        {project.title}
                      </h3>
                      <span className="text-sm text-[#000000]/70 font-normal mb-2 block pl-4 pb-2 font-sans">
                        MỤC TIÊU HUY ĐỘNG
                      </span>
                      <div className="font-inter font-semibold text-xl leading-7 pl-4 pb-2 font-sans">
                        {project.amount}
                      </div>
                    </div>
                    <div className={styles.projectInfo}>
                      <div className={styles.progress}>
                        <div
                          className="bg-[#4caf50] h-full rounded"
                          style={{ width: project.progress }}
                        ></div>
                      </div>
                      <div className={styles.fundingInfo}>
                        <div>
                          <span>{project.fundingAmount}</span>
                          <span className="text-[#000000]/70 pl-0 font-sans">
                            {' '}
                            Đã huy động
                          </span>
                        </div>
                        <div>
                          <span>{project.fundingPercent}</span>
                          <span className="text-[#000000]/70 pl-0 font-sans">
                            {' '}
                            Hoàn thành
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        {project.category.map((cat, index) => (
                          <span
                            key={index}
                            className="bg-[#000000]/10 text-[#000000]/70 font-inter leading-4 px-2 py-1  text-xs font-medium font-sans"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FFFFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                      <a
                        href="/detail-category"
                        className="bg-[#4CAF50] w-full font-sans text-white text-sm font-medium  py-2 rounded-full cursor-pointer text-center justify-center flex items-center"
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
          <a
            href="/categories"
            className={`${styles.moreProjectsButton} font-sans`}
          >
            Tìm hiểu thêm các dự án{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
