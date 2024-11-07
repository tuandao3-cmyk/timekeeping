import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { formatDateTimeVn } from '@/util/util';
import { Typography } from '@mui/material';

export const ProjectCard: React.FC<{
  project: any;
  className?: string;
}> = ({ project, className }) => {
  console.log(project.link_img);

  return (
    <Link
      href={`/news/${project.id}`}
      className={`${className} relative w-full h-auto `}
    >
      <img
        src={
          project?.link_img ||
          'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
        }
        alt={project.title}
        className="w-full h-full object-cover rounded-lg "
      />
      <div className="absolute bottom-0 w-2/3 h-1/2 md:flex justify-between flex-col justify-end p-4 bg-[#FFFFFF]/80 bg-opacity-50 rounded-lg  hidden md:block">
        <p className="text-base max-sm:hidden font-bold text-[#579DFF]">
          {project?.blog_category?.name || ''}
        </p>
        <Typography
          fontFamily={'Inter'}
          fontWeight={700}
          fontSize={'32px'}
          lineHeight={'40px'}
          letterSpacing={'-1%'}
          display="-webkit-box"
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {project.title}
        </Typography>

        <div className="flex justify-between gap-5">
          <Typography
            display={'flex'}
            flexDirection={'row'}
            color="#656468"
            fontFamily={'Inter'}
            fontWeight={400}
            fontSize={'14px'}
            lineHeight={'24px'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'8px'}
          >
            <Calendar size={16} /> {formatDateTimeVn(project.updated_at)}
          </Typography>
        </div>
        <div>
          <Link
            href={`news/${project.id}`}
            className="max-sm:hidden text-[#FFFFFF]/90 bg-[#2f454e] hover:bg-[#48B96D]  border-[#2f454e] hover:border-[#FFFFFF]/20 font-medium border-[1px]  rounded-full md:px-6 md:py-3 px-3 py-2 inline-flex"
          >
            Đọc thêm
          </Link>
        </div>
      </div>
      <div className="w-full block md:hidden mt-5 flex-col ">
        <p className="text-base mt-5 font-bold text-[#579DFF] ">
          Tin Tài Chính
        </p>
        <h2 className="mt-5  text-[24px]  font-bold text-[#151515] line-clamp-3">
          {project.title}
        </h2>
        <div className="mt-5 flex justify-between gap-5">
          <p className="flex flex-row gap-2 text-sm text-[#656468]">
            <Calendar size={16} /> {project.date}
          </p>
        </div>
      </div>
    </Link>
  );
};
