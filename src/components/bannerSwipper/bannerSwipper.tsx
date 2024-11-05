import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typography } from '@mui/material';
function BannerSwipper() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const [isRightFrameVisible, setIsRightFrameVisible] = useState(false);
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRightFrameVisible(true);
          } else {
            setIsRightFrameVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        // rootMargin: "0px 0px -10% 0px"
      }
    );

    if (rightFrameRef.current) {
      observer.observe(rightFrameRef.current);
    }

    return () => {
      if (rightFrameRef.current) {
        observer.unobserve(rightFrameRef.current);
      }
    };
  }, []);
  return (
    <Swiper navigation={true} className="mySwiper">
      {/** Slides */}
      {['Slide 1', 'Slide 2', 'Slide 3'].map((item, i) => (
        <SwiperSlide key={i}>
          <Typography
            variant={'h6'}
            color="#fff"
            align={'center'}
            sx={{ color: '#fff' }}
          >
            {item}
          </Typography>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerSwipper;
