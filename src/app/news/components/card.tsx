import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const ProjectCard: React.FC<{
  project: any;
  className?: string;
}> = ({ project, className }) => {
  return (
    <Link
      href={'/news/newsdetail'}
      className={`${className} relative w-full h-auto `}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover rounded-lg "
      />
      <div className="absolute bottom-0 w-2/3 h-1/2 flex justify-between flex-col justify-end p-4 bg-[#FFFFFF]/80 bg-opacity-50 rounded-lg">
        <p className="text-base max-sm:hidden font-bold text-[#579DFF]">
          CÔNG NGHỆ
        </p>
        <h2 className="md:text-xl max-md:text-base xl:text-3xl text-sm  font-bold text-[#151515] line-clamp-3">
          {project.title}
        </h2>
        <p className="md:text-lg text-xs text-white">{project.subTitle}</p>
        <div className="flex justify-between gap-5">
          <p className="flex flex-row gap-2 text-sm text-[#656468]">
            <Calendar size={16} /> {project.date}
          </p>
        </div>
        <div>
          <button className="max-sm:hidden text-[#FFFFFF]/90 bg-[#48B96D] border-[#FFFFFF]/20 font-medium border-[1px]  rounded-full md:px-6 md:py-3 px-3 py-2 inline-flex">
            Đọc thêm
          </button>
        </div>
      </div>
    </Link>
  );
};
