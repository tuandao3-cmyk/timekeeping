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
                rootMargin: "0px 0px -10% 0px"
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
                <div className="w-full pl-[5%] max-w-[42%] md:w-1/2 px-4 md:pr-8">
                    <h1 className="font-inter font-bold pt-[20%] pb-[5%] sm:text-3xl md:text-5xl mb-2 sm:mb-4">
                        NÂNG TẦM GIÁ TRỊ TÀI CHÍNH CỦA BẠN
                    </h1>
                    <p className="text-sm pb-[5%] sm:text-base mb-4 sm:mb-6 text-[#FFFFFF]/60">
                        Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn dành cho bạn
                    </p>
                    <button className="bg-green-500  text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base">
                        Tham gia cùng chúng tôi
                    </button>
                    
                    <div className="flex flex-wrap  mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-4 lg:space-x-4 h-[50%]">
                        <div className="w-[30%] h-[40%] mb-2 bg-[#FFFFFF]/10 rounded-lg p-3 flex flex-col justify-center">
                            <p className="text-green-500 text-xl sm:text-2xl font-bold">$1B+</p>
                            <p className="text-[#FFFFFF]/60 text-xs sm:text-sm">Tổng số đã huy động</p>
                        </div>
                        <div className="w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-3 flex flex-col justify-center">
                            <p className="text-green-500 mb-2 text-xl sm:text-2xl font-bold">50M+</p>
                            <p className="text-[#FFFFFF]/60 text-xs sm:text-sm">Đã đầu tư thành công</p>
                        </div>
                        <div className="w-[30%] h-[40%] bg-[#FFFFFF]/10 rounded-lg p-3 flex flex-col justify-center">
                            <p className="text-green-500 mb-2 text-xl sm:text-2xl font-bold">771+</p>
                            <p className="text-[#FFFFFF]/60 text-xs sm:text-sm">Nhà đầu tư tham gia</p>
                        </div>
                    </div>
                </div>
                
                {/* Phần bên phải */}
                <div 
                    ref={rightFrameRef} 
                    className={`w-full md:w-1/2 min-h-[90vh] relative mt-8 md:mt-0 transition-all duration-500 ${
                        isRightFrameVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}
                >
                    <div className="relative w-full h-full">
                    <div className="absolute w-[80%] sm:w-[70%] md:w-[60%] h-[65%] sm:h-[70%] md:h-[65%] top-[5%] sm:top-[8%] md:top-[10%] right-[10%] md:right-[5%]">
                            <img 
                                src="/img/invest.png" 
                                alt="Investment Dashboard" 
                                className="w-full h-full rounded-[1.25rem] opacity-100 object-cover" 
                            />
                            
                            {/* Khung Hyperas */}
                            <div className="absolute w-[58%] sm:w-[50%] md:w-[42%] h-[31%] sm:h-[31%] md:h-[33%] top-[7%] sm:top-[5%] md:top-[7%] left-[-30%] sm:left-[-25%] md:left-[-25%] bg-white text-black rounded-[1.25rem] shadow overflow-hidden flex flex-col">
                                <div className="relative h-1/2 w-full overflow-hidden bg-[#0B3546]">
                                    <img 
                                        src="/img/hyperas.png" 
                                        alt="Hyperas Chain" 
                                        className="absolute w-full h-full object-cover transform -rotate-12 top-[3%] left-[10%]"
                                    />
                                </div>
                                <div className="h-1/2 w-full sm:p-1 flex flex-col justify-center">
                                    <p className="font-bold pl-1 text-sm sm:text-base md:text-md">HYPERAS CHAIN</p>
                                    <p className="text-green-500 pl-1 text-base sm:text-lg md:text-md font-semibold">$1,500,000</p>
                                    <p className="text-[10px] pl-1 sm:text-xs md:text-md text-gray-500 mt-1">TECHNOLOGY</p>
                                </div>
                            </div>
                            
                            {/* Khung Salala */}
                            <div className="absolute w-[67%] sm:w-[58%] md:w-[58%] h-[38%] sm:h-[40%] md:h-[45%] bottom-[-15%] sm:bottom-[-18%] md:bottom-[-18%] right-[-5%] sm:right-[-4%] md:right-[-28%] bg-[#F3F7F4] text-black rounded-[1.25rem] shadow overflow-hidden flex flex-col p-2 sm:p-3 md:p-4">
                                <div className="flex items-center mb-1 pb-1 md:pb-2">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/salala.png" alt="Salala AI" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs sm:text-sm">SALALA AI</p>
                                        <p className="text-green-500 font-semibold text-xs sm:text-sm">$1,500,000</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center my-1 pb-1 md:pb-2">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/rapital.png" alt="Rapital Bank" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs sm:text-sm">RAPITAL BANK</p>
                                        <p className="text-green-500 font-semibold text-xs sm:text-sm">$1,500,000</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center mt-1 pb-1">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/egabid.png" alt="Egabid" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs sm:text-sm">EGABID</p>
                                        <p className="text-green-500 font-semibold text-xs sm:text-sm">$1,500,000</p>
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
