import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './news.module.css';
import { getNews } from '@/services/news.service';
import { Page } from '@/type/page.type';

const newsData = [
  {
    title:
      'HyraTek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    date: '30/08/2024',
    image: '/img/20.png',
    videoLink: '/news/newsdetail',
    description:
      'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên  cho trí tuệ nhân tạo (AI)...',
  },
  {
    title:
      'Egabid áp dụng công nghệ blockchain đảm bảo tính minh bạch và an toàn cho mỗi lượt đấu giá',
    date: '10 tháng 10, 2024',
    image: '/img/item1-1.png',
    videoLink: '/news/newsdetail',
    description:
      'Egabid là sàn thương mại điện tử đấu giá ngược trong hệ sinh thái Hyperas, cung cấp một nền tảng đấu giá ngược độc đáo',
  },
  {
    title:
      'Giải pháp hạ tầng điện toán biên chi phí thấp giúp xử lý dữ liệu lớn',
    date: '10 tháng 10, 2024',
    image: '/img/item1-2.png',
    videoLink: '/news/newsdetail',
    description:
      'Salala là một nền tảng kinh tế chia sẻ dựa trên điện toán biên, cho phép người dùng chia sẻ tài nguyên để cùng nhau ...',
  },
  {
    title:
      'Hyperas thúc đẩy một hệ sinh thái AI toàn diện với sự đổi mới, hợp tác và phát triển bền vững.',
    date: '10 tháng 10, 2024',
    image: '/img/item1-3.png',
    videoLink: '/news/newsdetail',
    description:
      'Hyperas hướng tới việc trở thành một nền tảng hàng đầu trong việc cung cấp giải pháp cho các vấn đề về hạ tầng tính toán ...',
  },
];

const News = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const [newsData1, setNewsData1] = React.useState([]);
  const itemsPerPage = 2;
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(Page),
  });

  React.useEffect(() => {
    if (isSuccess) {
      console.log(data);

      setNewsData1(data);
    }
  }, [data, isSuccess]);
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleNextPage = () => {
    if (page * itemsPerPage >= newsData.length) return;
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  return (
    <div ref={ref} className={`${styles.newsSection} py-[24px] bg-[#F3F7F4]`}>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1440px]">
          <div className=" flex justify-between ">
            <p
              style={{
                fontWeight: 700,
              }}
              className=" font-bold pb-6 text-[28px] text-center md:text-left  md:text-[36px] leading-[28px] md:leading-[48px] font-sans"
            >
              TIN MỚI NHẤT VỀ HYRACAP
            </p>
            <a
              href="/news"
              className=" max-h-[48px]  hidden font-sans text--gray-950 font-medium   px-4 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 md:flex items-center"
            >
              Xem thêm
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 xl:gap-[126px] p-3 w-full items-center">
            <div
              className={`${styles.mainNews} md:max-w-[486px] max-w-none  hidden md:flex `}
            >
              <a
                href={newsData[0]?.videoLink || ''}
                className={`${styles.mainNewsLink} ${styles.newsLink} flex justify-start items-start md:max-w-[486px] max-w-none mb-[40px]`}
              >
                <img
                  src={newsData[0].image}
                  alt="Main News"
                  className={`${styles.mainImage} duration-300 h-[615px] md:max-h-[655px] lg:max-w-[486px]  lg:max-h-[320px]  ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                />
              </a>

              <div className="flex flex-col items-start justify-start">
                <a
                  href={newsData[0].videoLink}
                  className={`${styles.newsTitle} font-sans w-full  duration-300 delay-200 text-[16px] md:text-[24px] text-[#000000]/80  ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {newsData[0].title}
                </a>
              </div>
              <div className="flex flex-col items-start  justify-start">
                <a
                  href={newsData[0].videoLink}
                  className={`font-inter text-sm w-full font-sans leading-6 text-gray-600 duration-300 delay-500  ease-in-out transform ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <Typography
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {newsData[0].description}
                  </Typography>
                </a>
              </div>
              <div className="w-full flex justify-end items-end ">
                <div className="w-[100%] md:flex  hidden justify-end items-end ">
                  <button
                    className={` text-[#000000]/90 font-sans font-medium py-2 px-4 border border-gray-300 rounded-full hover:bg-green-500 hover:text-white transition duration-300 flex items-center   ease-in-out transform ${
                      inView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    onClick={() => router.push('/news/newsdetail')}
                  >
                    Chi tiết
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.sideNews}`}>
              <div className="hidden md:flex flex-col">
                {newsData.slice(1).map((news, index) => (
                  <div
                    key={index}
                    className={`${styles.newsItem} flex flex-col md:flex-row duration-300 delay-${index * 100} pb-[20px] pt-[20px] max-w-[650px] ease-in-out transform ${
                      inView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <a href={news.videoLink} className={`${styles.newsLink}`}>
                      <div
                        className={`${styles.newsContent} flex flex-col-reverse md:flex-row`}
                      >
                        <div className={styles.sideBorder}>
                          <div className="flex flex-col gap-[16px]">
                            <img
                              src={news.image}
                              alt={`News ${index}`}
                              className={`${styles.newsImage} md:max-w-[250px] md:max-h-[130px] md:min-h-0 min-h-[320px] md:block lg:hidden`}
                            />
                            <p
                              className={`${styles.newsTitle}   font-sans text-16px text-[#000000CC] text-opacity-80`}
                            >
                              {news.title}
                            </p>

                            <span className="font-inter text-sm font-sans leading-6 text-gray-600 md:hidden lg:block">
                              {news.description}
                            </span>
                          </div>
                          <span className="text-gray-600 text-sm font-sans leading-6 ">
                            {news.date}
                          </span>
                        </div>
                        <img
                          src={news.image}
                          alt={`News ${index}`}
                          className={`${styles.newsImage} md:max-w-[170px] md:max-h-[170px] md:min-h-0 min-h-[320px] md:hidden lg:block`}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              <div className="md:hidden flex flex-col ">
                {newsData
                  .slice(
                    (page - 1) * itemsPerPage,
                    (page - 1) * itemsPerPage + itemsPerPage
                  )
                  .map((news, index) => (
                    <div
                      key={index}
                      className={`${styles.newsItem} flex flex-col md:flex-row duration-300 delay-${index * 100} pb-[20px] pt-[20px] max-w-[650px] ease-in-out transform ${
                        inView
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      <a href={news.videoLink} className={`${styles.newsLink}`}>
                        <div
                          className={`${styles.newsContent} flex flex-col-reverse md:flex-row`}
                        >
                          <div className={styles.sideBorder}>
                            <div className="flex flex-col gap-[16px]">
                              <p
                                className={`${styles.newsTitle}   font-sans text-16px text-[#000000CC] text-opacity-80`}
                              >
                                {news.title}
                              </p>

                              <span className="font-inter text-sm font-sans leading-6 text-gray-600">
                                {news.description}
                              </span>
                            </div>
                            <span className="text-gray-600 text-sm font-sans leading-6 ">
                              {news.date}
                            </span>
                          </div>
                          <img
                            src={news.image}
                            alt={`News ${index}`}
                            className={`${styles.newsImage} md:max-w-[170px] md:max-h-[170px] md:min-h-0 min-h-[320px]`}
                          />
                        </div>
                      </a>
                    </div>
                  ))}
              </div>

              <div className="w-full md:hidden flex flex-col gap-[32px] mt-[32px] justify-center items-center">
                <Stack flexDirection={'row'} height={'40px'} gap={'8px'}>
                  <IconButton
                    onClick={handlePrevPage}
                    sx={{
                      width: '40px',
                      height: '40px',
                    }}
                  >
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.40906 0.257395C5.00324 -0.117211 4.37058 -0.0919087 3.99597 0.31391L0.765201 3.81387C0.411604 4.19693 0.4116 4.78737 0.765194 5.17043L3.99597 8.67047C4.37057 9.07629 5.00323 9.1016 5.40905 8.727C5.81487 8.3524 5.84018 7.71974 5.46558 7.31392L3.78397 5.49215L13.5 5.49215C14.0523 5.49215 14.5 5.04444 14.5 4.49216C14.5 3.93987 14.0523 3.49215 13.5 3.49216L3.784 3.49215L5.46557 1.67048C5.84018 1.26466 5.81487 0.632001 5.40906 0.257395Z"
                        fill="black"
                        fillOpacity="0.56"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    onClick={handleNextPage}
                    sx={{
                      width: '40px',
                      height: '40px',
                    }}
                  >
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.09094 0.257395C9.49676 -0.117211 10.1294 -0.0919087 10.504 0.31391L13.7348 3.81387C14.0884 4.19693 14.0884 4.78737 13.7348 5.17043L10.504 8.67047C10.1294 9.07629 9.49677 9.1016 9.09095 8.727C8.68513 8.3524 8.65982 7.71974 9.03442 7.31392L10.716 5.49215L0.999999 5.49215C0.447714 5.49215 -7.64154e-07 5.04444 -7.86799e-07 4.49216C-8.09444e-07 3.93987 0.447714 3.49215 0.999999 3.49216L10.716 3.49215L9.03443 1.67048C8.65982 1.26466 8.68513 0.632001 9.09094 0.257395Z"
                        fill="black"
                        fillOpacity="0.56"
                      />
                    </svg>
                  </IconButton>
                </Stack>
                <Button
                  onClick={() => router.push('/news')}
                  sx={{
                    color: '#000000E5',
                    width: '100%',
                    height: '40px',
                    border: '1px solid #0000003D',
                    borderRadius: '999px',
                    textTransform: 'none',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-2%',

                    '&:hover': {
                      backgroundColor: '#4CAF50',
                      color: 'white',
                    },
                  }}
                >
                  Xem thêm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
