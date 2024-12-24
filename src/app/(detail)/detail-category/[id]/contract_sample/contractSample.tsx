'use client';
import PdfView from '@/components/pdfView';
import { formatDateTimeVn } from '@/util/util';
import { useState } from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

interface ContractSampleSectionProps {
  data: any;
}

const ContractSampleSection = (props: ContractSampleSectionProps) => {
  const [selectedPdf, setSelectedPdf] = useState('');
  const [openPdf, setOpenPdf] = useState(false);

  const handleOpenPdf = (pdf: string) => {
    setSelectedPdf(pdf);
    setOpenPdf(true);
  };

  const handleDownload = (pdf: string) => {
    const link = document.createElement('a');
    link.href = pdf;
    link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col justify-start items-center w-full min-h-[100vh]">
      {props?.data?.contract_template?.map((item: any, index: number) => (
        <div
          key={index}
          className="flex flex-col max-w-[1440px] md:px-[120px] w-full"
        >
          <div className="h-full bg-white w-full ">
            <div className="flex gap-5 bg-[#0000000F] rounded-lg p-2 ">
              <div className="bg-[#28a745] w-1 h-auto rounded-full"></div>
              <div className="flex justify-between  w-full">
                <div>
                  <p className="text-[16px] text-[#28a745] font-semibold mb-[5px]">
                    Mẫu hợp đồng
                  </p>
                  <span className="text-[14px] text-[#9f9f9f]">
                    {formatDateTimeVn(props?.data?.updated_at || '')}
                  </span>
                </div>
                <div className="flex items-center justify-center ">
                  <button
                    onClick={() => handleOpenPdf(item)}
                    className="bg-transparent border-2 border-[#28a745] rounded-full cursor-pointer ml-[10px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#28a745] group"
                  >
                    <FaEye className="text-[#28a745] group-hover:text-white transition-colors duration-300" />
                  </button>
                  <button
                    onClick={() => handleDownload(item)}
                    className="bg-transparent border-2 border-[#28a745] rounded-full cursor-pointer ml-[10px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#28a745] group"
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
        pdfPath={selectedPdf}
      />
    </section>
  );
};

export default ContractSampleSection;
