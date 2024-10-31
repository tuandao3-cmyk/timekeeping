'use client';
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
    <div className="bg-[#FFFFFF] 4xl:py-10 3xl:py-8 py-16 relative overflow-hidden">
      {/* Vòng tròn đồng tâm */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        {/* <div className="w-[800px] h-[800px] rounded-full border-2 border-[#48B96D] opacity-20"></div> */}
        <div className="absolute top-1/2 left-1/2 4xl:w-[1200px] 4xl:h-[1200px] 3xl:w-[800px] 3xl:h-[800px] w-[600px] h-[600px] rounded-full border-2 border-[#48B96D] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 4xl:w-[800px] 4xl:h-[800px] 3xl:w-[600px] 3xl:h-[600px] w-[400px] h-[400px] rounded-full border-2 border-[#48B96D] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 4xl:w-[400px] 4xl:h-[400px] 3xl:w-[300px] 3xl:h-[300px] w-[200px] h-[200px] rounded-full border-2 border-[#48B96D] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          ref={ref}
          className={`4xl:text-[72px] 4xl:leading-[80px] 3xl:text-[48px] 3xl:leading-[50px] 4xl:mb-8 3xl:mb-6 text-4xl font-inter leading-[48px] font-bold text-center mb-2
   ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          PHẢN HỒI VỀ KHÁCH HÀNG
        </h2>
        <p className="4xl:text-[60px] 4xl:leading-[72px] 4xl:max-w-[40vw] 3xl:text-[36px] 3xl:leading-[42px] text-center font-inter text-3xl leading-10 text-gray-600 mb-12 max-w-[42vw] mx-auto">
          HYRACAP LUÔN QUAN TÂM ĐẾN PHẢN HỒI CỦA TỪNG KHÁCH HÀNG
        </p>
        <div className="relative 4xl:h-[1400px] 3xl:h-[1000px] h-[800px]">
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback.id}
              ref={(el) => {
                if (el) feedbackRefs.current[index] = el;
              }}
              className={`bg-white rounded-lg shadow-lg p-6 absolute transition-all duration-500 opacity-0 hover:bg-[#48B96D] group ${
                index === 0
                  ? 'top-[30px]  right-1/2 max-w-md 4xl:top-[130px] 4xl:max-w-[800px] 3xl:top-[50px] 3xl:max-w-[700px]'
                  : index === 1
                    ? 'top-[210px] 4xl:top-[390px] 4xl:max-w-[1100px] left-1/4 -translate-x-1/2 max-w-xl 3xl:top-[280px] 3xl:max-w-[800px]'
                    : 'top-[418px] 4xl:top-[690px] 4xl:max-w-[1100px] right-1/2 max-w-xl 3xl:top-[540px] 3xl:max-w-[800px]'
              } ${index === 0 ? '-translate-x-full' : index === 2 ? 'translate-x-full' : ''}`}
            >
              <p className="text-[#000000]/90 font-semibold text-base 4xl:text-[30px] 4xl:leading-[40px] 3xl:text-[20px] 3xl:leading-[25px] leading-7 font-inter mb-4 group-hover:text-white transition-colors duration-300">
                {feedback.content}
              </p>
              <div className="flex items-center">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="4xl:w-[100px] 4xl:h-[100px] 3xl:w-[80px] 3xl:h-[80px] w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="4xl:text-[30px] 4xl:leading-[40px] 3xl:text-[20px] 3xl:leading-[25px] font-semibold group-hover:text-white transition-colors duration-300">
                    {feedback.name}
                  </p>
                  <p className="4xl:text-[30px] 4xl:leading-[40px] 3xl:text-[20px] 3xl:leading-[25px] text-gray-600 text-sm group-hover:text-white transition-colors duration-300">
                    {feedback.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
