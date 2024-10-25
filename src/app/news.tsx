import React from 'react';
import styles from './news.module.css';

const newsData = [
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/20.png",
        videoLink: "#",
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/21.png",
        link: "#",
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/22.png",
        link: "#",
    },
    {
        title: 'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
        date: "30/08/2024",
        image: "/img/23.png",
        link: "#",
    },
];

const News = () => {
    return (
        <div className={styles.newsSection}>
            <h2 className="4xl:text-[72px] 4xl:leading-[80px] 3xl:text-[48px] 3xl:leading-[50px] font-inter font-bold pb-6 pl-[5%] text-[40px] leading-[48px]">TIN MỚI NHẤT VỀ HYRACAP</h2>
            <div className="flex justify-end">
                <button className="4xl:text-[36px] 4xl:leading-[40px] 4xl:px-10 4xl:py-4 4xl:mb-[80px]
                3xl:text-[24px] 3xl:leading-[30px] 3xl:px-8 3xl:py-3 3xl:mb-[60px]
                2xl:text-[18px] 2xl:leading-[22px] 2xl:px-6 2xl:py-2 2xl:mb-[40px]
                 bg-white text-gray-950 font-semibold py-2 px-4 mx-8 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 inline-block">
                    Xem thêm
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-3 w-full">
                <div className="flex-[1.5] relative flex flex-col items-center">
                    <a
                        href={newsData[0].videoLink}
                        className="relative flex flex-col items-center no-underline "
                    >
                        <img
                            src={newsData[0].image}
                            alt="Main News"
                            className="w-[80%] rounded-[10px] object-cover aspect-square"
                        />
                    </a>
                        
                            <h2 className="4xl:text-[48px] 4xl:leading-[60px] 4xl:max-w-[70%] 4xl:mb-4 
                            3xl:mb-[20px] 3xl:text-[36px] 3xl:leading-[40px] 3xl:max-w-[80%] 
                            2xl:mb-[15px] 2xl:text-[30px] 2xl:leading-[36px] 2xl:max-w-[90%]
                            font-bold m-0 max-w-[80%]">
                                {newsData[0].title}
                            </h2>
                            <span className="4xl:text-[30px] 4xl:leading-[40px] 4xl:max-w-[70%] 
                            3xl:text-[24px] 3xl:leading-[30px] 3xl:max-w-[80%] 
                            2xl:text-[18px] 2xl:leading-[22px] 2xl:max-w-[90%]
                            font-inter text-sm leading-6 text-gray-600 max-w-[80%]">
                            HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.
                            </span>
                        <div className="w-full flex justify-end">
                        <button className="4xl:text-[40px] 4xl:leading-[50px] 4xl:mr-[200px] 4xl:px-[40px] 4xl:py-[20px] 3xl:text-[24px] 3xl:leading-[30px] 3xl:mr-[80px] 3xl:px-[30px] 3xl:py-[15px] mr-16 bg-white text-gray-950 font-semibold py-2 px-4 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 flex items-center">
                                Chi tiết
                                <svg className="4xl:w-[30px] 4xl:h-[30px] 3xl:w-[20px] 3xl:h-[20px] ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                </div>
                <div className="flex-1 flex flex-col gap-[10px] h-full">
                    {newsData.slice(1).map((news, index) => (
                        <div key={index} className={"flex w-full pb-[10px] border-b border-[#E6E8EC] no-underline flex-1"}>
                            <a
                                href={news.link}
                                className="h-full flex flex-col no-underline text-inherit"
                            >
                                <div className="flex flex-row">
                                    <div className="flex flex-col ">
                                        <h2 className="4xl:text-[40px] 4xl:leading-[50px] 4xl:mb-10 3xl:mb-[20px] 2xl:mb-[15px] 4xl:max-w-[100%] 3xl:text-[28px] 3xl:leading-[30px] 2xl:text-[18px] 2xl:leading-[22px] 3xl:max-w-[90%] 2xl:max-w-[90%] font-bold m-0 max-w-[80%] ]">
                                            {news.title}
                                        </h2>
                                        
                                            <span className="4xl:text-[30px] 4xl:leading-[40px] 4xl:max-w-[100%] 4xl:mb-[140px] 
                                            3xl:mb-[80px] 3xl:text-[20px] 3xl:leading-[25px] 3xl:max-w-[90%]
                                            2xl:mb-[80px] 2xl:text-[16px] 2xl:leading-[20px] 2xl:max-w-[89%]
                                             font-inter text-sm max-w-[80%] leading-6 text-gray-600">
                                            HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.
                                            </span>
                                            
                                            <span className="4xl:text-[30px] 4xl:leading-[40px] 3xl:text-[24px] 3xl:leading-[30px] text-gray-600 text-sm leading-6 justify-self-end">
                                                {news.date}
                                            </span>
                                            
                                       
                                    </div>
                                    <img
                                        src={news.image}
                                        alt={`News ${index}`}
                                        className="4xl:max-w-[450px] 3xl:max-w-[350px] w-[50%] max-w-[233px] h-auto rounded-[10px] mr-[15px] object-cover aspect-square"
                                    />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default News;
