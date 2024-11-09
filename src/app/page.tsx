'use server';

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

const Home: React.FC = async () => {
  const page = {
    ...Page,
    status__eq: 2,
  };

  const pageRasing = {
    ...Page,
    status__eq: 1,
  };

  const res = await getProjects(page);
  const resRasing = await getProjects(pageRasing);

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
      <News />
      <FeedbackSection />
      <Download />
      <PressSection />
    </div>
  );
};

export default Home;
