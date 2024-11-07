'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Partner from '@/app/partner';
import PressSection from '@/app/PressSection';
import ProjectSection from '@/app/ProjectSection';
import BannerSwipper from '@/components/bannerSwipper';
import SolutionList from '@/components/solutionList/solutionList';
import styles from './page.module.css';

import Download from './download';
import FeedbackSection from './FeedbackSection';
import News from './news';

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
