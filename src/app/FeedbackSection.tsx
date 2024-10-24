'use client'
import React, { useEffect, useRef } from 'react';

const feedbacks = [
  {
    id: 1,
    content: "Sản phẩm đầu tư của HyraCap rất phù hợp với tôi. Lãi suất tốt giúp giảm áp lực về tài chính cho gia đình.",
    name: "Lê Huyền Bảo Châu",
    position: "Chuyên viên kinh doanh",
    image: "/img/user.png",
    direction: "left"
  },
  {
    id: 2,
    content: "Sản phẩm đầu tư của HyraCap rất phù hợp với tôi. Lãi suất tốt giúp giảm áp lực về tài chính cho gia đình. của HyraCap rất phù hợp với tôi của HyraCap rất phù hợp với tôi",
    name: "Lê Huyền Bảo Châu",
    position: "Chuyên viên kinh doanh",
    image: "/img/user.png",
    direction: "right"
  },
  {
    id: 3,
    content: "Sản phẩm đầu tư của HyraCap rất phù hợp với tôi. Lãi suất tốt giúp giảm áp lực về tài chính cho gia đình. của HyraCap rất phù hợp với tôi của HyraCap rất phù hợp với tôi",
    name: "Lê Huyền Bảo Châu",
    position: "Chuyên viên kinh doanh",
    image: "/img/user.png",
    direction: "left"
  }
];

const FeedbackSection: React.FC = () => {
  const feedbackRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <div className="bg-[#F3F7F4] py-16 relative overflow-hidden">
      {/* Vòng tròn đồng tâm */}
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        {/* <div className="w-[800px] h-[800px] rounded-full border-2 border-[#48B96D] opacity-20"></div> */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border-2 border-[#48B96D] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full border-2 border-[#48B96D] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full border-2 border-[#48B96D] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
  <h2 className="text-4xl font-inter leading-[48px] font-bold text-center mb-2">PHẢN HỒI VỀ KHÁCH HÀNG</h2>
  <p className="text-center font-inter text-3xl leading-10 text-gray-600 mb-12 max-w-[42vw] mx-auto">
    HYRACAP LUÔN QUAN TÂM ĐẾN PHẢN HỒI CỦA TỪNG KHÁCH HÀNG
  </p>
  <div className="relative h-[90vh]">
    {feedbacks.map((feedback, index) => (
      <div
        key={feedback.id}
        ref={(el) => {
          if (el) feedbackRefs.current[index] = el;
        }}
        className={`bg-white rounded-lg shadow-lg p-6 absolute transition-all duration-500 opacity-0 hover:bg-[#48B96D] group ${
          index === 0 ? 'top-[5%] right-1/2 max-w-md' : 
          index === 1 ? 'top-[30%] left-1/4 -translate-x-1/2 max-w-xl' : 
          'top-[60%] right-1/2 max-w-xl'
        } ${index === 0 ? '-translate-x-full' : index === 2 ? 'translate-x-full' : ''}`}
      >
        <p className="text-[#000000]/90 font-semibold text-base leading-7 font-inter mb-4 group-hover:text-white transition-colors duration-300">{feedback.content}</p>
        <div className="flex items-center">
          <img
            src={feedback.image}
            alt={feedback.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold group-hover:text-white transition-colors duration-300">{feedback.name}</p>
            <p className="text-gray-600 text-sm group-hover:text-white transition-colors duration-300">{feedback.position}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default FeedbackSection;