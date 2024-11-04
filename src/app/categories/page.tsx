'use client';

import React from 'react';
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

const projects = [
  {
    img: '/img/egabid_pc.png',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/Salala.png',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/hyperas_chain.png',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/egabid_pc.png',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/Salala.png',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/hyperas_chain.png',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$1.500.00',
    progress: 75,
    category: 'CÔNG NGHỆ',
  },
];
const projects2 = [
  {
    img: '/img/19.jpg',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/18.jpg',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/16.jpg',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/19.jpg',
    name: 'EGABID',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/18.jpg',
    name: 'SALALA AI',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
  },
  {
    img: '/img/16.jpg',
    name: 'Hyperas Chain',
    amount: '$2.000.000',
    funded: '$2.000.000',
    progress: 100,
    category: 'CÔNG NGHỆ',
  },
];
const CategoryPage: React.FC = () => {
  const [age, setAge] = React.useState('10');

  const handleChange = (event: any) => {
    setAge(event.target.value);
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
        className="flex flex-col items-center justify-center font-sans w-full h-[520px] bg-[#07212C] bg-[url('/img/category/categories_bg.png')] bg-no-repeat bg-cover bg-center"
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
        <div className="max-w-[1200px]">
          <div className="flex items-center justify-center gap-4  pt-[51px]">
            <input
              className=" h-[48px]  font-sans text-[16px] flex-grow  border-[1px]  border-[rgba(60, 60, 67, 0.1)],  rounded-lg pl-3 pr-10 text-lg bg-[#EFEFEF] focus:outline-none "
              type="text"
              placeholder="Nhập dự án cần tìm kiếm"
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
                  value={age}
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
                    value={10}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Tất cả
                  </MenuItem>
                  <MenuItem
                    value={20}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Seed
                  </MenuItem>
                  <MenuItem
                    value={30}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Series A
                  </MenuItem>
                  <MenuItem
                    value={40}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Series B
                  </MenuItem>
                  <MenuItem
                    value={50}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    Series C
                  </MenuItem>
                  <MenuItem
                    value={60}
                    sx={{ height: '48px', minHeight: '48px' }}
                  >
                    PE
                  </MenuItem>
                  <MenuItem
                    value={70}
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
            >
              Tìm kiếm
            </Button>
          </div>

          <h2 className=" py-4 font-bold text-[32px] font-sans mt-[48px]  text-[#04141A] uppercase">
            dỰ ÁN đã hoàn thành
          </h2>
          <div ref={ref4} className="flex flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref1}>
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
                {projects.map((project, index) => (
                  <Link href="/detail-category" key={index}>
                    <Box
                      className={`${inView4 ? 'animate-fadeIn scale-100' : 'translate-y-20 opacity-0 scale-0'} py-4 transition
               duration-300 ease-in-out delay-${index === 4 ? 300 : index * 100}
                 hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out
               `}
                    >
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                          src={project.img}
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
                              {project.amount}
                            </div>
                            <div className="h-2 bg-gray-300 rounded mt-2">
                              <div
                                className="bg-green-500 h-full rounded"
                                style={{
                                  width: `${project.progress}%`,
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
                                  {project.progress}%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-800 px-2 py-1 font-sans rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
                              <span className="text-gray-800 px-2 py-1 font-sans rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
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
          <div className="flex flex-row justify-center mb-8">
            <button className="uppercase flex items-center font-sans bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black">
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
          <h2 className=" py-4 font-bold text-[32px] font-sans text-[#04141A] uppercase">
            dự án đang gọi vốn
          </h2>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref2}>
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
                {projects.map((project, index) => (
                  <Link href="/detail-category" key={index}>
                    <Box
                      className={`${inView2 ? 'animate-fadeIn scale-100' : 'translate-y-20 opacity-0 scale-0'} py-4 transition
               duration-300 ease-in-out delay-${index === 4 ? 300 : index * 100}
                hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out
               `}
                    >
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.name}
                          className="w-full h-[250px] object-cover"
                        />
                        <div className="p-4">
                          {/* <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
                            Series A
                          </span> */}
                          <h3 className="text-lg font-bold font-sans mt-2 uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal font-sans uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-sans font-semibold">
                              {project.amount}
                            </div>
                            <div className="h-2 bg-gray-300 rounded mt-2">
                              <div
                                className="bg-green-500 h-full rounded"
                                style={{
                                  width: `${project.progress}%`,
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between my-2 text-sm text-gray-600">
                              <span className="text-[#48B96D] font-sans font-semibold">
                                {project.funded}
                              </span>
                              <div className="flex gap-1 font-sans">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-sans font-semibold">
                                  {project.progress}%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-800 font-sans px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
                              <span className="text-gray-800 font-sans px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
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
          <div className="flex flex-row justify-center mb-8">
            <button className="uppercase flex font-sans items-center bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black">
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
          <h2 className=" py-4 font-bold text-[32px] font-sans text-[#04141A] uppercase">
            dỰ ÁN ĐÃ ĐẦU TƯ ƯƠM TẠ0
          </h2>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full bg-white" ref={ref3}>
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
                {projects2.map((project, index) => (
                  <Link href="/detail-category" key={index}>
                    <Box
                      className={`${inView3 ? 'animate-fadeIn scale-100' : 'translate-y-20 opacity-0 scale-0'} py-4 transition
               duration-300 ease-in-out delay-${index === 4 ? 300 : index * 100}  hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out`}
                    >
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.name}
                          className="w-full h-[250px] object-cover"
                        />
                        <div className="p-4">
                          {/* <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
                            Series A
                          </span> */}
                          <h3 className="text-lg font-bold font-sans mt-2 uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal font-sans uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-sans font-semibold">
                              {project.amount}
                            </div>
                            <div className="h-2 bg-gray-300 rounded mt-2">
                              <div
                                className="bg-green-500 h-full rounded"
                                style={{
                                  width: `${project.progress}%`,
                                }}
                              ></div>
                            </div>
                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                              <span className="text-[#48B96D] font-sans font-semibold">
                                {project.funded}
                              </span>
                              <div className="flex gap-1 font-sans">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-semibold">
                                  {project.progress}%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-800 px-2 py-1 font-sans rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
                              <span className="text-gray-800 px-2 py-1 font-sans rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
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
          <div className="flex flex-row justify-center mb-8">
            <button className="uppercase flex items-center font-sans bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black">
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
