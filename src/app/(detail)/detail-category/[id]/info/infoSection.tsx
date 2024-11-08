'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { useQuery } from '@tanstack/react-query';
import { desc } from 'framer-motion/client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { title } from 'process';
import { useEffect, useState } from 'react';
import ListField from './components/listField';
import NearlyActions from './components/nearlyActions';
import { GlobalIcon, ProfileTUser, LocationIcon } from '@/components/icons';
import Link from 'next/link';
import Growth from './components/growth';
import Terminology from './components/terminology';
import ProductItem from '../components/productItem';
import QandA from './components/Q&A';
import UpdateInfo from './components/updateInformation';
import { formatDateTimeVn } from '@/util/util';
import { getProjects } from '@/services/project.service';
import { Page } from '@/type/page.type';

interface InfoSectionProps {
  dataP?: any;
}

const InfoSection = (props: InfoSectionProps) => {
  const router = useRouter();
  const [page, setPage] = useState<typeof Page>({
    ...Page,
    take: 3,
  });
  const { dataP }: any = props;
  const [products, setProducts] = useState<any[]>([
    {
      title: 'Có thể bạn quan tâm',
      type: 'flexible',
      package: [],
    },
  ]);

  const {
    data: listProject,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => getProjects(page),
  });

  useEffect(() => {
    if (listProject) {
      setProducts((prev) => {
        const updatedProducts = [...prev];

        if (updatedProducts[0]) {
          updatedProducts[0] = {
            ...updatedProducts[0],
            package: [...listProject.data],
          };
        } else {
          updatedProducts[0] = {
            package: [...listProject.data],
          };
        }

        return updatedProducts;
      });
    }
  }, [listProject]);

  const data = [
    {
      title: 'valuation',
      desc: 'Vốn huy động',
    },
    {
      title: 'funding_amount',
      desc: 'Vốn đầu tư',
    },
    {
      title: 'total_slots',
      desc: 'Tổng Slot',
    },
    {
      title: 'price_per_slot',
      desc: 'Giá trị/slot',
    },
    {
      title: 'investors',
      desc: 'Nhà đầu tư',
    },
    {
      title: 'funding_round',
      desc: 'Vòng đầu tư',
    },
  ];

  const field: any[] = [
    {
      title: 'Lĩnh vực đầu tư',
      value: dataP?.industries[0].name || '',
    },
    {
      title: 'Ngày thành lập',
      value: formatDateTimeVn(dataP?.created_at) || '',
    },
    {
      title: 'Trụ sở chính',
      value: dataP?.data?.company_information?.head_office || '',
    },
    {
      title: 'Tình trạng hoạt động',
      value: dataP?.data?.company_information?.operating_status || '',
    },
    {
      title: 'Người sáng lập',
      value: dataP?.data?.company_information?.founder || '',
    },
    {
      title: 'Tên công ty ',
      value: dataP?.data?.company_information?.company_name || '',
    },
    {
      title: 'Email ',
      value: dataP?.data?.company_information?.email || '',
    },
    {
      title: 'Số điện thoại',
      value: dataP?.data?.company_information?.phone || '',
    },
  ];

  const actions = [
    {
      img: '/img/product_category/actions',
      date: 'Tin tức 10/10/2024',
      title:
        'Dự án SalalaAI tăng trưởng mạnh mẽ với lượng thiết bị tăng liên tục với lượt tải đã đạt trên 1M',
    },
    {
      img: '/img/product_category/actions',
      date: 'Tin tức 10/10/2024',
      title:
        'Dự án SalalaAI tăng trưởng mạnh mẽ với lượng thiết bị tăng liên tục với lượt tải đã đạt trên 1M',
    },
    {
      img: '/img/product_category/actions',
      date: 'Tin tức 10/10/2024',
      title:
        'Dự án SalalaAI tăng trưởng mạnh mẽ với lượng thiết bị tăng liên tục với lượt tải đã đạt trên 1M',
    },
  ];

  const items = [
    {
      icon: <LocationIcon />,
      text: dataP?.data?.address || '',
    },
    {
      icon: <ProfileTUser />,
      text: '150-200',
    },
    {
      icon: <GlobalIcon />,
      text: dataP?.data?.website || '',
    },
  ];

  // const products = [
  //   {
  //     title: 'Có thể bạn quan tâm',
  //     type: 'flexible',
  //     package: [
  //       {
  //         id: 8,
  //         created_at: '2024-11-07T09:41:35.058Z',
  //         updated_at: '2024-11-07T09:41:35.058Z',
  //         name: 'Project Alpha',
  //         images: ['image1.jpg', 'image2.jpg'],
  //         status: 1,
  //         capital_raising_target: 5000000,
  //         mobilized_fund: 2500000,
  //         industry_ids: [1, 2],
  //         industries: [
  //           {
  //             id: 2,
  //             name: 'Giáo dục',
  //           },
  //         ],
  //       },
  //       {
  //         id: 7,
  //         created_at: '2024-11-07T08:59:06.655Z',
  //         updated_at: '2024-11-07T08:59:06.655Z',
  //         name: 'TechFusion',
  //         images: [
  //           'https://hyracap.s3.amazonaws.com/project/image-20241002163543-1_1730969918767.jpeg',
  //           'https://hyracap.s3.amazonaws.com/project/image-20241022103131-1_1730969918767.jpeg',
  //         ],
  //         status: 1,
  //         capital_raising_target: 3000000,
  //         mobilized_fund: 1500000,
  //         industry_ids: [4],
  //         industries: [
  //           {
  //             id: 4,
  //             name: 'Blockchain',
  //           },
  //         ],
  //       },
  //       {
  //         id: 6,
  //         created_at: '2024-11-07T08:56:51.226Z',
  //         updated_at: '2024-11-07T08:56:51.226Z',
  //         name: 'EdgeVision',
  //         images: [
  //           'https://hyracap.s3.amazonaws.com/project/image-20240926133158-1_1730969336289.jpeg',
  //           'https://hyracap.s3.amazonaws.com/project/image-20240930150658-1_1730969369152.jpeg',
  //         ],
  //         status: 1,
  //         capital_raising_target: 2500000,
  //         mobilized_fund: 2500000,
  //         industry_ids: [2],
  //         industries: [
  //           {
  //             id: 2,
  //             name: 'Giáo dục',
  //           },
  //         ],
  //       },
  //       {
  //         id: 5,
  //         created_at: '2024-11-06T08:40:40.181Z',
  //         updated_at: '2024-11-06T08:40:40.181Z',
  //         name: 'Project Alpha',
  //         images: [],
  //         status: 1,
  //         capital_raising_target: 5000000,
  //         mobilized_fund: 2500000,
  //         industry_ids: [1, 2],
  //         industries: [
  //           {
  //             id: 2,
  //             name: 'Giáo dục',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  return (
    <Stack
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1440px',
          px: {
            xs: '12px',
            sm: '16px',
            md: '120px',
          },
        }}
      >
        <Stack
          flexDirection={{
            xs: 'column-reverse',
            md: 'row',
          }}
          gap={'24px'}
        >
          <Stack
            flexDirection={'column'}
            flexGrow={1}
            justifyContent={'flex-start'}
          >
            <Box width={'100%'}>
              <Stack flexDirection={'column'} gap={'16px'} maxWidth={'792px'}>
                <Image
                  src={dataP?.images[0] || ''}
                  alt="product_category"
                  width={792}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                  style={{
                    borderRadius: '16px',
                    maxWidth: '792px',
                  }}
                />
                <Stack
                  flexDirection={{
                    xs: 'column',
                    md: 'row',
                  }}
                  gap={'16px'}
                >
                  {items.map((item, index) => (
                    <Stack
                      key={index}
                      flexDirection={'row'}
                      gap={'8px'}
                      justifyItems={'center'}
                      alignItems={'center'}
                      bgcolor={'#0000000F'}
                      borderRadius={'8px'}
                      px={'8px'}
                      py={'8px'}
                    >
                      {item.icon}
                      <Typography
                        fontFamily={'Inter'}
                        fontWeight={400}
                        fontSize={'12px'}
                        lineHeight={'18px'}
                        color="#000000A3"
                      >
                        {index === 2 ? (
                          <Link href={item.text}>{item.text}</Link>
                        ) : (
                          item.text
                        )}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                {/* Tăng trưởng */}
                <Growth data={dataP} />
                <Terminology data={dataP} />
              </Stack>
            </Box>
          </Stack>
          <Stack
            flexDirection={'column'}
            maxWidth={{
              xs: '100%',
              sm: '100%',
              md: '385px',
            }}
            width={'100%'}
            gap={'24px'}
          >
            <Stack flexDirection={'column'} gap={'12px'}>
              {dataP?.industries?.map((item: any, index: number) => (
                <Typography
                  key={index}
                  bgcolor={'#48B96D1F'}
                  color={'#31814B'}
                  px={'16px'}
                  fontWeight={700}
                  fontSize={'12px'}
                  lineHeight={'16px'}
                  fontFamily={'Inter'}
                  py={'8px'}
                  borderRadius={'4px'}
                  width={'fit-content'}
                >
                  {item?.name || ''}
                </Typography>
              ))}
              <Typography
                fontWeight={700}
                fontSize={'32px'}
                lineHeight={'40px'}
                fontFamily={'Inter'}
                letterSpacing={'-1%'}
                color="#363636"
              >
                {dataP?.name || ''}
              </Typography>
            </Stack>
            <Typography
              fontFamily={'Inter'}
              fontWeight={400}
              fontSize={'16px'}
              lineHeight={'24px'}
              color="#000000A3"
            >
              {/* Salala là một nền tảng điện toán biên cho phép người dùng tận dụng
              phần cứng của các thiết bị biên (edge devices) để huấn luyện mô
              hình trí tuệ nhân tạo (AI). */}
              {dataP?.data?.project_information?.description || ''}
            </Typography>

            <Grid container spacing={'8px'}>
              {data.map((item, index) => (
                <Grid item xs={4} key={index}>
                  <Stack
                    flexDirection={'column'}
                    gap={'8px'}
                    bgcolor={'#FFFFFF'}
                    borderRadius={'8px'}
                    p={'12px'}
                    sx={{
                      transition: 'ease-in-out 0.5s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Typography
                      fontFamily={'Inter'}
                      fontWeight={600}
                      fontSize={'16px'}
                      lineHeight={'24px'}
                      color="#31814B"
                    >
                      {dataP?.data?.project_information[item.title] || ''}
                    </Typography>
                    <Typography
                      fontFamily={'Inter'}
                      fontWeight={400}
                      fontSize={'13px'}
                      lineHeight={'22px'}
                      color="#0000008F"
                    >
                      {item.desc}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
            <ListField list={field} />
            <NearlyActions actions={actions} />
          </Stack>
        </Stack>
      </Box>
      <Box
        width={'100%'}
        bgcolor={'#fff'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <section className="w-full h-auto  bg-white py-[62px] flex flex-col justify-center items-center px-[12px] md:px-[120px] max-w-[1440px]">
          {products.map((product: (typeof products)[0], index) => (
            <div
              onClick={() =>
                router.push(`/detail-category/${product.package[index].title}`)
              }
              className="w-full h-auto bg-white px-1 flex flex-col justify-center items-left"
              key={index}
            >
              <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                px={'20px'}
              >
                <Typography
                  className="cursor-pointer"
                  fontFamily={'Inter'}
                  fontWeight={700}
                  fontSize={{
                    xs: '24px',
                    sm: '32px',
                  }}
                  lineHeight={'40px'}
                  letterSpacing={'-1%'}
                  color="#000000"
                >
                  {product.title}
                </Typography>
                <Button
                  sx={{
                    color: '#31814B',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textTransform: 'none',
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                  onClick={() => (window.location.href = `/categories`)}
                >
                  Xem thêm
                </Button>
              </Stack>
              <div className="flex md:flex-row flex-col gap-[24px] items-center  w-full  justify-center py-5  scrollbar-none ">
                {product?.package?.map((packageItem: any, index: number) => (
                  <ProductItem
                    key={index}
                    descriptions={packageItem.descriptions}
                    image={
                      <img
                        src={packageItem.images[0] || '/img/egabid_pc.png'}
                        alt="Hyperas Chain"
                        className=" md:h-[250px] md:w-[384px] rounded-[12px] object-cover"
                      />
                    }
                    interest_rate={packageItem.interest_rate}
                    term={packageItem.term}
                    title={packageItem.name}
                    type={product.type}
                    startDate={packageItem.start_date}
                    profit={packageItem.capital_raising_target}
                    sponsorship={
                      packageItem.mobilized_fund /
                      packageItem.capital_raising_target
                    }
                    invested={packageItem.mobilized_fund}
                    field={packageItem.industries}
                    id={packageItem.id}
                  />
                ))}

                <Button
                  sx={{
                    color: '#31814B',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textTransform: 'none',
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                  }}
                  onClick={() => router.push('/categories')}
                >
                  Xem thêm
                </Button>
              </div>
            </div>
          ))}
        </section>
      </Box>
      <Box
        width={'100%'}
        bgcolor={'#fff'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <QandA />
      </Box>
      <Box
        width={'100%'}
        bgcolor={'#fff'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <UpdateInfo />
      </Box>
    </Stack>
  );
};

export default InfoSection;
