'use client';

import React from "react";
import styles from "@/app/categories/category.module.css";
import Link from "next/link";
import Footer from "../Footer";

const CategoryPage: React.FC = () => {
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
                        <h1>Danh mục đầu tư của HyraCap</h1>
                        <p>Nghiên cứu và phát triển các dự án công nghệ Blockchain, AI, Fintech, Digital Banking,...</p>
                    </div>
            </div>
        </header>

        <div className={styles.container}>

      <div className={styles.filterSection}>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <h4>Lĩnh vực đầu tư</h4>
            <label><input type="radio" name="investmentField" value="all" /> Tất cả</label>
            <label><input type="radio" name="investmentField" value="tech" /> Công nghệ</label>
            <label><input type="radio" name="investmentField" value="e-commerce" /> Thương mại điện tử</label>
            <label><input type="radio" name="investmentField" value="direct" /> Đầu tư trực tiếp</label>
          </div>
          <div className={styles.filterGroup}>
            <h4>Trạng thái dự án</h4>
            <label><input type="radio" name="projectStatus" value="all" /> Tất cả</label>
            <label><input type="radio" name="projectStatus" value="funding" /> Đang gọi vốn</label>
            <label><input type="radio" name="projectStatus" value="incubator" /> Đã đầu tư & ươm tạo</label>
          </div>
          <div className={styles.filterGroup}>
            <h4>Giai đoạn gọi vốn</h4>
            <label><input type="radio" name="fundingStage" value="all" /> Tất cả</label>
            <label><input type="radio" name="fundingStage" value="seed" /> Seed</label>
            <label><input type="radio" name="fundingStage" value="seriesA" /> Series A</label>
            <label><input type="radio" name="fundingStage" value="seriesB" /> Series B</label>
            <label><input type="radio" name="fundingStage" value="seriesC" /> Series C</label>
            <label><input type="radio" name="fundingStage" value="pe" /> PE</label>
            <label><input type="radio" name="fundingStage" value="ipo" /> IPO</label>
          </div>
        </div>
      </div>
      <div className={styles.projectSection}>
        {/* Mã hiển thị các dự án */}
        <div className={styles.searchBar}>
            <div className={styles.h2}>Tìm kiếm theo</div>
          <input type="text" placeholder="Nhập dự án cần tìm kiếm" />
        </div>
        <div className={styles.projectCards}>
          <div className={styles.projectCard}>
            <img src="/img/19.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/18.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/16.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/17.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          
          {/* Repeat similar structure for Salala AI, Rapital Bank, and Egabid */}
        </div>
        <div className={styles.projectCards}>
          <div className={styles.projectCard}>
            <img src="/img/19.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/18.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/16.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/17.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          
          {/* Repeat similar structure for Salala AI, Rapital Bank, and Egabid */}
        </div>
        <div className={styles.projectCards}>
          <div className={styles.projectCard}>
            <img src="/img/19.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/18.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/16.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/17.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          
          {/* Repeat similar structure for Salala AI, Rapital Bank, and Egabid */}
        </div>
        <div className={styles.projectCards}>
          <div className={styles.projectCard}>
            <img src="/img/19.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/18.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/16.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="/img/17.jpg" alt="Hyperas Chain" className={styles.projectImage} />
            <div className={styles.badge}>Series A</div>
            <h3 className={styles.projectName}>Hyperas Chain</h3>
            <div className={styles.projectInfo}>
              <div className={styles.amount}>$2.000.000</div>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              <div className={styles.fundingInfo}>
                <span>$1.500.00</span>
                <span>Được tài trợ 75%</span>
              </div>
              <div className={styles.category}>CÔNG NGHỆ</div>
            </div>
          </div>
          
          {/* Repeat similar structure for Salala AI, Rapital Bank, and Egabid */}
        </div>
      </div>
    </div>
 
        <Footer />
            </>
    );
};
export default CategoryPage;
