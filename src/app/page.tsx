'use server';
import { unstable_noStore as noStore } from 'next/cache';

import Partner from '@/app/partner';
import PressSection from '@/app/PressSection';
import ProjectSection from '@/app/ProjectSection';
import BannerSwipper from '@/components/bannerSwipper';
import SolutionList from '@/components/solutionList/solutionList';
import styles from './page.module.css';
import Download from './download';
import FeedbackSection from './FeedbackSection';
import News from './news';
import { Page } from '@/type/page.type';
import { getProjects } from '@/services/project.service';
import { getNews } from '@/services/news.service';

const Home: React.FC = async () => {
  await noStore();
  const page = {
    ...Page,
    status__eq: 2,
  };

  const pageRasing = {
    ...Page,
    take: 50,
    status__eq: 1,
  };

  // const res = await getProjects(page);
  // const resRasing = await getProjects(pageRasing);
  // const newsData = await getNews({
  //   ...Page,
  //   take: 4,
  // });

  const [res, resRasing, newsData] = await Promise.all([
    getProjects(page),
    getProjects(pageRasing),
    getNews({
      ...Page,
      take: 4,
    }),
  ]);

  return (
    <div className={styles.container}>
      <BannerSwipper />
      <Partner />
      <SolutionList />
      <ProjectSection
        pageInit={page}
        dataProject={res}
        dataRasing={resRasing}
        pageRasing={pageRasing}
      />
      <News
        newsData={newsData}
        newsPage={{
          ...Page,
          take: 4,
        }}
      />
      <FeedbackSection />
      <Download />
      <PressSection />
    </div>
  );
};

export default Home;
