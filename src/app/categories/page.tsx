'use server';

import CategoryPage from './categories';
import { Page as Paging } from '@/type/page.type';
import { getProjects } from '@/services/project.service';

async function Page() {
  const page1: typeof Paging = {
    ...Paging,
    status__eq: 0,
  };
  const page2: typeof Paging = {
    ...Paging,
    status__eq: 1,
  };
  const page3: typeof Paging = {
    ...Paging,
    status__eq: 2,
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
