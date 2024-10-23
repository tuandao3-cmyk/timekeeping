import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaFlag } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: 'HYPERAS CHAIN',
    series: 'SERIES A',
    description: 'Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/hyperas_chain.png',
    tags: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
  },
  {
    id: 2,
    name: 'EGABID',
    series: 'SERIES B',
    description: 'Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn',
    target: 2000000,
    raised: 1091591,
    percentage: 51,
    image: '/img/egabid_pc.png',
    tags: ['CÔNG NGHỆ', 'CÔNG NGHỆ'],
  },
  // Thêm các dự án khác tương tự
];

const ProjectSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">DỰ ÁN ĐANG GỌI VỐN</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div className={`bg-[#07212C] rounded-xl overflow-hidden transition-all duration-300 flex ${index === activeIndex ? 'scale-100' : 'scale-90'}`}>
              <div className="w-1/2 relative p-8">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  <a 
                  href="/project-detail" 
                  className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-center"
                >
                  Xem chi tiết 
                </a>
                </div>
              </div>
              <div className="w-1/2 p-8 flex flex-col justify-between">
                <div>
                <span className="top-4 left-4 bg-[#FFFFFF]/16 text-[#0298F4] px-2 py-1 text-xs rounded flex items-center">
                    <FaFlag className="w-4 h-4 mr-1" />
                  {project.series}
                </span>
                  <h3 className="text-2xl font-semibold leading-8 text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 leading-6 text-sm mb-4">{project.description}</p>
                </div>
                <div>
                  <div className="bg-white rounded-lg p-5 m-3 mb-7">
                    <p className="text-sm font-inter text-[#000000]/64 mb-1">MỤC TIÊU HUY ĐỘNG</p>
                    <p className="text-xl leading-6 font-semibold">${project.target.toLocaleString()}</p>
                    <div className="flex justify-between text-xs mt-2">
                      <div><span className="font-bold font-inter text-green-500 text-sm">${project.raised.toLocaleString()}</span><span className='text-[#000000]/64 pl-0'> Đã huy động</span></div>
                      <div><span className="font-bold font-inter text-green-500 text-sm">{project.percentage}%</span><span className='text-[#000000]/64 pl-0'> Hoàn thành</span></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${project.percentage}%` }}></div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-3">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-700 text-white text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;