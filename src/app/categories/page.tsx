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

  const projects1 = await getProjects(page1);
  return <CategoryPage />;
}

export default Page;
