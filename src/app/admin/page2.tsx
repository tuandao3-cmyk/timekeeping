'use server';

import { unstable_noStore as noStore } from 'next/cache';

import { getProjects } from '@/services/project.service';
import { Page as Paging } from '@/type/page.type';
import CategoryPage from '.';

async function Page() {
  await noStore();
  const page1: typeof Paging = {
    ...Paging,
    status__eq: 0,
    take: 3,
  };
  const page2: typeof Paging = {
    ...Paging,
    status__eq: 1,
    take: 3,
  };
  const page3: typeof Paging = {
    ...Paging,
    status__eq: 2,
    take: 3,
  };

  const [projects1, projects2, projects3] = await Promise.all([
    getProjects(page1),
    getProjects(page2),
    getProjects(page3),
  ]);

  return (
    <CategoryPage
      projects1={projects1}
      projects2={projects2}
      projects3={projects3}
      page1={page1}
      page2={page2}
      page3={page3}
    />
  );
}

export default Page;
