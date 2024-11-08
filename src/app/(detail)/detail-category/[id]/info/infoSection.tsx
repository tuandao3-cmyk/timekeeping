'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { GlobalIcon, LocationIcon, ProfileTUser } from '@/components/icons';
import { getProjects } from '@/services/project.service';
import { Page } from '@/type/page.type';
import { formatDateTimeVn } from '@/util/util';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductItem from '../components/productItem';
import Growth from './components/growth';
import ListField from './components/listField';
import NearlyActions from './components/nearlyActions';
import QandA from './components/Q&A';
import Terminology from './components/terminology';
import UpdateInfo from './components/updateInformation';
import ProjectItem from '@/components/projectItem/projectItem';

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
            md: '60px',
            lg: '120px',
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
                  className="hidden lg:block"
                  src={dataP?.images[0] || ''}
                  alt="product_category"
                  width={792}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                  style={{
                    borderRadius: '16px',
                    maxWidth: '792px',
                    maxHeight: '400px',
                  }}
                />
                <Stack
                  flexDirection={{
                    xs: 'column',
                    md: 'column',
                    lg: 'row',
                  }}
                  gap={'16px'}
                  display={{
                    xs: 'none',
                    md: 'flex',
                  }}
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
                        noWrap={index === 1 ? true : false}
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

            <Image
              className="block lg:hidden"
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
                md: 'column',
                lg: 'row',
              }}
              gap={'16px'}
              display={{
                xs: 'flex',
                md: 'none',
              }}
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
                    noWrap={index === 1 ? true : false}
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
            <Typography
              fontFamily={'Inter'}
              fontWeight={400}
              fontSize={'16px'}
              lineHeight={'24px'}
              color="#000000A3"
            >
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
                      textOverflow={'ellipsis'}
                      overflow={'hidden'}
                    >
                      {dataP?.data?.project_information[
                        item.title
                      ].toLocaleString() || '0'}
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
            <Box
              display={{
                xs: 'none',
                md: 'block',
              }}
            >
              <NearlyActions actions={actions} />
            </Box>
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
                      sm: 'block',
                    },
                  }}
                  onClick={() => (window.location.href = `/categories`)}
                >
                  Xem thêm
                </Button>
              </Stack>
              <div className="flex md:flex-row flex-col gap-[24px] items-center  w-full  justify-center py-5  scrollbar-none ">
                {product?.package?.map((packageItem: any, index: number) => (
                  <ProjectItem
                    capital_raising_target={packageItem.capital_raising_target}
                    id={packageItem.id}
                    images={packageItem.images}
                    mobilized_fund={packageItem.mobilized_fund}
                    industries={packageItem.industries}
                    key={index}
                    name={packageItem.name}
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
                      sm: 'none',
                    },
                  }}
                  onClick={() => (window.location.href = `/categories`)}
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
