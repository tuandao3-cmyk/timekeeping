"use client";

import React from "react";
import styles from "@/app/about/about.module.css";
import Link from "next/link";
import Footer from "@/app/Footer";
import Partner from "../partner";
import ArticlesSection from "../ArticlesSection";
import PressSection from "../PressSection";
import News from "../news";

const AboutPage: React.FC = () => {
  return (
    <>
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
              Trải nghiệm ứng dụng đầu tư HyraCap mang lại lợi nhuận hấp dẫn
              dành cho bạn
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
                  <p className="text-xs font-thin">Download on the</p>
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
                  <p className="text-xs font-thin">Get it on</p>
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
      <div className={styles["about-container"]}>
        <section className={styles.vision}>
          <div className={styles.textContent}>
            <h2>Tầm nhìn</h2>
            <p>
              HyraCap mong muốn trở thành nhà cung cấp nền tảng đầu tư uy tín
              tốt nhất, giúp người dùng phát triển tự do tài chính. Với thông
              tin minh bạch rõ ràng.
            </p>
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
            <p>
              HyraCap mong muốn trở thành nhà cung cấp nền tảng đầu tư uy tín
              tốt nhất, giúp người dùng phát triển tự do tài chính. Với thông
              tin minh bạch rõ ràng.
            </p>
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
          <p>
            Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi nhuận
            hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng mình và
            chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
          </p>
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
                <img
                  src="/img/icon/documentation.png"
                  alt="Đảm bảo quyền lợi"
                />
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
              "Tại Hyra Capital, chúng tôi không chỉ đơn thuần là một quỹ đầu
              tư. Chúng tôi là đối tác của bạn, cánh tay nối dài giúp bạn đạt
              được mục tiêu và ước mơ của mình. Với tầm nhìn xa và đội ngũ
              chuyên nghiệp, chúng tôi cam kết đem đến cho bạn các giải pháp tài
              chính và đào tạo toàn diện, giúp bạn vượt qua mọi thách thức và
              hướng đến thành công."
            </p>
            <p className={styles.founderName}>Trần Thị Thu Hương</p>
          </div>
        </section>
        <section className={styles.promise}>
          <div className={styles.promiseContent}>
            <h2>Lời hứa thương hiệu</h2>
            <p>
              Tận hưởng giá trị đầu tư uy tín hàng đầu và đạt được những lợi
              nhuận hấp dẫn cho bạn! Bạn là người tạo ra tài chính của riêng
              mình và chúng tôi sẽ nâng tầm bạn thực hiện điều đó.
            </p>
            <span className={styles.brandName}>HyraCap</span>
          </div>
        </section>
        <PressSection />
        <News />
        <section className={styles.leadership}>
          <h2>Ban lãnh đạo</h2>
          <div className={styles.leadershipGrid}>
            <div className={styles.leaderCard}>
              <img
                src="/img/CEO.png"
                alt="Trần Nam Chung"
                className={styles.leaderImage}
              />
              <div className={styles.leaderInfo}>
                <h3>TRẦN NAM CHUNG</h3>
                <p className={styles.leaderTitle}>Founder - Chủ Tịch HĐQT</p>
                <ul>
                  <li>
                    Với hơn 10 năm khởi nghiệp trong lĩnh vực công nghệ,
                    Blockchain.
                  </li>
                  <li>
                    Ông Trần Nam Chung và cộng sự đã và đang phát triển thành
                    công nhiều giải pháp công nghệ ứng dụng Blockchian, AI với
                    tầm nhìn tiềm năng dài hạn.
                  </li>
                  <li>
                    Là một người đam mê công nghệ và theo đuổi chiến lược định
                    hình giá trị tương lai bằng các giải pháp công nghệ tham gia
                    mạnh mẽ vào cuộc chuyển đổi kinh tế số.
                  </li>
                  <li>
                    Ông Trần Nam Chung được biết đến là một người có tầm nhìn
                    đột phá và táo bạo, truyền cảm hứng mạnh mẽ cho cộng sự và
                    các nhà đầu tư.
                  </li>
                </ul>
                <a href="#" className={styles.readMore}>
                  Xem thêm
                </a>
              </div>
            </div>
            <div className={styles.leaderCard}>
              <img
                src="/img/COF.png"
                alt="Nguyễn Văn Tuấn"
                className={styles.leaderImage}
              />
              <div className={styles.leaderInfo}>
                <h3>NGUYỄN VĂN TUẤN</h3>
                <p className={styles.leaderTitle}>
                  CO - Founder - Phó Chủ Tịch HĐQT
                </p>
                <ul>
                  <li>
                    Là người có ảnh hưởng lớn trong giới start-up với vai trò là
                    người định hướng
                  </li>
                  <li>
                    Huấn luyện và cố vấn cao cấp cho các tổ chức ươm mầm khởi
                    nghiệp như Hatch!, Startup Weekend, MobileMonday, Kawai...
                  </li>
                  <li>
                    Ông được biết đến với vai trò là người tiên phong trong lĩnh
                    vực Thương mại điện tử tại Việt Nam.
                  </li>
                  <li>
                    Với kinh nghiệm trên 15 năm nghiên cứu và làm việc về TMĐT
                    cho các thị trường Nhật Bản và Bắc Mỹ, ông đã đồng sáng lập
                    và vận hành các website TMĐT hàng đầu tại Việt Nam như
                    rongbay.com, muachung.vn, enbac.com, muare.vn, nemo.vn,
                    wepay.vn...
                  </li>
                </ul>
                <a href="#" className={styles.readMore}>
                  Xem thêm
                </a>
              </div>
            </div>
            <div className={styles.leaderCard}>
              <img
                src="/img/DSL.png"
                alt="MR.TUẤN ĐẶNG"
                className={styles.leaderImage}
              />
              <div className={styles.leaderInfo}>
                <h3>MR.TUẤN ĐẶNG</h3>
                <p className={styles.leaderTitle}>
                  Giám đốc tài chính - Đồng sáng lập
                </p>
                <ul>
                  <li>
                    Với hơn 20 năm kinh nghiệm trong các lĩnh vực auditing,
                    hospitality, mobility, delivery, e-commerce, fintech,
                    healthtech...
                  </li>
                  <li>
                    Ông Tuấn Đặng từng giữ các chức vụ quan trọng của rất nhiều
                    các tập đoàn lớn đa quốc gia như BuyMed, Accor
                  </li>
                  <li>
                    Là một trong những người đầu tiên sáng lập & giữ chức vụ
                    Giám đốc tài chính Grab Việt Nam trong 8 năm.
                  </li>
                </ul>
                <a href="#" className={styles.readMore}>
                  Xem thêm
                </a>
              </div>
            </div>

            <div className={styles.leaderCard}>
              <img
                src="/img/CTO.png"
                alt="MR. ĐẠT HOÀNG"
                className={styles.leaderImage}
              />
              <div className={styles.leaderInfo}>
                <h3>MR. ĐẠT HOÀNG</h3>
                <p className={styles.leaderTitle}>
                  Giám đốc công nghệ - Đồng sáng lập
                </p>
                <ul>
                  <li>Là chuyên gia công nghệ thông tin đầy dặn kinh nghiệm</li>
                  <li>
                    Ông Đạt Hoàng sở hữu thành tích đáng nể trong việc kiến tạo
                    và phát triển các sản phẩm công nghệ đột phá.
                  </li>
                  <li>
                    Mang lại dấu ấn đậm nét trong sự phát triển không ngừng của
                    ngành công nghệ thông tin.
                  </li>
                </ul>
                <a href="#" className={styles.readMore}>
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutPage;
