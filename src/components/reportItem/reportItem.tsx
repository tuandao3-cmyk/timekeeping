'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import { formatDateTimeVn } from '@/util/util';
import { FaDownload, FaEye } from 'react-icons/fa';
import styles from './report.module.css';

interface ReportItemProps {
  report: any;
}

function ReportItem(props: ReportItemProps) {
  const { report } = props;
  const [file, setFile] = React.useState<string>('');
  const [openPdf, setOpenPdf] = React.useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handlePreview = (file: string) => {
    setFile(file);
    setOpenPdf(true);
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
    <div
      className={`flex gap-5 py-5  transition ease-in-out duration-500 ${
        inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-[20px]'
      }`}
      ref={ref}
    >
      <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
      <div className="flex justify-between w-full">
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
  );
}

export default ReportItem;
