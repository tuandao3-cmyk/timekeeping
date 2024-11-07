interface PageInterface {
  order: 'ASC' | 'DESC';
  sortBy: string;
  page: number;
  take: number;
  [key: string]: any;
}

export const Page: PageInterface = {
  order: 'DESC',
  sortBy: 'id',
  page: 1,
  take: 10,
};
