'use server';

import { getNews } from '@/services/news.service';
import AboutPage from './about';
import { Page } from '@/type/page.type';

async function About() {
  const newsData = await getNews({
    ...Page,
    take: 4,
  });
  return (
    <AboutPage
      newsData={newsData}
      newsPage={{
        ...Page,
        take: 4,
      }}
    />
  );
}

export default About;
