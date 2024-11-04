'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { desc } from 'framer-motion/client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { title } from 'process';
import { useState } from 'react';
import ListField from './components/listField';
import NearlyActions from './components/nearlyActions';
import { GlobalIcon, ProfileTUser, LocationIcon } from '@/components/icons';
import Link from 'next/link';
import Growth from './components/growth';
import Terminology from './components/terminology';
import ProductItem from '@/app/products/components/productItem';
import QandA from './components/Q&A';
import UpdateInfo from './components/updateInformation';

const InfoSection: React.FC = () => {
  const data = [
    {
      title: '$1M',
      desc: 'Vốn huy động',
    },
    {
      title: '$850,000',
      desc: 'Vốn đầu tư',
    },
    {
      title: '20',
      desc: 'Tổng Slot',
    },
    {
      title: '$50,000',
      desc: 'Giá trị/slot',
    },
    {
      title: '$17',
      desc: 'Nhà đầu tư',
    },
    {
      title: 'Series C',
      desc: 'Vòng đầu tư',
    },
  ];

  const field = [
    {
      title: 'Lĩnh vực đầu tư',
      value: 'Công nghệ',
    },
    {
      title: 'Ngày thành lập',
      value: '20/02/2020',
    },
    {
      title: 'Trụ sở chính',
      value: 'Singapore',
    },
    {
      title: 'Tình trạng hoạt động',
      value: 'Đang hoạt động',
    },
    {
      title: 'Người sáng lập',
      value: 'Trần Nam Chung',
    },
    {
      title: 'Tên công ty ',
      value: 'Công ty cổ phần Hyratek',
    },
    {
      title: 'Email ',
      value: 'info@hyratek.com',
    },
    {
      title: 'Số điện thoại',
      value: '(+84) 58 8668 777',
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
      text: '10 Anson Road # 11- 20 International Plaza Singapore',
    },
    {
      icon: <ProfileTUser />,
      text: '150-200',
    },
    {
      icon: <GlobalIcon />,
      text: 'https://salala.io',
    },
  ];

  const products = [
    {
      title: 'Có thể bạn quan tâm',
      type: 'flexible',
      package: [
        {
          title: 'Egabid',
          start_date: '20/10/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 2500000,
          profit: 2000000,
          sponsorship: 21762,
          image: (
            <img
              src="/img/egabid_pc.png"
              alt="Hyperas Chain"
              className="md:h-[250px] md:w-[384px]"
            />
          ),
          field: 'CÔNG NGHỆ',
        },
        {
          title: 'Salala AI',
          start_date: '09/09/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 3000000,
          profit: 3000000,
          sponsorship: 21762,
          image: (
            <img
              src="/img/salala2.png"
              alt="Salala AI"
              className="md:h-[250px] md:w-[384px]"
            />
          ),
          field: 'CÔNG NGHỆ',
        },
        {
          title: 'HYPERAS CHAIN',
          start_date: '08/09/2024',
          descriptions: 'Hyperas tận dụng sức mạnh từ hàng tỷ thiết bị... ',
          invested: 2500000,
          profit: 1000000,
          sponsorship: 21762,
          image: (
            <img
              src="/img/hyperas_chain1.png"
              alt="Rapital Bank"
              className="md:h-[250px] md:w-[384px]"
            />
          ),
          field: 'CÔNG NGHỆ',
        },
      ],
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
          px: '120px',
        }}
      >
        <Stack flexDirection={'row'} gap={'24px'}>
          <Stack
            flexDirection={'column'}
            flexGrow={1}
            justifyContent={'flex-start'}
          >
            <Box width={'100%'}>
              <Stack flexDirection={'column'} gap={'16px'}>
                <Image
                  src="/img/product_category/prod_cate_image.png"
                  alt="product_category"
                  width={792}
                  height={400}
                />
                <Stack flexDirection={'row'} gap={'16px'}>
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
                <Growth />
                <Terminology />
              </Stack>
            </Box>
          </Stack>
          <Stack flexDirection={'column'} maxWidth={'385px'} gap={'24px'}>
            <Stack flexDirection={'column'} gap={'12px'}>
              <Typography
                bgcolor={'#48B96D1F'}
                color={'#31814B'}
                px={'16px'}
                p={'8px'}
                borderRadius={'4px'}
              >
                CÔNG NGHỆ
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={'32px'}
                lineHeight={'40px'}
                fontFamily={'Inter'}
                letterSpacing={'-1%'}
                color="#363636"
              >
                Dự án Salala AI
              </Typography>
            </Stack>
            <Typography
              fontFamily={'Inter'}
              fontWeight={400}
              fontSize={'16px'}
              lineHeight={'24px'}
              color="#000000A3"
            >
              Salala là một nền tảng điện toán biên cho phép người dùng tận dụng
              phần cứng của các thiết bị biên (edge devices) để huấn luyện mô
              hình trí tuệ nhân tạo (AI).
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
                      {item.title}
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
        <section className="w-full h-auto  bg-white py-[62px] flex flex-col justify-center items-center px-[120px] max-w-[1440px]">
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
                  fontFamily={'Inter'}
                  fontWeight={700}
                  fontSize={'32px'}
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
                  }}
                >
                  Xem thêm
                </Button>
              </Stack>
              <div className="flex gap-[24px] items-center  w-full overflow-y-auto justify-center py-8 overflow-x-hidden  ">
                {product.package.map((packageItem: any, index) => (
                  <ProductItem
                    key={index}
                    descriptions={packageItem.descriptions}
                    image={packageItem.image}
                    interest_rate={packageItem.interest_rate}
                    term={packageItem.term}
                    title={packageItem.title}
                    type={product.type}
                    startDate={packageItem.start_date}
                    profit={packageItem.profit}
                    sponsorship={packageItem.sponsorship}
                    invested={packageItem.invested}
                    field={packageItem.field}
                  />
                ))}
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
