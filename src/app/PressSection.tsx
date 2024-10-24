import styles from './PressSection.module.css';

const pressLogos = [
    { name: "Phụ nữ", src: "/img/icon/phunu.png" },
    { name: "VTC News", src: "/img/icon/vtc.png" },
    { name: "Diễn đàn Doanh nghiệp", src: "/img/icon/bao7.png" },
    { name: "CafeF", src: "/img/icon/cafef.png" },
    { name: "VietnamBiz", src: "/img/icon/bao6.png" },
    { name: "Genk", src: "/img/icon/bao4.png" },
    { name: "Thanh Niên", src: "/img/icon/thanhnien1.png" },
    { name: "Thông tin và Truyền thông", src: "/img/icon/bao8.png" },
];

const PressSection = () => {
    return (
        <section className={styles.pressSection}>
            <h2 className="4xl:text-[72px] 4xl:leading-[80px] 4xl:mb-10 font-bold mb-4 text-[clamp(1.5rem,2vw,3rem)]">
                TRUYỀN THÔNG NÓI GÌ VỀ CHÚNG TÔI? 
            </h2>
            <p className="4xl:text-[36px] 4xl:leading-[48px] font-inter text-[#000000]/60 font-normal text-base leading-6 max-w-[54%] mx-auto mb-4 text-center">
            Khám phá các bài viết và nhận xét từ báo chí, nơi chúng tôi được công nhận là một trong những nền tảng đầu tư hàng đầu, mang lại cơ hội và giá trị bền vững cho nhà đầu tư.
            </p>
            <div className={styles.logoContainer}>
               
                    {pressLogos.map((logo, index) => (
                        <div key={index} className={styles.logoWrapper}>
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className={styles.logo}
                            />
                        </div>
                    ))}             
            </div>
        </section>
    );
};

export default PressSection;
