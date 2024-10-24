'use client'
import React, { useEffect, useRef, useState } from 'react';

import styles from './page.module.css';
import Partner from '@/app/partner';
import ProjectSection from '@/app/ProjectSection';
import PressSection from '@/app/PressSection';

import Download from './download';
import News from './news';
import FeedbackSection from './FeedbackSection';

const Home: React.FC = () => {
    const rightFrameRef = useRef<HTMLDivElement>(null);
    const [isRightFrameVisible, setIsRightFrameVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsRightFrameVisible(true);
                    }
                    else {
                        setIsRightFrameVisible(false);
                    }
                });
            },
            { threshold: 0.1,
                // rootMargin: "0px 0px -10% 0px"
            }
        );

        if (rightFrameRef.current) {
            observer.observe(rightFrameRef.current);
        }

        return () => {
            if (rightFrameRef.current) {
                observer.unobserve(rightFrameRef.current);
            }
        };
    }, []);
    

    return (
        <div className={styles.container}>
            <div className="bg-[#07212C] text-white p-8 flex min-h-[90vh]">
                {/* Phần bên trái */}
                <div className="w-full md:ml-[10%]  md:w-1/2 md:max-w-[45%] px-4 md:pr-8">
                    <h1 className="font-inter font-bold pt-[20%] pb-[5%] sm:text-3xl md:leading-[56px] md:text-5xl mb-2 sm:mb-4">
                        ĐẦU TƯ THÔNG MINH SINH LỜI TUYỆT ĐỈNH
                    </h1>
                    <p className="text-base font-inter pb-[5%] sm:text-base md:max-w-[85%] mb-4 sm:mb-6 text-[#FFFFFF]/60">
                        Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn
                    </p>
                    <button className="bg-[#48B96D] text-[#ffffff] md:px-4 py-3 max-sm:px-4 rounded-full text-sm sm:text-base">
                        Tham gia cùng chúng tôi
                    </button>
                    
                    <div className="flex flex-wrap max-sm:justify-between mt-8 space-y-0 sm:space-x-4 md:space-x-4 lg:space-x-4 h-[50%]">
                        <div className="w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center">
                            <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold">$1B+</p>
                            <p className="text-[#FFFFFF]/80 sm:max-w-[60%] max-w-[100%] text-xs sm:text-sm">Tổng số đã huy động</p>
                        </div>
                        <div className="w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center">
                            <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold">50M+</p>
                            <p className="text-[#FFFFFF]/80 sm:max-w-[60%] max-w-[100%] text-xs sm:text-sm">Đã đầu tư thành công</p>
                        </div>
                        <div className="w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center">
                            <p className="text-[#48B96D] mb-4 text-xl leading-8 sm:text-2xl font-semibold">771+</p>
                            <p className="text-[#FFFFFF]/80 sm:max-w-[60%] max-w-[100%] text-xs sm:text-sm">Nhà đầu tư tham gia</p>
                        </div>
                    </div>
                </div>
                
                {/* Phần bên phải */}
                <div 
                    ref={rightFrameRef} 
                    className={`w-full md:w-1/2 min-h-[90vh] max-sm:hidden relative mt-8 md:mt-0 transition-all duration-500 ${
                        isRightFrameVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="relative w-full h-full">
                    <div className="absolute w-[80%] sm:w-[70%] md:w-[60%] h-[65%] sm:h-[70%] md:h-[65%] top-[5%] sm:top-[8%] md:top-[10%] right-[10%] md:right-[5%] mr-[20%]">
                            <img 
                                src="/img/invest.png" 
                                alt="Investment Dashboard" 
                                className=" w-full h-full rounded-[1.25rem] opacity-100 object-cover" 
                            />
                            
                            {/* Khung Hyperas */}
                            <div className="absolute w-[58%] sm:w-[50%] h-[31%] sm:h-[31%] md:h-[33%] top-[7%] sm:top-[5%] md:top-[7%] left-[-30%] sm:left-[-25%] md:left-[-25%] bg-white text-[#04141A] rounded-[1.25rem] shadow overflow-hidden flex flex-col">
                                <div className="relative h-1/2 w-full overflow-hidden bg-[#0B3546]">
                                    <img 
                                        src="/img/hyperas1.png" 
                                        alt="Hyperas Chain" 
                                        className="absolute w-full h-auto object-cover "
                                    />
                                </div>
                                <div className="h-1/2 w-full sm:p-1 flex flex-col justify-center">
                                    <p className="font-bold pl-1 text-xs leading-4 xl:leading-6 xl:text-base">HYPERAS CHAIN</p>
                                    <p className="text-[#31814B] font-inter pl-1 text-sm leading-6 sm:text-lg md:text-sm font-medium">$1,500,000</p>
                                    <p className="text-[12px] leading-5 pl-1 sm:text-xs md:text-[12px] text-[#000000]/60 mt-1">TECHNOLOGY</p>
                                </div>
                            </div>
                            
                            {/* Khung Salala */}
                            <div className="absolute w-[67%] sm:w-[58%] md:w-[66%] h-[38%] sm:h-[40%] md:h-[43%] bottom-[-15%] sm:bottom-[-18%] md:bottom-[-18%] right-[-5%] sm:right-[-4%] md:right-[-28%] bg-[#F3F7F4] rounded-[1.25rem] shadow overflow-hidden flex flex-col p-2 xl:p-3">
                                <div className="border-b-2 border-[#1C4A2B]/10 flex items-center pb-1">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 xl:w-12 xl:h-12 flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/salala.png" alt="Salala AI" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="font-bold font-inter text-[#04141A] text-sm ">SALALA AI</p>
                                        <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium">$1,500,000</p>
                                    </div>
                                </div>
                                
                                <div className="border-b-2 border-[#1C4A2B]/10 flex items-center my-1 pb-1 ">
                                    <div className=" w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/rapital.png" alt="Rapital Bank" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="font-bold font-inter text-[#04141A] text-sm sm:text-sm">RAPITAL BANK</p>
                                        <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium">$1,500,000</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center mt-1 pb-1">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/egabid.png" alt="Egabid" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="font-bold font-inter text-[#04141A] text-sm sm:text-sm">EGABID</p>
                                        <p className="text-[#31814B] font-inter pl-1 text-sm leading-4 xl:leading-6 md:text-sm font-medium">$1,500,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chỉ số trang */}

            <Partner />
            <ProjectSection />
            <News />
            
            <FeedbackSection />
            <Download />
            <PressSection />
        </div>
    );
};

export default Home;
