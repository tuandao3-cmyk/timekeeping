'use client'
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
      category: ['CÔNG NGHỆ', 'CÔNG NGHỆ']
    },
    {
      title: 'Salala AI',
      image: '/img/salala.png',
      badge: 'Series B',
      amount: '$3.000.000',
      progress: '98%',
      fundingAmount: '$1.500.00',
      fundingPercent: '98%',
      category: ['CÔNG NGHỆ', 'CÔNG NGHỆ']
    },

    {
      title: 'Egabid',
      image: '/img/egabid_pc.png',
      badge: 'Series A',
      amount: '$500.000',
      progress: '80%',
      fundingAmount: '$1.500.00',
      fundingPercent: '80%',
      category: ['CÔNG NGHỆ', 'CÔNG NGHỆ']
    },
  ];

  return (
    <>
      {' '}
      <ProjectGrid /> 
      <section className=" p-8 bg-[#f3f7f4] text-center">
        <h2 className="4xl:text-[72px] 4xl:leading-[80px] 4xl:mb-16 text-3xl font-bold mb-8 text-center">DỰ ÁN ĐÃ ĐẦU TƯ VÀ ƯƠM TẠO</h2>
        <div className="w-full flex justify-center items-center">
          <div className="4xl:max-w-[2100px]  4xl:gap-16 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-[1200px] w-full">
            {projects.map((project, index) => (
                <a href='/detail-category'>
                 <div key={index} className={`${styles.projectCard} group relative 4xl:min-h-[800px]`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="4xl:max-h-[400px] w-full max-h-[200px] h-[60%] object-cover"
                />
                
                <div className="text-left !text-left"> {/* Sử dụng !important */}
                <h3 className="4xl:text-[48px] 4xl:leading-[60px] 4xl:mb-4 text-[24px] leading-[30px]  font-bold my-2 w-full pl-4">
                   {project.title}
                </h3>
                <span className="4xl:text-[24px] 4xl:leading-[30px] text-sm text-[#000000]/70 font-normal mb-2 block pl-4 pb-2">
                    MỤC TIÊU HUY ĐỘNG
                </span>
                <div className="4xl:text-[36px] 4xl:leading-[40px] font-inter font-semibold text-xl leading-7 pl-4 pb-2">{project.amount}</div>
                </div>
                  <div className="4xl:pb-10 px-4 pb-4">

                    <div className="4xl:h-4 bg-[#e0e0e0] h-[5px] rounded mb-4">
                      <div
                        className="bg-[#4caf50] h-full rounded"
                        style={{ width: project.progress }}
                      ></div>
                    </div>
                    <div className="4xl:text-[30px] 4xl:leading-[35px] 4xl:mb-4 flex justify-between text-[0.9rem] mb-2 text-[#4caf50]">
                      <div><span>{project.fundingAmount}</span><span className='text-[#000000]/70 pl-0'> Đã huy động</span></div>
                      <div><span>{project.fundingPercent}</span><span className='text-[#000000]/70 pl-0'> Hoàn thành</span></div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {project.category.map((cat, index) => (
                          <span key={index} className="4xl:text-[24px] 4xl:leading-[30px] bg-[#000000]/10 text-[#000000]/70 font-inter leading-4 px-2 py-1  text-xs font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FFFFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="/detail-category" 
                    className="4xl:text-[36px] 4xl:leading-[40px] bg-[#4CAF50] text-white text-sm font-medium px-6 py-2 rounded-full cursor-pointer text-center flex items-center"
                  >
                    Xem chi tiết
                    <svg xmlns="http://www.w3.org/2000/svg" className="4xl:h-10 4xl:w-10 h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              
              </div>
                </a>
            ))}
          </div>
        </div>
        <button className="4xl:text-[36px] 4xl:leading-[40px] 4xl:px-10 4xl:py-4 4xl:mb-[80px] bg-white border-2 border-[#d8d8d8] text-black px-5 py-2.5 text-[13px] font-medium rounded-full cursor-pointer inline-flex items-center transition-all duration-300 ease-in-out hover:bg-black/10">
        Tìm hiểu thêm các dự án
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="4xl:w-10 4xl:h-10 w-4 h-4 transition-transform duration-300 ease-in-out">
    <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" />
  </svg>
</button>
      </section>
    </>
  );
};

export default ProjectSection;
