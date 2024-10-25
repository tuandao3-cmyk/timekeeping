'use client';
import React from 'react';
import styles from '@/app/reports/report.module.css';

import { FaDownload, FaEye } from 'react-icons/fa';

// report
const ReportPage: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className="text-4xl font-bold">Báo cáo</h1>
            <p className="w-full inline">
              Báo cáo chuyên sâu về thị trường tài chính.
            </p>
          </div>
        </div>
      </header>
      {/* <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-[1200px]"> */}
      <main className=" mx-12 bg-white w-full">
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <h2 className="font-bold text-4xl">BÁO CÁO TÀI CHÍNH</h2>
            </div>
            <div className={styles.reportTabs}>
              <button className={`${styles.tabButton} ${styles.active}`}>
                Hàng Quý
              </button>
              <button className={styles.tabButton}>Hàng Năm</button>
            </div>
            <div>
              {[
                {
                  title: 'Báo cáo tài chính quý I năm 2024',
                  date: '02/03/2024',
                },
                {
                  title: 'Báo cáo tài chính quý II năm 2024',
                  date: '02/06/2024',
                },
                {
                  title: 'Báo cáo tài chính quý III năm 2024',
                  date: '02/09/2024',
                },
                {
                  title: 'Báo cáo tài chính quý IV năm 2024',
                  date: '02/12/2024',
                },
              ].map((report, index) => (
                <div className="flex gap-5 py-5" key={index}>
                  <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                  <div key={index} className="flex justify-between w-full">
                    <div className={styles.reportInfo}>
                      <h3>{report.title}</h3>
                      <span className={styles.reportDate}>{report.date}</span>
                    </div>
                    <div className={styles.reportActions}>
                      <button className={styles.viewButton}>
                        <FaEye />
                      </button>
                      <button className={styles.downloadButton}>
                        <FaDownload />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <h2 className="font-bold text-4xl">BÁO CÁO DỰ ÁN</h2>
            </div>
            <div>
              {[
                {
                  title: 'Báo cáo tiến độ dự án',
                  date: '02/03/2024',
                },
                {
                  title: 'Báo cáo tiến độ dự án',
                  date: '02/06/2024',
                },
                {
                  title: 'Báo cáo tiến độ dự án',
                  date: '02/09/2024',
                },
              ].map((report, index) => (
                <div className="flex gap-5 py-5" key={index}>
                  <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                  <div key={index} className="flex justify-between w-full">
                    <div className={styles.reportInfo}>
                      <h3>{report.title}</h3>
                      <span className={styles.reportDate}>{report.date}</span>
                    </div>
                    <div className={styles.reportActions}>
                      <button className={styles.viewButton}>
                        <FaEye />
                      </button>
                      <button className={styles.downloadButton}>
                        <FaDownload />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <h2 className="font-bold text-4xl">BÁO CÁO XÃ HỘI</h2>
            </div>
            <div>
              {[
                {
                  title: 'Trách nhiệm xã hội',
                  date: '02/03/2024',
                },
                {
                  title: 'Phát triển bền vững',
                  date: '02/06/2024',
                },
              ].map((report, index) => (
                <div className="flex gap-5 py-5" key={index}>
                  <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                  <div key={index} className="flex justify-between w-full">
                    <div className={styles.reportInfo}>
                      <h3>{report.title}</h3>
                      <span className={styles.reportDate}>{report.date}</span>
                    </div>
                    <div className={styles.reportActions}>
                      <button className={styles.viewButton}>
                        <FaEye />
                      </button>
                      <button className={styles.downloadButton}>
                        <FaDownload />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <h2 className="font-bold text-4xl">BÁO CÁO KHÁC</h2>
            </div>
            <div>
              {[
                {
                  title: 'Phân tích thị trường',
                  date: '02/03/2024',
                },
                {
                  title: 'Nghiên cứu và phát triển',
                  date: '02/06/2024',
                },
              ].map((report, index) => (
                <div className="flex gap-5 py-5" key={index}>
                  <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                  <div key={index} className="flex justify-between w-full">
                    <div className={styles.reportInfo}>
                      <h3>{report.title}</h3>
                      <span className={styles.reportDate}>{report.date}</span>
                    </div>
                    <div className={styles.reportActions}>
                      <button className={styles.viewButton}>
                        <FaEye />
                      </button>
                      <button className={styles.downloadButton}>
                        <FaDownload />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* </div>
      </div> */}
    </>
  );
};
export default ReportPage;
