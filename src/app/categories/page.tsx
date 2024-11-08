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
import { useQuery } from '@tanstack/react-query';
import { Page } from '@/type/page.type';
import { getProjects } from '@/services/project.service';

const PROJECTS = [
  {
    id: 1,
    img: '/img/egabid_pc.png',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed'],
  },
  {
    id: 2,
    img: '/img/Salala.png',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 3,
    img: '/img/hyperas_chain.png',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 4,
    img: '/img/egabid_pc.png',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 5,
    img: '/img/Salala.png',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 6,
    img: '/img/hyperas_chain.png',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
];
const PROJECTS2 = [
  {
    id: 1,
    img: '/img/19.jpg',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 2,
    img: '/img/18.jpg',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 3,
    img: '/img/16.jpg',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
    tag: ['seed', 'seriesA', 'seriesB'],
  },
  {
    id: 4,
    img: '/img/19.jpg',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
    tag: ['seriesA'],
  },
  {
    id: 5,
    img: '/img/18.jpg',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
    tag: ['seed'],
  },
  {
    id: 6,
    img: '/img/16.jpg',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
    tag: ['seriesB'],
  },
];
const CategoryPage: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [projects2, setProjects2] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const [page, setPage] = useState<typeof Page>(Page);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('all');

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => getProjects(page),
  });

  useEffect(() => {
    if (isSuccess) {
      setProjects(data.data);
      setProjects2(data.data);
    }
  }, [data]);

  const handleSearch = () => {
    setPage({ ...page, name__ilike: searchValue });
    refetch();
  };

  // useEffect(() => {
  //   setPage({ ...page, name__ilike: searchValue });
  // }, [searchValue]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                fontSize: '48px',
                lineHeight: '56px',
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

      <div className="flex flex-col justify-center items-center w-full">
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
              {projects.length === 0 && (
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
                {projects.map((project: any, index: number) => (
                  <Link href={`/detail-category/${project.id}`} key={index}>
                    <Box
                      className={`${inView4 ? 'animate-fadeIn scale-100' : 'translate-y-20 opacity-0 scale-0'} py-4 transition
               duration-300 ease-in-out delay-${index === 4 ? 300 : index * 100}
                 hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out
               `}
                    >
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                          src={
                            project.images[0] ||
                            'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
                          }
                          alt={project.name}
                          className="w-full h-[250px] object-cover"
                        />
                        <div className="p-4">
                          {/* <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
                            Series A
                          </span> */}
                          <h3 className="text-lg font-bold mt-2 font-sans uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal font-sans uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-sans font-semibold">
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              }).format(project?.capital_raising_target)}
                            </div>
                            <div className="h-2 bg-gray-300 rounded mt-2">
                              <div
                                className="bg-green-500 h-full rounded"
                                style={{
                                  width: `${(project?.mobilized_fund / project?.capital_raising_target) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between my-2 text-sm text-gray-600">
                              <span className="text-[#48B96D] font-semibold font-sans">
                                {project.funded}
                              </span>
                              <div className="flex gap-1 font-sans">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-semibold">
                                  $
                                  {(project?.mobilized_fund /
                                    project?.capital_raising_target) *
                                    100}
                                  %
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {project?.industries.map(
                                (industry: any, index: number) => (
                                  <span
                                    key={index}
                                    className="text-gray-800 px-2 py-1 font-sans rounded-md font-bold bg-[#F6F6F6]"
                                  >
                                    {industry.name}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Link>
                ))}
              </Box>
            </div>
          </div>
          <div
            className={`flex flex-row justify-center mb-8  ${projects.length < 6 && 'hidden'}`}
          >
            <button
              onClick={() => handleSearch()}
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
          <h2 className="flex text-center px-4 py-4 font-bold text-[32px] font-sans text-[#04141A] uppercase">
            dự án đang gọi vốn
          </h2>
          <div className="flex px-4  flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref2}>
              {projects.length === 0 && (
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
                {projects.map((project: any, index: number) => (
                  <Link href={`/detail-category/${project.id}`} key={index}>
                    <Box
                      className={`${inView4 ? 'animate-fadeIn scale-100' : 'translate-y-20 opacity-0 scale-0'} py-4 transition
             duration-300 ease-in-out delay-${index === 4 ? 300 : index * 100}
               hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out
             `}
                    >
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                          src={
                            project?.images[0] ||
                            'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
                          }
                          alt={project.name}
                          className="w-full h-[250px] object-cover"
                        />
                        <div className="p-4">
                          {/* <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
                          Series A
                        </span> */}
                          <h3 className="text-lg font-bold mt-2 font-sans uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal font-sans uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-sans font-semibold">
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              }).format(project?.capital_raising_target)}
                            </div>
                            <div className="h-2 bg-gray-300 rounded mt-2">
                              <div
                                className="bg-green-500 h-full rounded"
                                style={{
                                  width: `${(project?.mobilized_fund / project?.capital_raising_target) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between my-2 text-sm text-gray-600">
                              <span className="text-[#48B96D] font-semibold font-sans">
                                {project.funded}
                              </span>
                              <div className="flex gap-1 font-sans">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-semibold">
                                  $
                                  {(project?.mobilized_fund /
                                    project?.capital_raising_target) *
                                    100}
                                  %
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {project?.industries.map(
                                (industry: any, index: number) => (
                                  <span
                                    key={index}
                                    className="text-gray-800 px-2 py-1 font-sans rounded-md font-bold bg-[#F6F6F6]"
                                  >
                                    {industry.name}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Link>
                ))}
              </Box>
            </div>
          </div>
          <div
            className={`flex flex-row justify-center mb-8 ${projects.length < 6 && 'hidden'}`}
          >
            <button
              onClick={() => handleSearch()}
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
          <h2 className="flex text-center px-4  py-4 font-bold text-[32px] font-sans text-[#04141A] uppercase">
            DỰ ÁN ĐÃ ĐẦU TƯ ƯƠM TẠO
          </h2>
          <div className="flex px-4   flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref3}>
              {projects2.length === 0 && (
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
                {projects2.map((project: any, index: any) => (
                  <Link href={`/detail-category/${project.id}`} key={index}>
                    <Box
                      className={`${inView4 ? 'animate-fadeIn scale-100' : 'translate-y-20 opacity-0 scale-0'} py-4 transition
            duration-300 ease-in-out delay-${index === 4 ? 300 : index * 100}
              hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out
            `}
                    >
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                          src={
                            project?.images[0] ||
                            'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
                          }
                          alt={project.name}
                          className="w-full h-[250px] object-cover"
                        />
                        <div className="p-4">
                          {/* <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
                         Series A
                       </span> */}
                          <h3 className="text-lg font-bold mt-2 font-sans uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal font-sans uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-sans font-semibold">
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              }).format(project?.capital_raising_target)}
                            </div>
                            <div className="h-2 bg-gray-300 rounded mt-2">
                              <div
                                className="bg-green-500 h-full rounded"
                                style={{
                                  width: `${(project?.mobilized_fund / project?.capital_raising_target) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between my-2 text-sm text-gray-600">
                              <span className="text-[#48B96D] font-semibold font-sans">
                                {project.funded}
                              </span>
                              <div className="flex gap-1 font-sans">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-semibold">
                                  $
                                  {(project?.mobilized_fund /
                                    project?.capital_raising_target) *
                                    100}
                                  %
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {project?.industries.map(
                                (industry: any, index: number) => (
                                  <span
                                    key={index}
                                    className="text-gray-800 px-2 py-1 font-sans rounded-md font-bold bg-[#F6F6F6]"
                                  >
                                    {industry.name}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Link>
                ))}
              </Box>
            </div>
          </div>
          <div
            className={`flex flex-row justify-center mb-8 ${projects.length < 6 && 'hidden'}`}
          >
            <button
              onClick={() => handleSearch()}
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
