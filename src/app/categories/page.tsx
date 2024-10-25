'use client';

import React from 'react';
import styles from '@/app/categories/category.module.css';
import Link from 'next/link';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

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
    img: '/img/salala.png',
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
    img: '/img/salala.png',
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
  return (
    <>
      <div className={styles.header}>
        <div className="max-w-[1200px] lg:w-[1200px] flex flex-col justify-start items-start">
          <p className="text-white text-[40px] font-bold">Danh mục đầu tư</p>
          <p className="text-white text-[32px] font-normal mt-2">
            Nghiên cứu và phát triển các dự án công nghệ
            <br /> Blockchain, AI, Fintech, Digital Banking,...
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1200px]">
          <div className="flex items-center  pt-[51px]">
            <input
              className="w-full h-[57px] border-2 border-[#48B96D] rounded-lg pl-3 pr-10 text-lg"
              type="text"
              placeholder="Nhập dự án cần tìm kiếm"
            />
          </div>
          <div className=" pt-4 flex flex-row justify-end gap-4 items-center">
            <p>Hiển thị </p>
            <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
              <Select
                className="rounded-full text-center"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Tất cả</MenuItem>
                <MenuItem value={20}>Seed</MenuItem>
                <MenuItem value={30}>Series A</MenuItem>
                <MenuItem value={40}>Series B</MenuItem>
                <MenuItem value={50}>Series C</MenuItem>
                <MenuItem value={60}>PE</MenuItem>
                <MenuItem value={70}>IPO</MenuItem>
              </Select>
            </FormControl>
          </div>
          <h2 className=" py-4 font-bold text-4xl text-[#04141A] uppercase">
            dỰ ÁN đã hoàn thành
          </h2>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full bg-white">
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
                  <Link href="/detail-category">
                    <Box key={index} className="py-4">
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
                          <h3 className="text-lg font-bold mt-2 uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-semibold">
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
                              <span className="text-[#48B96D] font-semibold">
                                {project.funded}
                              </span>
                              <div className="flex gap-1">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-semibold">
                                  {project.progress}%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-800 px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
                              <span className="text-gray-800 px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
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
            <button className="uppercase flex items-center bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black">
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
          <h2 className=" py-4 font-bold text-4xl text-[#04141A] uppercase">
            dự án đang gọi vốn
          </h2>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full bg-white">
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
                  <Link href="/detail-category">
                    <Box key={index} className="py-4">
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
                          <h3 className="text-lg font-bold mt-2 uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-semibold">
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
                              <span className="text-[#48B96D] font-semibold">
                                {project.funded}
                              </span>
                              <div className="flex gap-1">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-semibold">
                                  {project.progress}%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-800 px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
                              <span className="text-gray-800 px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
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
            <button className="uppercase flex items-center bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black">
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
          <h2 className=" py-4 font-bold text-4xl text-[#04141A] uppercase">
            dỰ ÁN ĐÃ ĐẦU TƯ ƯƠM TẠ0
          </h2>
          <div className="flex flex-col lg:flex-row ">
            {/* <div className="lg:w-[20%] md:w-full">
          <div className="flex flex-col gap-4">
            <h4 className="text-[22px] font-bold mb-1">Lĩnh vực đầu tư</h4>
            <div className="flex lg:flex-col md:flex-row flex-wrap gap-4">
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="investmentField"
                  value="all"
                />
                Tất cả
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-7 h-7 rounded-full"
                  type="radio"
                  name="investmentField"
                  value="tech"
                />{' '}
                Công nghệ
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="investmentField"
                  value="e-commerce"
                />{' '}
                Thương mại điện tử
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="investmentField"
                  value="direct"
                />{' '}
                Đầu tư trực tiếp
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-12">
            <h4 className="text-[22px] font-bold mb-1">Trạng thái dự án</h4>
            <div className="flex flex-wrap lg:flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="projectStatus"
                  value="all"
                />{' '}
                Tất cả
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="projectStatus"
                  value="funding"
                />{' '}
                Đang gọi vốn
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="projectStatus"
                  value="incubator"
                />{' '}
                Đã đầu tư & ươm tạo
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-12">
            <h4 className="text-[22px] font-bold mb-1">Giai đoạn gọi vốn</h4>
            <div className="flex flex-wrap lg:flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="fundingStage"
                  value="all"
                />{' '}
                Tất cả
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="fundingStage"
                  value="seed"
                />{' '}
                Seed
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="fundingStage"
                  value="seriesA"
                />{' '}
                Series A
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="fundingStage"
                  value="seriesB"
                />{' '}
                Series B
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="fundingStage"
                  value="seriesC"
                />{' '}
                Series C
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="fundingStage"
                  value="pe"
                />{' '}
                PE
              </label>
              <label className="flex items-center gap-2 text-[20px] font-normal">
                <input
                  className="w-[28px] h-[28px] rounded-full"
                  type="radio"
                  name="fundingStage"
                  value="ipo"
                />{' '}
                IPO
              </label>
            </div>
          </div>
        </div> */}
            <div className="w-full bg-white">
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
                  <Link href="/detail-category">
                    <Box key={index} className="py-4">
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
                          <h3 className="text-lg font-bold mt-2 uppercase">
                            {project.name}
                          </h3>
                          <div className="mt-4">
                            <div className="text-sm font-normal uppercase">
                              Mục tiêu huy động
                            </div>
                            <div className="text-xl font-semibold">
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
                              <span className="text-[#48B96D] font-semibold">
                                {project.funded}
                              </span>
                              <div className="flex gap-1">
                                <span>Hoàn thành</span>
                                <p className="text-[#48B96D] font-semibold">
                                  {project.progress}%
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-800 px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
                                {project.category}
                              </span>
                              <span className="text-gray-800 px-2 py-1 rounded-md font-bold bg-[#F6F6F6]">
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
            <button className="uppercase flex items-center bg-white border-2 border-black text-black px-5 py-2 font-bold text-base rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-black/10 hover:text-black">
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
