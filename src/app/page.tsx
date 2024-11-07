'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './page.module.css';
import Partner from '@/app/partner';
import ProjectSection from '@/app/ProjectSection';
import PressSection from '@/app/PressSection';
import SolutionList from '@/components/solutionList/solutionList';

import Download from './download';
import News from './news';
import FeedbackSection from './FeedbackSection';
import BannerSwipper from '@/components/bannerSwipper';

const Home: React.FC = () => {
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });
  const [isRightFrameVisible, setIsRightFrameVisible] = useState(false);

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

  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className={styles.container}>
      <BannerSwipper />

      <Partner />
      <SolutionList />
      <ProjectSection />
      <News />
      <FeedbackSection />
      <Download />
      <PressSection />
    </div>
  );
};

export default Home;
