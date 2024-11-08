'use server';

import Product from './products';
import { getProjects } from '@/services/project.service';
import { Page } from '@/type/page.type';

async function ProductPage() {
  const res = await getProjects({
    ...Page,
    take: 3,
  });

  return <Product projectData={res.data} />;
}

export default ProductPage;
