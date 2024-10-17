'use client';

import React from "react";
import styles from "@/app/about/about.module.css";
import Link from "next/link";
import Footer from "@/app/Footer";
import Partner from "../Partner";
import ArticlesSection from "../ArticlesSection";
import PressSection from "../PressSection";
import News from "../news";

const leaders = [
    {
        name: 'Trần Nam Chung',
        title: 'Chief Strategy Officer - Founder',
        image: '/img/tran-nam-chung.jpg',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Tuấn Nguyễn',
        title: 'CEO - Co-Founder',
        image: '/img/tuan-nguyen.jpg',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Hoàng Thành Đạt',
        title: 'CEO - CTO-Founder',
        image: '/img/hoang-thanh-dat.jpg',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Tuấn Đặng',
        title: 'CFO - Co-Founder',
        image: '/img/tuan-dang.jpg',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Jun Do',
        title: 'CMO - Co-Founder',
        image: '/img/jun-do.jpg',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    // Thêm các thành viên khác tương tự
]

const staffs = [
    {
        name: 'Cris Nguyễn',
        title: 'Blockchain Leader',
        image: '/img/staff1.png',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Nguyễn Văn Ngân',
        title: 'BE Leader',
        image: '/img/staff2.png',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Trần Quang Tú',
        title: 'Mobile Leader',
        image: '/img/staff3.png',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Lê Xuân Minh',
        title: 'FE Leader',
        image: '/img/staff4.png',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Bùi Lương Châu',
        title: 'SA',
        image: '/img/staff5.png',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    {
        name: 'Nguyễn mạnh Hưng',
        title: 'Creative Director',
        image: '/img/staff6.png',
        description: [
            'Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Blockchain.',
            'Ông Trần Nam Chung và cộng sự đã và đang phát triển thành công nhiều giải pháp công nghệ ứng dụng Blockchain, AI với tầm nhìn tiên năng dài hạn.',
            'Là một người đam mê công nghệ và theo đuổi chiến lược định hình giá trị tương lai bằng các giải pháp công nghệ tham gia mạnh mẽ vào cuộc chuyển đổi kinh tế số.',
            'Ông Trần Nam Chung được biết đến là một người có tầm nhìn đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và các nhà đầu tư.'
        ]
    },
    // Thêm các thành viên khác tương tự
]



const AboutPage: React.FC = () => {
    return (
        <>  
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                <Link href="/">
                        <button className={styles.logoButton}>
                           
                        </button>
                    </Link>
                </div>
                <Link href="/" className={styles.link}>Trang chủ</Link>
                <Link href="/about" className={styles.link}>Giới thiệu</Link>
                <Link href="/products" className={styles.link}>Sản phẩm</Link>
                <Link href="/categories" className={styles.link}>Danh mục</Link>
                <Link href="/guides" className={styles.link}>Hướng dẫn</Link>
                <Link href="/news" className={styles.link}>Tin tức</Link>
                <Link href="/reports" className={styles.link}>Báo cáo</Link>
                <Link href="/contact" className={styles.link}>Liên hệ</Link>

            </nav>
            <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Về chúng tôi</h1>
                        <p>Chúng tôi là Quỹ đầu tư với sứ mệnh ươm mầm và đầu tư dài hạn vào các dự án khởi nghiệp cùng doanh nghiệp vừa và nhỏ có tính đổi mới, sáng tạo và phát triển bền vững</p>
                        {/* <button className={styles.ctaButton}>Đăng ký ngay!</button> */}
                    </div>
            </div>
        </header>
        <Partner/>
        <div className={styles['about-container']}>
        <section className={styles.vision}>
        <div className={styles.textContent}>
            <h2>Tầm nhìn</h2>
            <p>HyraCap mong muốn trở thành nhà cung cấp nền tảng đầu tư uy tín tốt nhất, giúp người dùng phát triển tự do tài chính. Với thông tin minh bạch rõ ràng.</p>
            <ul className={styles.bulletPoints}>
                <li>Phù hợp với mọi nhà đầu tư</li>
                <li>Nền tảng đầu tư tốt nhất</li>
                <li>Sinh lời bền vững</li>
                <li>Dữ liệu bảo mật tuyệt đối</li>
            </ul>
        </div>
        <div className={styles.imageContent}>
            <img src="/img/vision.png" alt="Vision illustration" />
        </div>
    </section>

    <section className={styles.mission}>
        <div className={styles.textContent}>
            <h2>Sứ mệnh</h2>
            <p>HyraCap mong muốn trở thành nhà cung cấp nền tảng đầu tư uy tín tốt nhất, giúp người dùng phát triển tự do tài chính. Với thông tin minh bạch rõ ràng.</p>
            <ul className={styles.bulletPoints}>
                <li>Phù hợp với mọi nhà đầu tư</li>
                <li>Nền tảng đầu tư tốt nhất</li>
                <li>Sinh lời bền vững</li>
                <li>Dữ liệu bảo mật tuyệt đối</li>
            </ul>
        </div>
        <div className={styles.imageContent}>
            <img src="/img/mission.png" alt="Mission illustration" />
        </div>
    </section>
           <section className={styles.values}>
                <h2>Giá trị cốt lõi</h2>
                <p>Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.</p>
                <div className={styles.valueGrid}>
                    <div className={styles.valueItem}>
                        <div className={styles.valueIcon}>
                            <img src="/img/icon/idea.png" alt="Đổi mới sáng tạo" />
                        </div>
                        <div className={styles.valueTitle}>Đổi mới sáng tạo</div>
                    </div>
                    <div className={styles.valueItem}>
                        <div className={styles.valueIcon}>
                            <img src="/img/icon/security.png" alt="Trách nhiệm uy tín" />
                        </div>
                        <div className={styles.valueTitle}>Trách nhiệm uy tín</div>
                    </div>
                    <div className={styles.valueItem}>
                        <div className={styles.valueIcon}>
                            <img src="/img/icon/cloud.png" alt="Xây dựng vững mạnh" />
                        </div>
                        <div className={styles.valueTitle}>Xây dựng vững mạnh</div>
                    </div>
                    <div className={styles.valueItem}>
                        <div className={styles.valueIcon}>
                            <img src="/img/icon/documentation.png" alt="Đảm bảo quyền lợi" />
                        </div>
                        <div className={styles.valueTitle}>Đảm bảo quyền lợi</div>
                    </div>
                </div>
            </section>
            <section className={styles.founder}>
                <div className={styles.founderImage}>
                    <img src="/img/founder.png" alt="Trần Thị Thu Hương" />
                </div>
                <div className={styles.founderContent}>
                    <h2 className={styles.founderTitle}>Lời nhắn từ nhà sáng tạo</h2>
                    <p className={styles.founderMessage}>
                        "Tại Hyra Capital, chúng tôi không chỉ đơn thuần là một quỹ đầu tư. Chúng tôi là đối tác của bạn, cánh tay nối dài giúp bạn đạt được mục tiêu và ước mơ của mình. Với tầm nhìn xa và đội ngũ chuyên nghiệp, chúng tôi cam kết đem đến cho bạn các giải pháp tài chính và đào tạo toàn diện, giúp bạn vượt qua mọi thách thức và hướng đến thành công."
                    </p>
                    <p className={styles.founderName}>Trần Thị Thu Hương</p>
                </div>
            </section>
            <section className={styles.promise}>
                <div className={styles.promiseContent}>
                    <h2>Lời hứa thương hiệu</h2>
                    <p>
                    Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
                    </p>
                    <span className={styles.brandName}>HyraCap</span>
                </div>
            </section>
            <PressSection/>
            <News/>
            <div className={styles.leadershipSection}>
            <h2>Đội ngũ sáng lập</h2>
                <div className={styles.leadershipGrid}>
                {leaders.slice(0, 3).map((leader, index) => (
                    <div key={index} className={styles.leaderCard}>
            <img src={leader.image} alt={leader.name} width={100} height={100} className={styles.leaderImage} />
            <div className={styles.leaderInfo}>
                <h3>{leader.name}</h3>
                <p className={styles.leaderTitle}>{leader.title}</p>
                <ul className={styles.leaderDescription}>
                    {leader.description.map((item, idx) => (
                        <li key={idx} className={styles.leaderDescriptionItem}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
               ))}

                </div>
                <div className={styles.lastRow}>
                    {leaders.slice(3).map((leader, index) => (
                    <div key={index + 3} className={styles.leaderCard}>
                    <img src={leader.image} alt={leader.name} width={100} height={100} className={styles.leaderImage} />
                    <div className={styles.leaderInfo}>
                        <h3>{leader.name}</h3>
                        <p className={styles.leaderTitle}>{leader.title}</p>
                        <ul className={styles.leaderDescription}>
                        {leader.description.map((item, idx) => (
                            <li key={idx} className={styles.leaderDescriptionItem}>{item}</li>
                        ))}
                    </ul>
                    </div>
                    </div>
                ))}
                    </div>
            </div>
            <div className={styles.staffSection}>
            <h2>Nhân sự chủ chốt</h2>
                <div className={styles.leadershipGrid}>
                {staffs.slice(0, 6).map((staff, index) => (
                    <div key={index} className={styles.staffCard}>
                 <img src={staff.image} alt={staff.name} width={100} height={100} className={styles.leaderImage} />
            <div className={styles.leaderInfo}>
                <h3>{staff.name}</h3>
                <p className={styles.leaderTitle}>{staff.title}</p>
                <ul className={styles.leaderDescription}>
                    {staff.description.map((item, idx) => (
                        <li key={idx} className={styles.leaderDescriptionItem}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
               ))}

                </div>

            </div>
            <div className={styles.contactSection}>
  <div className={styles.contactInfo}>
    <h2>Liên hệ với chúng tôi</h2>
    <p>Thông tin liên hệ</p>
    <div className={styles.contactDetails}>
      <div className={styles.contactItem}>
        <img src="/img/icon/localicon.png" alt="Địa chỉ" />
        <p>Lô CX01, khu đô thị Văn Khê, phường La Khê, quận Hà Đông, Hà Nội.</p>
      </div>
      <div className={styles.contactItem}>
        <img src="/img/icon/mailicon.png" alt="Email" />
        <p>info@hyratek.com</p>
      </div>
      <div className={styles.contactItem}>
        <img src="/img/icon/websiteicon.png" alt="Website" />
        <p>Hyracap.com</p>
      </div>
    </div>
  </div>
  <div className={styles.contactForm}>
    <h3>Chúng tôi sẵn sàng đón nhận bất kỳ đề xuất nào.</h3>
    <form>
      <input type="text" placeholder="Tên*" required />
      <input type="email" placeholder="Email*" required />
      <input type="tel" placeholder="Số điện thoại" />
      <textarea placeholder="Câu hỏi của bạn*" required></textarea>
      <div className={styles.recaptcha}>
        <input type="checkbox" id="notRobot" />
        <label htmlFor="notRobot">Tôi không phải là robot</label>
      </div>
      <button type="submit">Gửi</button>
    </form>
  </div>
</div>

    </div>
        

        <Footer/>
        </>

    );
};
export default AboutPage;
