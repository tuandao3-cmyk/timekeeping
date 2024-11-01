'use client';
import React from 'react';
import styles from '@/app/reports/report.module.css';

import { FaDownload, FaEye } from 'react-icons/fa';
import { Typography } from '@mui/material';
import PdfView from '@/components/pdfView';

// report
const ReportPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [openPdf, setOpenPdf] = React.useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/report.pdf';
    link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="relative w-full h-[520px] bg-[#07212C] bg-[url('/img/report/report_banner.png')] bg-no-repeat bg-cover bg-center">
        <div
          className="absolute inset-0 bg-gradient-to-b flex  items-end pb-[107px] justify-center"
          style={{
            background:
              'linear-gradient(180deg, rgba(11, 53, 70, 0.08) 17.75%, rgba(11, 53, 70, 0.747169) 51.39%, rgba(11, 53, 70, 0.862047) 71.15%, #0B3546 88.52%)',
          }}
        >
          <div className="flex flex-col items-center justify-end text-center max-w-[1440px] text-white gap-[22px]">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px',
                textAlign: 'center',
              }}
            >
              Báo cáo
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
              }}
            >
              Báo cáo chuyên sâu về thị trường tài chính
            </Typography>
          </div>
        </div>
      </div>
      <main className=" mx-12 bg-white w-full">
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <h2 className="font-bold text-4xl">BÁO CÁO TÀI CHÍNH</h2>
            </div>
            <div className={styles.reportTabs}>
              <button
                className={`${styles.tabButton} ${activeTab === 0 && styles.active}`}
                onClick={() => setActiveTab(0)}
              >
                Hàng Quý
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 1 && styles.active}`}
                onClick={() => setActiveTab(1)}
              >
                Hàng Năm
              </button>
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
                      <button
                        className={styles.viewButton}
                        onClick={() => setOpenPdf(true)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className={styles.downloadButton}
                        onClick={handleDownload}
                      >
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
                      <button
                        className={styles.viewButton}
                        onClick={() => setOpenPdf(true)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className={styles.downloadButton}
                        onClick={handleDownload}
                      >
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
                      <button
                        className={styles.viewButton}
                        onClick={() => setOpenPdf(true)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className={styles.downloadButton}
                        onClick={handleDownload}
                      >
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
                      <button
                        className={styles.viewButton}
                        onClick={() => setOpenPdf(true)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className={styles.downloadButton}
                        onClick={handleDownload}
                      >
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

      {/* pdf View */}
      <PdfView
        openPdf={openPdf}
        setOpenPdf={setOpenPdf}
        pdfPath={'/pdfs/report.pdf'}
      />
    </>
  );
};
export default ReportPage;
