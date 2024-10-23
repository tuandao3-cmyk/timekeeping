import React from 'react';

const Footer: React.FC = () => {
  return (
    // <div classNameName={styles.container}>
    //   <footer classNameName={styles.footer}>
    //     <div classNameName={styles.content}>
    //       <div classNameName={styles.footerSection}>
    //         <img
    //           src="/img/logohyracap.png"
    //           alt="Hyra Capital Logo"
    //           classNameName={styles.footerLogo}
    //         />
    //         <p>Quỹ đầu tư khởi nghiệp sáng tạo</p>
    //         <p>
    //           Địa chỉ: Lô CX01, khu đô thị Văn Khê, phường La Khê, quận Hà Đông,
    //           Hà Nội.
    //         </p>
    //         <p>Email: contact@hyracapital.com</p>
    //         <p>Số điện thoại: 0123456789</p>
    //       </div>
    //       <div classNameName={styles.footerSection}>
    //         <h4>Sản phẩm của quỹ</h4>
    //         <ul>
    //           <li>Ủy thác đầu tư an toàn</li>
    //           <li>Ủy thác đầu tư linh hoạt</li>
    //           <li>Đầu tư trực tiếp có kiểm soát</li>
    //           <li>Thẩm định & định giá doanh nghiệp</li>
    //         </ul>
    //       </div>
    //       <div classNameName={styles.footerSection}>
    //         <h4>Lĩnh vực đầu tư</h4>
    //         <ul>
    //           <li>Công nghệ số</li>
    //           <li>Bất động sản số</li>
    //           <li>Y tế</li>
    //           <li>Tài chính</li>
    //           <li>Giáo dục</li>
    //           <li>Giải trí</li>
    //         </ul>
    //       </div>
    //       <div classNameName={styles.footerSection}>
    //         <h4>Về chúng tôi</h4>
    //         <ul>
    //           <li>Giới thiệu</li>
    //           <li>Đội ngũ nhân sự</li>
    //           <li>Liên hệ</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div classNameName={styles.footerBottom}>
    //       <div classNameName={styles.footerBottomContent}>
    //         <div classNameName={styles.footerBottomLeft}>
    //           <p>Bản quyền 2024 Hyra Holdings | Bảo lưu mọi quyền.</p>
    //           <div classNameName={styles.footerCertifications}>
    //             <img src="/img/icon/dmca.png" alt="DMCA Logo" />
    //             <img src="/img/icon/bct.png" alt="Bộ Công Thương Logo" />
    //           </div>
    //         </div>
    //         <div classNameName={styles.footerBottomRight}>
    //           <p>Follow us:</p>
    //           <div classNameName={styles.socialIcons}>
    //             <a href="#" aria-label="Facebook">
    //               <FontAwesomeIcon icon={faFacebookF} />
    //             </a>
    //             <a href="#" aria-label="Twitter">
    //               <FontAwesomeIcon icon={faTwitter} />
    //             </a>
    //             <a href="#" aria-label="Telegram">
    //               <FontAwesomeIcon icon={faTelegram} />
    //             </a>
    //             <a href="#" aria-label="Instagram">
    //               <FontAwesomeIcon icon={faInstagram} />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    <footer className="bg-[#04141A] dark:bg-[#F6F6F6]">
      <div className="mx-auto w-full max-w-screen-xl pt-16 pl-3 pr-3">
        <div>
          <img
            src="/img/logohyracap.png"
            alt="footer logo"
            className="w-full max-w-48 md:max-w-48 lg:max-w-45"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-[#FFFFFF] text-base font-semibold leading-6 uppercase dark:text-black">
            CÔNG TY CỔ PHẦN HYRATEK
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 max-w-md">
                <a href="#" className=" hover:underline">
                  Địa chỉ: Lô CX01, khu đô thị Văn Khê, phường La Khê, quận Hà
                  Đông, Hà Nội. Email: info@hyratek.com Số điện thoại: (+84) 58
                  8668 777
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase  dark:text-black">
              CÔNG TY
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Về chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Công nghệ của chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Bộ phương tiện truyền thông
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase  dark:text-black">
              Hệ sinh thái
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Hyperas
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Salala AI
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Egabid
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase  dark:text-black">
              Khác
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tin tức
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tuyển dụng
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Liên hệ chúng tôi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Quan hệ cổ đông
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-[#F6F6F6] md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            Hyratek là nhãn hiệu đã đăng ký. 2022 - 2027 Bảo lưu mọi quyền.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  clipRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  clipRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                />
              </svg>
              <span className="sr-only">X page</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
