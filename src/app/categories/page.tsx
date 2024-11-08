'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/app/categories/category.module.css';
import Link from 'next/link';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import router from 'next/router';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Page } from '@/type/page.type';
import { getProjects } from '@/services/project.service';
import ProjectItem from '@/components/projectItem/projectItem';

const CategoryPage: React.FC = () => {
  const [projects1, setProjects1] = useState<any>(null);
  const [projects2, setProjects2] = useState<any>(null);
  const [projects3, setProjects3] = useState<any>(null);
  const [page, setPage] = useState<typeof Page>({
    ...Page,
    status__eq: 0,
  });
  const [page2, setPage2] = useState<typeof Page>({
    ...Page,
    status__eq: 1,
  });
  const [page3, setPage3] = useState<typeof Page>({
    ...Page,
    status__eq: 2,
  });

  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('all');

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ['projects', page],
    queryFn: async () => {
      const res = await getProjects(page);
      if (!!projects1 && projects1.data.length > 0 && page.page > 1) {
        setProjects1({
          ...res,
          data: [...projects1.data, ...res.data],
        });
      } else {
        setProjects1(res);
      }
      return res;
    },
  });

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isSuccess: isSuccess2,
  } = useQuery({
    queryKey: ['projects', page2],
    queryFn: async () => {
      const res = await getProjects(page2);
      if (!!projects2 && projects2.data.length > 0 && page2.page > 1) {
        setProjects2({
          ...res,
          data: [...projects2.data, ...res.data],
        });
      } else {
        setProjects2(res);
      }
      return res;
    },
  });

  const {
    data: data3,
    isLoading: isLoading3,
    isError: isError3,
    isSuccess: isSuccess3,
  } = useQuery({
    queryKey: ['projects', page3],
    queryFn: async () => {
      const res = await getProjects(page3);
      if (!!projects3 && projects3.data.length > 0 && page3.page > 1) {
        setProjects3({
          ...res,
          data: [...projects3.data, ...res.data],
        });
      } else {
        setProjects3(res);
      }
      return res;
    },
  });

  const handleSetPage = (
    newPageData: Partial<typeof Page>,
    type: 0 | 1 | 2
  ) => {
    if (type === 0) {
      setPage({ ...page, ...newPageData });
    } else if (type === 1) {
      setPage2({ ...page2, ...newPageData });
    } else {
      setPage3({ ...page3, ...newPageData });
    }
  };

  const handleSearch = () => {
    setPage({ ...page, name__ilike: searchValue, page: 1 });
    setPage2({ ...page2, name__ilike: searchValue, page: 1 });
    setPage3({ ...page3, name__ilike: searchValue, page: 1 });
    refetch();
  };

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const {
    ref: ref1,
    inView: inView1,
    entry: entry1,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref2,
    inView: inView2,
    entry: entry2,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const {
    ref: ref3,
    inView: inView3,
    entry: entry3,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref4,
    inView: inView4,
    entry: entry4,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <>
      <div
        ref={ref}
        className="flex flex-col items-center justify-center font-sans w-full min-h-[772px] lg:h-[520px] bg-[#07212C] bg-[url('/img/category/categories_bg.png')] bg-no-repeat bg-cover bg-center"
      >
        <div className="  pb-[107px] justify-center">
          <div className="flex flex-col items-center justify-end text-center max-w-[1440px] text-[#0B3546] gap-[22px]">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '32px', md: '48px' },
                lineHeight: { xs: '40px', md: '56px' },
                textAlign: 'center',
                fontFamily: 'Inter',
              }}
              className={`${inView ? 'animate-fadeIn' : 'translate-y-20 opacity-0'} transition
               duration-300 ease-in-out`}
            >
              Danh mục đầu tư
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '24px',
                textAlign: 'center',
                fontFamily: 'Inter',
                padding: '0 50px',
              }}
              className={`${inView ? 'animate-fadeIn' : 'translate-y-20 opacity-0'} transition
               duration-300 delay-300 ease-in-out`}
            >
              Nghiên cứu và phát triển các dự án công nghệ Blockchain, AI,
              Fintech, Digital Banking,...
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full pb-10">
        <div className="max-w-[1200px] w-full">
          <div className="flex items-center px-4 flex-wrap justify-center gap-4  pt-[51px]">
            <input
              className=" h-[48px]   font-sans text-[16px] flex-grow  border-[1px]  border-[rgba(60, 60, 67, 0.1)],  rounded-lg pl-3 pr-10 text-lg bg-[#EFEFEF] focus:outline-none "
              type="text"
              placeholder="Nhập dự án cần tìm kiếm"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="  flex flex-row justify-end gap-4 font-sans flex-grow  items-center">
              {/* <p className="font-sans">Hiển thị </p> */}
              <FormControl
                sx={{
                  minWidth: 100,
                  height: '48px',
                  minHeight: '48px',
                  width: '100%',

                  '&:focus': {
                    outline: 'none',
                  },
                }}
                // size="medium"
              >
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={selectedValue}
                  onChange={handleChange}
                  sx={{
                    height: '48px',
                    minHeight: '48px',
                    border: '1px solid rgba(60, 60, 67, 0.1)',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '16px',

                    '&:focus': {
                      borderColor: '#48B96D',
                      outline: 'none',
                    },
                    '&:hover': {
                      borderColor: '#48B96D',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                >
                  <MenuItem
                    value={'all'}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Tất cả
                  </MenuItem>
                  <MenuItem
                    value={'seed'}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Seed
                  </MenuItem>
                  <MenuItem
                    value={'seriesA'}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Series A
                  </MenuItem>
                  <MenuItem
                    value={'seriesB'}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Series B
                  </MenuItem>
                  <MenuItem
                    value={'seriesC'}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Series C
                  </MenuItem>
                  <MenuItem
                    value={'PE'}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    PE
                  </MenuItem>
                  <MenuItem
                    value={'IPO'}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    IPO
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              sx={{
                flexGrow: 1,
                fontFamily: 'Inter',
                fontSize: '16px',
                backgroundColor: '#48B96D',
                color: 'white',
                height: '48px',
                maxWidth: '160px',

                '&:hover': {
                  backgroundColor: '#48B96D',
                },
              }}
              onClick={(e: React.MouseEvent) => handleSearch()}
            >
              Tìm kiếm
            </Button>
          </div>

          <h2 className="flex text-center py-4 px-4  font-bold text-[32px] font-sans mt-[48px]  text-[#04141A] uppercase">
            DỰ ÁN ĐÃ HOÀN THÀNH
          </h2>
          <div ref={ref4} className="flex px-4 w-full  flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref1}>
              {!projects1 && projects1?.data?.length == 0 && (
                <div className="flex justify-center items-center w-full h-[300px]">
                  <p className="text-lg font-sans text-gray-500">
                    Không có dự án nào
                  </p>
                </div>
              )}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  width: '100%',
                  gap: 2,
                }}
              >
                {projects1?.data?.map((project: any, index: number) => (
                  <ProjectItem
                    capital_raising_target={project.capital_raising_target}
                    images={project.images}
                    mobilized_fund={project.mobilized_fund}
                    id={project.id}
                    industries={project.industries}
                    key={index}
                    name={project.name}
                  />
                ))}
              </Box>
            </div>
          </div>
          <div
            className={`flex flex-row justify-center mb-8 ${!data?.meta?.hasNextPage && 'hidden'} `}
          >
            <button
              onClick={() => {
                handleSetPage({ page: data?.meta?.page + 1 }, 0);
              }}
              className="uppercase flex items-center font-sans bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black"
            >
              xem thêm
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-linear"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" />
              </svg>
            </button>
          </div>
          <h2 className="flex text-center px-4 py-4 md:mt-20 font-bold text-[32px] font-sans text-[#04141A] uppercase">
            dự án đang gọi vốn
          </h2>
          <div className="flex px-4  flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref2}>
              {!projects2 && projects2?.data?.length == 0 && (
                <div className="flex justify-center items-center w-full h-[300px]">
                  <p className="text-lg font-sans text-gray-500">
                    Không có dự án nào
                  </p>
                </div>
              )}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  gap: 2,
                }}
              >
                {data2?.data?.map((project: any, index: number) => (
                  <ProjectItem
                    capital_raising_target={project.capital_raising_target}
                    images={project.images}
                    mobilized_fund={project.mobilized_fund}
                    id={project.id}
                    industries={project.industries}
                    key={index}
                    name={project.name}
                  />
                ))}
              </Box>
            </div>
          </div>
          <div
            className={`flex flex-row justify-center mb-8  ${!data2?.meta?.hasNextPage && 'hidden'}`}
          >
            <button
              onClick={() => handleSetPage({ page: data2?.meta?.page + 1 }, 1)}
              className="uppercase flex font-sans items-center bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black"
            >
              xem thêm
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-linear"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" />
              </svg>
            </button>
          </div>
          <h2 className="flex text-center px-4 md:mt-20  py-4 font-bold text-[32px] font-sans text-[#04141A] uppercase">
            DỰ ÁN ĐÃ ĐẦU TƯ ƯƠM TẠO
          </h2>
          <div className="flex px-4   flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref3}>
              {!projects3 && projects3?.data?.length === 0 && (
                <div className="flex justify-center items-center w-full h-[300px]">
                  <p className="text-lg font-sans text-gray-500">
                    Không có dự án nào
                  </p>
                </div>
              )}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  gap: 2,
                }}
              >
                {data3?.data?.map((project: any, index: any) => (
                  <ProjectItem
                    capital_raising_target={project.capital_raising_target}
                    images={project.images}
                    mobilized_fund={project.mobilized_fund}
                    id={project.id}
                    industries={project.industries}
                    key={index}
                    name={project.name}
                  />
                ))}
              </Box>
            </div>
          </div>
          <div
            className={`flex flex-row justify-center mb-8 ${!data3?.meta?.hasNextPage && 'hidden'} `}
          >
            <button
              onClick={() => handleSetPage({ page: data3?.meta?.page + 1 }, 2)}
              className="uppercase flex items-center font-sans bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black"
            >
              xem thêm
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-linear"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
