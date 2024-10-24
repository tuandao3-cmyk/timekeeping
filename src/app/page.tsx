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
            <div className="bg-[#07212C] text-white p-8 flex xl:min-h-[800px]">
                {/* Phần bên trái */}
                <div className="w-full md:ml-[50px]  md:w-1/2 md:max-w-[45%] px-4 md:pr-8">
                    <h1 className="4xl:pt-[300px] 4xl:text-[64px] 4xl:max-w-[900px] 4xl:leading-[72px] 4xl:ml-[150px] font-inter font-bold pt-[50px] md:pt-[130px]   max-w-[450px]  md:leading-[48px] text-[32px] mb-4">
                        NỀN TẢNG HỢP TÁC ĐẦU TƯ ĐỘT PHÁ CHO TƯƠNG LAI
                    </h1>
                    <p className="4xl:pt-[80px] 4xl:text-[48px] 4xl:max-w-[900px] 4xl:leading-[60px] 4xl:ml-[150px] text-base font-inter pb-[30px] sm:text-base max-w-[450px] md:max-w-[85%] mb-4 sm:mb-6 text-[#FFFFFF]/60">
                    Cung cấp cho các nhà đầu tư và doanh nghiệp những dự án tiềm năng phát triển để chia sẻ sự tăng trưởng tài chính.
                    </p>
                    <div className="flex max-sm:justify-center max-sm:items-center max-sm:flex">
                           <button className="4xl:mt-[60px] 4xl:text-[40px] 4xl:max-w-[900px] 4xl:leading-[60px] 4xl:ml-[150px] bg-[#48B96D] text-[#ffffff] md:px-4 py-3 max-sm:px-4 rounded-full text-base">
                            Tham gia cùng chúng tôi
                        </button>
                    </div>
                    <div className="4xl:ml-[150px] grid grid-cols-1 sm:grid-cols-3 justify-items-center mt-8 space-y-0 space-x-4 gap-4 max-h-[50%]">
                        <div className=" 4xl:w-[300px] 4xl:h-[300px] w-[196px] h-[75px] xl:w-[172px] xl:h-[150px] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center">
                            <p className="4xl:text-[54px] 4xl:leading-[72px] 4xl:ml-[45px] text-[#48B96D] lg:pl-4 lg:mb-4 mb-2 text-xl leading-8 sm:text-2xl font-semibold">$1B+</p>
                            <p className="4xl:text-[30px] 4xl:leading-[42px] 4xl:ml-[45px] 4xl:max-w-[180px] text-[#FFFFFF]/80 lg:pl-4 sm:max-w-[105px]  text-xs sm:text-sm">Tổng số đã huy động</p>
                        </div>
                        <div className=" 4xl:w-[300px] 4xl:h-[300px] w-[196px] h-[75px] xl:w-[172px] xl:h-[150px] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center">
                            <p className="4xl:text-[54px] 4xl:leading-[72px] 4xl:ml-[45px] text-[#48B96D] lg:pl-4 lg:mb-4 mb-2 text-xl leading-8 sm:text-2xl font-semibold">50M+</p>
                            <p className="4xl:text-[30px] 4xl:leading-[42px] 4xl:ml-[45px] 4xl:max-w-[180px] text-[#FFFFFF]/80 lg:pl-4 sm:max-w-[105px]  text-xs sm:text-sm">Đã đầu tư thành công</p>
                        </div>
                        <div className="4xl:w-[300px] 4xl:h-[300px] w-[196px] h-[75px] xl:w-[172px] xl:h-[150px] bg-[#FFFFFF]/10 rounded-lg p-1 md:p-3 pl-5 flex flex-col justify-center">
                            <p className="4xl:text-[54px] 4xl:leading-[72px] 4xl:ml-[45px] text-[#48B96D] lg:pl-4 lg:mb-4 mb-2 text-xl leading-8 sm:text-2xl font-semibold">771+</p>
                            <p className="4xl:text-[30px] 4xl:leading-[42px] 4xl:ml-[45px] 4xl:max-w-[180px] text-[#FFFFFF]/80 lg:pl-4 sm:max-w-[105px]  text-xs sm:text-sm">Nhà đầu tư tham gia</p>
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
                    <div className="absolute sm:w-[300px] sm:h-[350px] lg:w-[400px]   lg:h-[470px] 2xl:w-[500px] 2xl:h-[570px] 3xl:w-[600px] 3xl:h-[670px] top-[45px]  lg:top-[90px] right-[96px] lg:right-[48px] mr-[92px] 4xl:w-[960px] 4xl:h-[1080px]">
                            <img 
                                src="/img/invest.png" 
                                alt="Investment Dashboard" 
                                className=" w-full h-full rounded-[1.25rem] opacity-100 object-cover" 
                            />
                            
                            {/* Khung Hyperas */}
                            <div className="absolute 4xl:w-[450px] 4xl:h-[450px] 4xl:-left-[200px] 4xl:top-[120px] w-[200px]  h-[200px] lg:-left-[110px] lg:h-[200px] top-[63px]  bg-white text-[#04141A] rounded-[1.25rem] shadow overflow-hidden flex flex-col">
                                <div className="relative h-1/2 w-full overflow-hidden bg-[#0B3546]">
                                    <img 
                                        src="/img/hyperas1.png" 
                                        alt="Hyperas Chain" 
                                        className="absolute w-full h-auto object-cover "
                                    />
                                </div>
                                <div className="h-1/2 w-full sm:p-1 flex flex-col justify-center">
                                    <p className="font-bold 4xl:text-[36px] 4xl:leading-[54px] 4xl:pl-[40px] pl-1 text-xs leading-4 xl:leading-6 xl:text-base">HYPERAS CHAIN</p>
                                    <p className="text-[#31814B] font-inter 4xl:text-[36px] 4xl:leading-[54px] 4xl:pl-[40px] pl-1 text-sm leading-6 sm:text-lg md:text-sm font-medium">$1,500,000</p>
                                    <p className="text-[12px] leading-5 4xl:text-[36px] 4xl:leading-[54px] 4xl:pl-[40px] pl-1 sm:text-xs md:text-[12px] text-[#000000]/60 mt-1">TECHNOLOGY</p>
                                </div>
                            </div>
                            
                            {/* Khung Salala */}
                            <div className="absolute 4xl:w-[500px] 4xl:h-[400px] 4xl:-bottom-[100px] 4xl:-right-[100px] lg:w-[250px] lg:h-[200px] lg:-bottom-[100px] lg:-right-[100px] bg-[#F3F7F4] rounded-[1.25rem] shadow overflow-hidden flex flex-col p-2 xl:p-3">
                                <div className="border-b-2 border-[#1C4A2B]/10 flex items-center pb-1">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 xl:w-12 xl:h-12 4xl:w-[80px] 4xl:h-[80px] flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/salala.png" alt="Salala AI" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="4xl:text-[36px] 4xl:leading-[54px]  pl-1 text-xs leading-4 xl:leading-6 xl:text-base font-bold font-inter text-[#04141A] text-sm ">SALALA AI</p>
                                        <p className="text-[#31814B] font-inter 4xl:text-[36px] 4xl:leading-[54px]  pl-1 text-sm leading-6 md:text-sm font-medium">$1,500,000</p>
                                    </div>
                                </div>
                                
                                <div className="border-b-2 border-[#1C4A2B]/10 flex items-center my-1 pb-1 ">
                                    <div className=" w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 4xl:w-[80px] 4xl:h-[80px] rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/rapital.png" alt="Rapital Bank" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="4xl:text-[36px] 4xl:leading-[54px]  pl-1 text-xs leading-4 xl:leading-6 xl:text-base font-bold font-inter text-[#04141A] text-sm ">RAPITAL BANK</p>
                                        <p className="text-[#31814B] font-inter 4xl:text-[36px] 4xl:leading-[54px]  pl-1 text-sm leading-6 md:text-sm font-medium">$1,500,000</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center mt-1 pb-1">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 4xl:w-[80px] 4xl:h-[80px] rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                        <img src="/img/icon/egabid.png" alt="Egabid" className="w-full h-full rounded-lg" />
                                    </div>
                                    <div>
                                        <p className="4xl:text-[36px] 4xl:leading-[54px]  pl-1 text-xs leading-4 xl:leading-6 xl:text-base font-bold font-inter text-[#04141A] text-sm ">EGABID</p>
                                        <p className="text-[#31814B] font-inter 4xl:text-[36px] 4xl:leading-[54px]  pl-1 text-sm leading-6 md:text-sm font-medium">$1,500,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Partner />
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="4xl:text-[72px] text-3xl font-bold text-center mb-12">GIẢI PHÁP ĐẦU TƯ VƯỢT TRỘI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        {[
                            {
                                icon: "/img/icon/icon15.png",
                                title: "Lợi nhuận vượt trội",
                                description: "Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu nhập thụ động vững vàng từ đó tài chính."
                            },
                            {
                                icon: "/img/icon/icon14.png",
                                title: "Thông tin minh bạch",
                                description: "Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu nhập thụ động vững vàng từ đó tài chính."
                            },
                            {
                                icon: "/img/icon/icon16.png",
                                title: "Bảo mật tuyệt đối",
                                description: "Tạo nên mô hình đầu tư bền vững. Giúp mọi người có nguồn thu nhập thụ động vững vàng từ đó tài chính."
                            }
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-[#F3F7F4] p-6 rounded-[1.25rem] 4xl:w-[660px] 4xl:h-[500px] w-[250px] md:w-[400px]  h-[300px] transition-all duration-300 hover:bg-[#48B96D] hover:text-white group"
                            >
                                <img src={item.icon} alt={item.title} className="w-16 h-16 4xl:w-[100px] 4xl:h-[100px] mb-4" />
                                <h3 className="text-2xl 4xl:text-[60px] 4xl:leading-[80px] text-[#000000]/90 leading-8 group-hover:text-white font-inter font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-base leading-6 4xl:leading-[40px] 4xl:text-[32px] group-hover:text-white">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                    

            <ProjectSection />
            <News />
            
            <FeedbackSection />
            <Download />
            <PressSection />
        </div>
    );
};

export default Home;
