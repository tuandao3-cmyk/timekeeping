import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.footerSection}>
                        <img src="/img/logohyracap.png" alt="Hyra Capital Logo"
                             className={styles.footerLogo}/>
                        <p>Quỹ đầu tư khởi nghiệp sáng tạo</p>
                        <p>Địa chỉ: Lô CX01, khu đô thị Văn Khê, phường La Khê, quận Hà Đông, Hà Nội.</p>
                        <p>Email: contact@hyracapital.com</p>
                        <p>Số điện thoại: 0123456789</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Sản phẩm của quỹ</h4>
                        <ul>
                            <li>Ủy thác đầu tư an toàn</li>
                            <li>Ủy thác đầu tư linh hoạt</li>
                            <li>Đầu tư trực tiếp có kiểm soát</li>
                            <li>Thẩm định & định giá doanh nghiệp</li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Lĩnh vực đầu tư</h4>
                        <ul>
                            <li>Công nghệ số</li>
                            <li>Bất động sản số</li>
                            <li>Y tế</li>
                            <li>Tài chính</li>
                            <li>Giáo dục</li>
                            <li>Giải trí</li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Về chúng tôi</h4>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>Đội ngũ nhân sự</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomContent}>
                        <div className={styles.footerBottomLeft}>
                            <p>Bản quyền 2024 Hyra Holdings | Bảo lưu mọi quyền.</p>
                            <div className={styles.footerCertifications}>
                                <img src="/img/icon/dmca.png" alt="DMCA Logo"/>
                                <img src="/img/icon/bct.png" alt="Bộ Công Thương Logo"/>
                            </div>
                        </div>
                        <div className={styles.footerBottomRight}>
                            <p>Follow us:</p>
                            <div className={styles.socialIcons}>
                                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" aria-label="Telegram"><FontAwesomeIcon icon={faTelegram} /></a>
                                <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;