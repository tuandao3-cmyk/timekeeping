'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { leaders } from '../../about';
import { IoArrowBack } from 'react-icons/io5';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeaderDetail() {
  const router = useRouter();
  const params = useParams();
  const currentLeaderId = Number(params.id);
  const currentLeaderIndex = leaders.findIndex(
    (leader) => leader.id === currentLeaderId
  );
  const [activeLeader, setActiveLeader] = useState(
    currentLeaderIndex !== -1 ? currentLeaderIndex : 0
  );

  const leader = leaders[activeLeader];

  const handleLeaderChange = (idx: number) => {
    setActiveLeader(idx);
    router.push(`/about/leaderdetail/${leaders[idx].id}`);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [activeLeader]);

  return (
    <div className=" flex flex-col w-full h-full ">
      <main className="flex justify-center flex-1 w-full h-full overflow-hidden bg-[#48B96D0D] min-h-[90vh]">
        <div className="w-full max-w-[1440px] pt-16 lg:pt-0 relative">
          <Image
            width={1440}
            height={748}
            src="/img/about/bg_about_us1.png"
            alt="bg"
            className="absolute pointer-events-none inset-0 w-full max-w-[1440px] h-full object-cover "
            layout="responsive"
          />

          <div className=" absolute pointer-events-none inset-0 flex whitespace-nowrap overflow-hidden pt-[120px] lg:pt-[80px] bg-[rgba(72,185,109,0.05)] w-full h-full justify-center lg:justify-start text-center lg:text-left lg:p-16">
            <h1 className="text-[#48B96D]/10 text-[52px] lg:text-[155px] font-bold ">
              {leader.name}
            </h1>
          </div>

          <div className="relative z-10 flex flex-col w-ful h-full">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex-1  lg:p-16 flex flex-col justify-center gap-6 items-center text-center lg:text-left lg:items-start">
                <div className="bg-white w-full lg:w-auto lg:p-4 lg:bg-transparent">
                  <h2 className="text-[#48B96D] text-4xl lg:text-[64px] leading-[60px] lg:leading-[72px] font-bold lg:mb-4">
                    {leader.name}
                  </h2>
                  <p className="text-[#04141A] text-base leading-[24px] lg:text-[24px] lg:leading-[32px]  mb-6">
                    {leader.fullTitle}
                  </p>
                </div>
                <p className="text-gray-700 p-4 pb-16 lg:pb-0 max-w-2xl leading-relaxed">
                  {leader.description}
                </p>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <Image
                  width={255}
                  height={689}
                  quality={100}
                  src={leader.image}
                  alt={leader.name}
                  className="w-[255px] h-[294px] lg:w-[592px] lg:h-[689px] object-cover px-2"
                  layout="responsive"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white lg:bg-[#000000]/20 backdrop-blur-[24px] h-auto lg:h-[112px] flex items-center justify-start gap-[24px]">
              <button
                onClick={() => router.push('/about')}
                className="flex items-center justify-center w-[66px]  lg:w-[120px] h-[66px] lg:h-[112px]  bg-black lg:bg-transparent "
              >
                <IoArrowBack className="w-10 h-10 text-white" />
              </button>
              <div className="w-full flex justify-center">
                <AnimatePresence>
                  {leaders.map((nav, idx) => (
                    <div
                      key={idx}
                      className="relative w-[64px] lg:w-[244px] h-[64px] lg:h-[112px] flex flex-col items-center justify-start cursor-pointer py-2"
                      onClick={() => setActiveLeader(idx)}
                    >
                      {idx === activeLeader && (
                        <motion.div
                          className="absolute inset-0 bg-[#48B96D] skew-x-12"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }} // Trượt ra bên phải
                          transition={{ duration: 0.3 }} // Thời gian chuyển động
                        />
                      )}

                      <div className="relative z-10 flex flex-col justify-start items-center">
                        <Image
                          width={48}
                          height={48}
                          quality={100}
                          src={nav.image}
                          alt={nav.name}
                          layout="responsive"
                          className={`max-w-[48px] max-h-[48px] lg:w-[64px] lg:h-[64px] rounded-full  object-cover ${idx === activeLeader ? 'bg-[#48B96D]' : 'bg-white'}`}
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
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
