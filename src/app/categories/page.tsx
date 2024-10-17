'use client';

import React from 'react';
import styles from '@/app/categories/category.module.css';
import Link from 'next/link';

import { Box } from '@mui/material';

const CategoryPage: React.FC = () => {
  const projects = [
    {
      img: '/img/19.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/18.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/16.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/17.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/19.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/18.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/16.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/17.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/19.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/18.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/16.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
    {
      img: '/img/17.jpg',
      name: 'Hyperas Chain',
      amount: '$2.000.000',
      funded: '$1.500.00',
      progress: 75,
      category: 'CÔNG NGHỆ',
    },
  ];
  return (
    <>
      <div className="flex items-center p-10">
        <div className="w-[20%] text-2xl font-normal">Tìm kiếm theo</div>
        <input
          className="w-[80%] h-[57px] border-2 border-[#48B96D] rounded-lg pl-3 pr-10 text-lg"
          type="text"
          placeholder="Nhập dự án cần tìm kiếm"
        />
      </div>
      <div className="flex flex-col lg:flex-row px-10">
        <div className="lg:w-[20%] md:w-full">
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
        </div>
        <div className="lg:w-[80%] md:w-full md:pt-10 bg-white">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                // lg: "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {projects.map((project, index) => (
              <Link href="/detail-category">
                <Box key={index} className="p-4"> 
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
                        Series A
                      </span>
                      <h3 className="text-lg font-bold mt-2">{project.name}</h3>
                      <div className="mt-4">
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
                          <span>{project.funded}</span>
                          <span>Được tài trợ {project.progress}%</span>
                        </div>
                        <div className="text-gray-800 mt-2 font-semibold">
                          {project.category}
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
    </>
  );
};
export default CategoryPage;
