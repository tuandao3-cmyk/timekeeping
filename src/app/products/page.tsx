'use server';

import { unstable_noStore as noStore } from 'next/cache';
import Product from './products';
import { getProjects } from '@/services/project.service';
import { Page } from '@/type/page.type';

async function ProductPage() {
  await noStore();
  const res = await getProjects({
    ...Page,
    take: 3,
  });

  return <Product projectData={res.data} />;
}

export default ProductPage;
