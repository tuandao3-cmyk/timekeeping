'use client';
import styles from '@/app/reports/report.module.css';
import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import PdfView from '@/components/pdfView';
import { Typography } from '@mui/material';
import { FaDownload, FaEye } from 'react-icons/fa';

import { getReports } from '@/services/reports.service';
import { Page } from '@/type/page.type';
import { formatDateTimeVn } from '@/util/util';

const ReportPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [page, setPage] = React.useState<typeof Page>(Page);
  const [data1, setData1] = React.useState<any>([]);
  const [data2, setData2] = React.useState<any>([]);
  const [data3, setData3] = React.useState<any>([]);
  const [data4, setData4] = React.useState<any>([]);
  const [openPdf, setOpenPdf] = React.useState(false);
  const [file, setFile] = React.useState<string>('');
  const queryClient = useQueryClient();

  React.useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['reportsFinance', page],
      queryFn: () =>
        getReports({
          ...page,
          type__eq: 0,
        }),
    });
    queryClient.prefetchQuery({
      queryKey: ['reportsProject', page],
      queryFn: () =>
        getReports({
          ...page,
          type__eq: 1,
        }),
    });
    queryClient.prefetchQuery({
      queryKey: ['reportsSociety', page],
      queryFn: () =>
        getReports({
          ...page,
          type__eq: 2,
        }),
    });
    queryClient.prefetchQuery({
      queryKey: ['reportsOther', page],
      queryFn: () =>
        getReports({
          ...page,
          type__eq: 3,
        }),
    });
  }, [queryClient]);

  const {
    data: reportsFinance,
    isLoading: isLoadingFinance,
    isError: isErrorFinance,
  } = useQuery({
    queryKey: ['reportsFinance', page],
    queryFn: () =>
      getReports({
        ...page,
        type__eq: 0,
      }),
  });
  const {
    data: reportsProject,
    isLoading: isLoadingProject,
    isError: isErrorProject,
  } = useQuery({
    queryKey: ['reportsProject', page],
    queryFn: () =>
      getReports({
        ...page,
        type__eq: 1,
      }),
  });
  const {
    data: reportsSociety,
    isLoading: isLoadingSociety,
    isError: isErrorSociety,
  } = useQuery({
    queryKey: ['reportsSociaty', page],
    queryFn: () =>
      getReports({
        ...page,
        type__eq: 2,
      }),
  });
  const {
    data: reportsOther,
    isLoading: isLoadingOther,
    isError: isErrorOther,
  } = useQuery({
    queryKey: ['reportsOther', page],
    queryFn: () =>
      getReports({
        ...page,
        type__eq: 3,
      }),
  });

  React.useEffect(() => {
    if (reportsFinance && !isLoadingFinance && !isErrorFinance) {
      setData1(reportsFinance.data);
    }
  }, [reportsFinance]);

  React.useEffect(() => {
    if (reportsProject && !isLoadingProject && !isErrorProject) {
      console.log(reportsProject.data);

      setData2(reportsProject.data);
    }
  }, [reportsProject]);

  React.useEffect(() => {
    if (reportsSociety && !isLoadingSociety && !isErrorSociety) {
      setData3(reportsSociety.data);
    }
  }, [reportsSociety]);

  React.useEffect(() => {
    if (reportsOther && !isLoadingOther && !isErrorOther) {
      setData4(reportsOther.data);
    }
  }, [reportsOther]);

  const data = activeTab == 0 ? data1 : data2;

  const handlePreview = (file: string) => {
    setFile(file);
    setOpenPdf(true);
    // const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(file)}&embedded=true`;
    // window.open(googleDocsViewerUrl, '_blank');
  };
  const handleDownload = (href: string) => {
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[772px] lg:min-h-[520px] bg-[#07212C] bg-[url('/img/report/baocao_bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="  pb-[107px]">
          <div className="flex flex-col items-center justify-end text-center max-w-[1440px] text-[#0B3546] gap-[22px]">
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
      <main className="px-6 lg:px-12 bg-white w-full">
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <p className="font-bold text-[28px] md:text-4xl">
                BÁO CÁO TÀI CHÍNH
              </p>
            </div>
            {/* <div className={styles.reportTabs}>
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
            </div> */}
            <div>
              {isLoadingFinance ? (
                <div>Loading...</div>
              ) : (
                data1?.map((report: any, index: number) => (
                  <div className="flex gap-5 py-5" key={index}>
                    <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                    <div key={index} className="flex justify-between w-full">
                      <div className={styles.reportInfo}>
                        <h3>{report.name}</h3>
                        <span className={styles.reportDate}>
                          {formatDateTimeVn(report.updated_at)}
                        </span>
                      </div>
                      <div className={styles.reportActions}>
                        <button
                          className={styles.viewButton}
                          onClick={() => handlePreview(report.file)}
                        >
                          <FaEye />
                        </button>
                        <button
                          className={styles.downloadButton}
                          onClick={() => handleDownload(report.file)}
                        >
                          <FaDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <p className="font-bold text-[28px] md:text-4xl">BÁO CÁO DỰ ÁN</p>
            </div>
            <div>
              {isLoadingProject ? (
                <div>Loading...</div>
              ) : (
                data2?.map((report: any, index: number) => (
                  <div className="flex gap-5 py-5" key={index}>
                    <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                    <div key={index} className="flex justify-between w-full">
                      <div className={styles.reportInfo}>
                        <h3>{report.name}</h3>
                        <span className={styles.reportDate}>
                          {formatDateTimeVn(report.updated_at)}
                        </span>
                      </div>
                      <div className={styles.reportActions}>
                        <button
                          className={styles.viewButton}
                          onClick={() => handlePreview(report.file)}
                        >
                          <FaEye />
                        </button>
                        <button
                          className={styles.downloadButton}
                          onClick={() => handleDownload(report.file)}
                        >
                          <FaDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <p className="font-bold text-[28px] md:text-4xl">
                BÁO CÁO XÃ HỘI
              </p>
            </div>
            <div>
              {isLoadingSociety ? (
                <div>Loading...</div>
              ) : (
                data3?.map((report: any, index: number) => (
                  <div className="flex gap-5 py-5" key={index}>
                    <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                    <div key={index} className="flex justify-between w-full">
                      <div className={styles.reportInfo}>
                        <h3>{report.name}</h3>
                        <span className={styles.reportDate}>
                          {formatDateTimeVn(report.updated_at)}
                        </span>
                      </div>
                      <div className={styles.reportActions}>
                        <button
                          className={styles.viewButton}
                          onClick={() => handlePreview(report.file)}
                        >
                          <FaEye />
                        </button>
                        <button
                          className={styles.downloadButton}
                          onClick={() => handleDownload(report.file)}
                        >
                          <FaDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex text-center items-center gap-2 py-9">
              <div className="bg-[#1D4454] w-2 h-2 rounded-full"></div>
              <p className="font-bold text-[28px] md:text-4xl">BÁO CÁO KHÁC</p>
            </div>
            <div>
              {isLoadingOther ? (
                <div>Loading...</div>
              ) : (
                data4?.map((report: any, index: number) => (
                  <div className="flex gap-5 py-5" key={index}>
                    <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
                    <div key={index} className="flex justify-between w-full">
                      <div className={styles.reportInfo}>
                        <h3>{report.name}</h3>
                        <span className={styles.reportDate}>
                          {formatDateTimeVn(report.updated_at)}
                        </span>
                      </div>
                      <div className={styles.reportActions}>
                        <button
                          className={styles.viewButton}
                          onClick={() => handlePreview(report.file)}
                        >
                          <FaEye />
                        </button>
                        <button
                          className={styles.downloadButton}
                          onClick={() => handleDownload(report.file)}
                        >
                          <FaDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      {/* </div>
      </div> */}

      {/* pdf View */}
      <PdfView openPdf={openPdf} setOpenPdf={setOpenPdf} pdfPath={file} />
    </>
  );
};
export default ReportPage;
