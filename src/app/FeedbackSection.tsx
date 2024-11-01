'use client';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const feedbacks = [
  {
    id: 1,
    content:
      'Sản phẩm đầu tư của HyraCap rất phù hợp với tôi. Lãi suất tốt giúp giảm áp lực về tài chính cho gia đình.',
    name: 'Lê Huyền Bảo Châu',
    position: 'Chuyên viên kinh doanh',
    image: '/img/user.png',
    direction: 'left',
  },
  {
    id: 2,
    content:
      'Sản phẩm đầu tư của HyraCap rất phù hợp với tôi. Lãi suất tốt giúp giảm áp lực về tài chính cho gia đình. của HyraCap rất phù hợp với tôi của HyraCap rất phù hợp với tôi',
    name: 'Lê Huyền Bảo Châu',
    position: 'Chuyên viên kinh doanh',
    image: '/img/user.png',
    direction: 'right',
  },
  {
    id: 3,
    content:
      'Sản phẩm đầu tư của HyraCap rất phù hợp với tôi. Lãi suất tốt giúp giảm áp lực về tài chính cho gia đình. của HyraCap rất phù hợp với tôi của HyraCap rất phù hợp với tôi',
    name: 'Lê Huyền Bảo Châu',
    position: 'Chuyên viên kinh doanh',
    image: '/img/user.png',
    direction: 'left',
  },
];

const FeedbackSection: React.FC = () => {
  const feedbackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    feedbackRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      feedbackRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center py-[62px]"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-[1440px] gap-[24px]">
        <div className="flex flex-col items-center justify-center gap-[16px] max-w-[685px]  ">
          <Typography
            sx={{
              color: '#04141A',
              fontWeight: 700,
              fontSize: 40,
              lineHeight: '48px',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontFamily: 'Inter',
            }}
            className={`${
              inView
                ? 'opacity-1 translate-y-0'
                : 'opacity-0 translate-y-[20px]'
            }
            transition ease-in-out duration-300 
            `}
          >
            Phản hồi về khách hàng
          </Typography>
          <Typography
            sx={{
              color: '#000000B2',
              fontSize: 32,
              fontWeight: 400,
              lineHeight: '40px',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontFamily: 'Inter',
            }}
            className={`${
              inView
                ? 'opacity-1 translate-y-0'
                : 'opacity-0 translate-y-[20px]'
            }
            transition ease-in-out duration-300 delay-100 
            `}
          >
            HyraCap luôn quan tâm đến phản hồi của từng khách hàng
          </Typography>
        </div>
        <div
          className={`bg-[url('/img/circle-bg.png')] bg-no-repeat bg-center bg-contain w-[900px] min-h-[100px] gap-[16px] flex flex-col items-center justify-center pt-[16px]`}
        >
          {feedbacks.map((feedback, index) => {
            return (
              <div
                key={feedback.id}
                className={`flex w-full ${
                  index === 1
                    ? 'justify-end items-end'
                    : 'justify-start items-start'
                }
                transition ease-in-out duration-1000 delay-${index * 100} ${inView ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-[-200px]'}
                `}
              >
                <div
                  className={` group bg-[#FFFFFF] border-[#D3EDDC] hover:bg-[#48B96DCC] hover:shadow-[0px_4px_10px_0px_#48B96D80] transition ease-in-out duration-100 border-[1px] p-[20px] rounded-[16px] flex flex-col gap-[20px] ${
                    index === 0 ? 'max-w-[500px]' : 'max-w-[653px]'
                  }
                  
                  `}
                >
                  <Typography
                    sx={{
                      color: '#000000E5',
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: '26px',
                      textAlign: 'left',
                      fontFamily: 'Inter',
                    }}
                    className="group-hover:text-white"
                  >
                    {feedback.content}
                  </Typography>
                  <div className="flex gap-[16px]">
                    <Image
                      src={feedback.image}
                      alt="user"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <Typography
                        sx={{
                          color: '#000000E5',
                          fontWeight: 600,
                          fontSize: 14,
                          lineHeight: '24px',
                          fontFamily: 'Inter',
                        }}
                        className="group-hover:text-white"
                      >
                        {feedback.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: 12,
                          lineHeight: '20px',
                          color: '#0000008F',
                          fontFamily: 'Inter',
                        }}
                        className="group-hover:text-white"
                      >
                        {feedback.position}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
