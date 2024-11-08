'use server';

import DetailCategoryPage from './detailCategory';
import { getDetailProject } from '@/services/project.service';

async function DetailCategoty({ params }: any) {
  console.log(params);
  const res = await getDetailProject(params.id);

  return <DetailCategoryPage data={res?.data} />;
}

export default DetailCategoty;
