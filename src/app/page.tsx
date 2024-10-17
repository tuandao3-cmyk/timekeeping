import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import styles from "./page.module.css";
import Partner from "@/app/partner";
import ProjectSection from "@/app/ProjectSection";
import PressSection from "@/app/PressSection";
import ArticlesSection from "@/app/ArticlesSection";
import Footer from "@/app/Footer";
import Download from "./download";
import News from "./news";
const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: 'url("/img/00.jpg")' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 justify-between items-center h-full p-8 gap-4">
                    <div className="w-full md:col-span-1 xl:col-span-1 lg:col-span-2  text-center md:text-left text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Đầu tư thông minh sinh lời tuyệt đỉnh
                        </h1>
                        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                            Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi
                            nhuận hấp dẫn dành cho bạn
                        </p>
                        <h2 className="mt-8 text-2xl md:text-3xl lg:text-4xl font-bold">
                            Tải ứng dụng tại đây!
                        </h2>
                        <div className="mt-8 flex justify-center md:justify-start space-x-4">
                            <a
                                href="https://www.apple.com/app-store/"
                                className="px-6 py-2 bg-black text-white rounded-lg text-lg hover:bg-gray-800 flex items-center justify-center space-x-2 w-full md:w-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/img/icon/apic2.png"
                                    alt="App Store"
                                    className="w-6 h-6"
                                />
                                <div>
                                    <p className="text-xs font-thin">
                                        Download on the
                                    </p>
                                    <h3>App Store</h3>
                                </div>
                            </a>

                            <a
                                href="https://play.google.com/store"
                                className="px-6 py-2 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 flex items-center justify-center space-x-2 w-full md:w-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/img/icon/ggpl2.png"
                                    alt="Google Play"
                                    className="w-6 h-6"
                                />
                                <div>
                                    <p className="text-xs font-thin">
                                        Get it on
                                    </p>
                                    <h3>Google Play</h3>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="w-full  flex md:col-span-1  justify-center items-center mt-8 md:mt-0 xl:p-28 p-4">
                        <div className="relative w-full h-80">
                            <img
                                src="/img/02.png"
                                className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[40%] h-auto  transition-transform duration-300 z-30 scale-125 md:scale-100 lg:scale-150"
                                alt="App Screenshot 3"
                            />

                            <img
                                src="/img/01.png"
                                className="absolute top-0 left-0 w-[30%] h-auto  object-contain transition-transform duration-300 z-10 scale-110 md:scale-100 lg:scale-150"
                                alt="App Screenshot 1"
                            />

                            <img
                                src="/img/03.png"
                                className="absolute top-0 right-0 w-[30%] h-auto  object-contain transition-transform duration-300 z-10 scale-110 md:scale-100 lg:scale-150"
                                alt="App Screenshot 2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Partner />
            <ProjectSection />
            <News />
            <PressSection />
            <Download />
        </div>
    );
};

export default Home;
