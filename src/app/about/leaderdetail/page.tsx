'use client';
import { useState } from 'react';

import { leaders } from '../page';

export default function LeaderDetail() {
  const [activeLeader, setActiveLeader] = useState(0); // Mặc định hiển thị leader đầu tiên
  const leader = leaders[activeLeader];

  return (
    <div className="flex flex-col  min-h-[600px]">
      
      <main className="flex justify-center flex-1 w-full">
        <div className="w-full max-w-[1440px] pt-16 lg:pt-0 relative">

          <img 
            src="/img/about/bg_about_us1.png" 
            alt="bg" 
            className="absolute pointer-events-none inset-0 w-full max-w-[1440px] h-full object-cover" 
          />


          <div className="flex justify-center absolute pointer-events-none inset-0 flex pt-[120px] lg:pt-[80px] bg-[rgba(72,185,109,0.05)] w-full h-full text-center lg:text-left lg:p-16">
            <h1 className="text-[#48B96D]/10 text-[52px] lg:text-[155px] font-bold">
              {leader.name}
            </h1>
          </div>


          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col-reverse lg:flex-row">

              <div className="flex-1 p-4 lg:p-16 flex flex-col justify-center gap-6 items-center text-center lg:text-left lg:items-start">
                <h2 className="text-[#48B96D] text-4xl lg:text-[64px] font-bold mb-4">
                  {leader.name}
                </h2>
                <p className="text-gray-600 text-base leading-[24px] lg:text-[24px] lg:leading-[32px]  mb-6">
                  {leader.fullTitle}
                </p>
                <p className="text-gray-700 pb-16 lg:pb-0 max-w-2xl leading-relaxed">
                  {leader.description}
                </p>
              </div>


              <div className="flex-1 flex items-center justify-center">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-[255px] h-[294px] lg:w-[592px] lg:h-[689px] object-cover" 
                />
              </div>
            </div>


            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white lg:bg-[#000000]/20 backdrop-blur-[24px] h-auto lg:h-[112px] flex items-center justify-center gap-[24px]">
              {leaders.map((nav, idx) => (
                <div 
                  key={idx}
                  className="relative w-[64px] lg:w-[244px] h-[64px] lg:h-[112px] flex flex-col items-center justify-start cursor-pointer py-2"
                  onClick={() => setActiveLeader(idx)}
                >
                  {idx === activeLeader && (
                    <div className="hidden lg:block absolute inset-0 bg-[#48B96D] skew-x-12 transform" />
                  )}
                  
                  <div className="relative z-10 flex flex-col justify-start items-center">
                    <img 
                      src={nav.image} 
                      alt={nav.name} 
                      className={`w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-full  object-cover ${idx === activeLeader ? 'bg-[#48B96D]' : 'bg-white'}`}
                    />
                    <div className="hidden lg:block w-full text-center">
                      <p className="text-sm font-semibold text-white">
                        {nav.name}
                      </p>
                      <p className="text-xs leading-[16px] text-white">
                        {nav.fullTitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}