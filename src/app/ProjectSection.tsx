'use client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { useInView } from 'react-intersection-observer';
import styles from './ProjectSection.module.css';
import ProjectGrid from '@/components/projectGrid';
import { getProjects } from '@/services/project.service';
import { Page } from '@/type/page.type';
import { use, useEffect, useState } from 'react';
import ProjectItem from '@/components/projectItem/projectItem';
import Skeleton from '@mui/material/Skeleton';

interface ProjectSectionProps {
  dataProject: any;
  dataRasing: any;
  pageRasing: typeof Page;
  pageInit: typeof Page;
}

const ProjectSection = (props: ProjectSectionProps) => {
  const { dataProject, pageInit, dataRasing, pageRasing } = props;

  const [page, setPage] = useState<typeof Page>(pageInit);
  const [projects, setProjects] = useState<any[]>(dataProject?.data || []);

  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <ProjectGrid dataRasing={dataRasing} pageRasing={pageRasing} />
      <section
        className={`${styles.showcaseSection} px-[12px] flex flex-col justify-center py-[40px] md:py-[62px] items-center bg-[#FFFFFF]`}
      >
        <div
          ref={ref}
          className="flex flex-col justify-center items-center max-w-screen-xl w-full"
        >
          <h2 className="text-center text-[28px] md:text-[38px] font-bold leading-[36px] md:leading-[48px] pb-10 uppercase font-sans">
            DỰ ÁN ĐÃ ĐẦU TƯ VÀ ƯƠM TẠO
          </h2>
          <div className="w-full flex justify-center items-center max-w-[1440px]">
            <div className="4xl:max-w-[2100px] justify-center items-center    3xl:max-w-[1600px] 2xl:max-w-[1400px] 4xl:gap-16 3xl:gap-8 flex flex-col md:flex-row flex-wrap gap-4 mb-8 max-w-[1440px] w-full">
              {projects?.length == 0 ? (
                <div className="flex flex-row gap-8">
                  <div>
                    <Skeleton variant="rectangular" width={300} height={300} />
                    <Skeleton variant="text" width={300} />
                    <Skeleton variant="text" width={300} />
                  </div>
                  <div>
                    <Skeleton variant="rectangular" width={300} height={300} />
                    <Skeleton variant="text" width={300} />
                    <Skeleton variant="text" width={300} />
                  </div>
                  <div>
                    <Skeleton variant="rectangular" width={300} height={300} />
                    <Skeleton variant="text" width={300} />
                    <Skeleton variant="text" width={300} />
                  </div>
                </div>
              ) : (
                projects
                  .slice(0, 3)
                  .map((project, index) => (
                    <ProjectItem
                      key={index}
                      id={project.id}
                      name={project.name}
                      mobilized_fund={project.mobilized_fund}
                      capital_raising_target={project.capital_raising_target}
                      images={project.images}
                      industries={project.industries}
                    />
                  ))
              )}
            </div>
          </div>
          <a
            href="/categories"
            className={`${styles.moreProjectsButton} font-sans`}
          >
            Tìm hiểu thêm các dự án{' '}
            <svg
              className={`w-4 h-4  -rotate-90 `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
