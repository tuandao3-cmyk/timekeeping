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

const ProjectSection = () => {
  const [page, setPage] = useState<typeof Page>({
    ...Page,
    status__eq: 2,
  });
  const [projects, setProjects] = useState<any[]>([]);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => getProjects(page),
  });

  useEffect(() => {
    if (isSuccess) {
      setProjects(data.data);
    }
  }, [data]);

  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      {' '}
      <ProjectGrid />
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
              {isLoading ? (
                <div>Loading...</div>
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
