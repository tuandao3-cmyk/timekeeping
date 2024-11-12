import { useState } from 'react';
import ProgressBar from '../progress';
import Image from 'next/image';

interface ProjectItemProps {
  id?: string;
  images: string[];
  name?: string;
  capital_raising_target: number;
  mobilized_fund: number;
  industries?: any[];
}

function ProjectItem(props: ProjectItemProps) {
  const {
    id,
    images,
    name,
    capital_raising_target,
    mobilized_fund,
    industries,
  } = props;
  const [percent, setPercent] = useState(() => {
    return (mobilized_fund / capital_raising_target) * 100;
  });

  return (
    <a
      href={`/detail-category/${id}`}
      className="flex flex-col justify-center basis-1 items-center flex-grow max-w-[384px] w-full max-h-[484px] rounded-[20px] hover:shadow-lg hover:scale-105  transition-all duration-300 ease-in-out"
    >
      <div
        className={` group  duration-300 ease-in-out flex flex-col gap-[12px] transform max-w-[384px] w-full`}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <Image
            width={384}
            height={250}
            src={images[0] || '/img/egabid_pc.png'}
            alt={name || 'HyraCap'}
            className={` w-full max-h-[250px] max-w-[384px] rounded-[10px]`}
            style={{ aspectRatio: '483/384' }}
          />
        </div>

        <div className="text-left w-full flex flex-col gap-[20px] p-[12px]">
          <h3 className=" text-[24px] font-bold  w-full  font-sans uppercase line-clamp-1">
            {name || ''}
          </h3>
          <div className="flex flex-col gap-[9.22px]">
            <div className="flex flex-col gap-[3px] ">
              <span
                className="text-[14px] leading-[24px] text-[#000000B2] font-normal block  font-sans"
                style={{
                  fontWeight: 400,
                }}
              >
                MỤC TIÊU HUY ĐỘNG
              </span>
              <p
                className=" text-[20px] leading-[28px]  font-sans text-[#04141A]"
                style={{
                  letterSpacing: '-1%',
                  fontWeight: 600,
                }}
              >
                ${capital_raising_target.toLocaleString() || 0}
              </p>
            </div>
            <ProgressBar progress={percent} />
            <div className="flex justify-between">
              <div
                className="text-[14px] leading-[24px] font-sans flex gap-1 flex-wrap"
                style={{
                  fontWeight: 400,
                }}
              >
                <span
                  className="text-[#48B96D]"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  ${mobilized_fund.toLocaleString() || 0}
                </span>
                <span className="text-[#000000B2]  font-sans">Đã huy động</span>
              </div>
              <div
                className="text-[14px] leading-[24px] font-sans flex gap-1 flex-wrap"
                style={{
                  fontWeight: 400,
                }}
              >
                <span
                  className="text-[#48B96D]"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {percent.toLocaleString()}%
                </span>
                <span className="text-[#000000B2]  font-sans">Hoàn thành</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-[1.54px] h-[24px]">
            {industries?.map((industry, index) => (
              <span
                key={index}
                className="text-[11px] leading-[18px] font-sans text-[#000000B2] bg-[#0000000F] rounded-[3px] p-[3px]"
                style={{
                  fontWeight: 700,
                }}
              >
                {industry.name}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FFFFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
          <a
            href={`/detail-category/${id}`}
            className="bg-[#4CAF50] w-full font-sans text-white text-sm font-medium  py-2 rounded-full cursor-pointer text-center justify-center flex items-center"
          >
            Xem chi tiết
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
