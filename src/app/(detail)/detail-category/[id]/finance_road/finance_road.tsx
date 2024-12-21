'use client';
import PdfView from '@/components/pdfView';
import { formatDateTimeVn } from '@/util/util';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

interface FinanceRoadSectionProps {
  data: any;
}

const FinanceRoadSection = (props: FinanceRoadSectionProps) => {
  const pathname = usePathname();
  const [openPdf, setOpenPdf] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/report.pdf';
    link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col justify-start min-h-[100vh] items-center w-full">
      {props?.data?.financial_roadmap?.map((item: any, index: number) => (
        <div
          key={index}
          className="flex flex-col max-w-[1440px] px-[120px]  w-full"
        >
          <div className="h-full bg-white w-full ">
            <div className="flex gap-5 bg-[#0000000F] rounded-lg p-2 ">
              <div className="bg-[#28a745] w-1 h-auto rounded-full"></div>
              <div className="flex justify-between  w-full">
                <div>
                  <p className=" text-[18px] text-[#28a745] font-semibold mb-[5px]">
                    Lộ trình tài chính
                  </p>
                  <span className="text-[14px] text-[#9f9f9f]">
                    {formatDateTimeVn(props?.data?.updated_at || '')}
                  </span>
                </div>
                <div className="flex items-center justify-center ">
                  <button
                    onClick={() => setOpenPdf(true)}
                    className="bg-transparent border-2 border-[#28a745] rounded-full cursor-pointer ml-[10px] w-[40px] h-[40px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#28a745] group"
                  >
                    <FaEye className="text-[#28a745] group-hover:text-white transition-colors duration-300" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="bg-transparent border-2 border-[#28a745] rounded-full cursor-pointer ml-[10px] w-[40px] h-[40px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#28a745] group"
                  >
                    <FaDownload className="text-[#28a745] group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <PdfView
        openPdf={openPdf}
        setOpenPdf={setOpenPdf}
        pdfPath={props?.data?.financial_roadmap}
      />
    </section>
  );
};

export default FinanceRoadSection;
