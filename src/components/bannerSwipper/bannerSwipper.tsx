import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
function BannerSwipper() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    ref: ref1,
    inView: inView1,
    entry: entry1,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const [isRightFrameVisible, setIsRightFrameVisible] = useState(false);
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRightFrameVisible(true);
          } else {
            setIsRightFrameVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (rightFrameRef.current) {
      observer.observe(rightFrameRef.current);
    }

    return () => {
      if (rightFrameRef.current) {
        observer.unobserve(rightFrameRef.current);
      }
    };
  }, []);

  const items = [
    {
      image: '/img/hyperas1.png',
      title: 'Hyperas Chain',
      price: '$1.500.000',
    },
    {
      image: '/img/hyperas1.png',
      title: 'SALALA AI',
      price: '$1.500.000',
    },
    {
      image: '/img/hyperas1.png',
      title: 'Egabid',
      price: '$1.500.000',
    },
    {
      image: '/img/hyperas1.png',
      title: 'Rapital Bank',
      price: '$1.500.000',
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      navigation={false}
      centeredSlides={true}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      touchMoveStopPropagation={false}
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} custom-bullet bg-[#48B96D]"></span>`;
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide className="bg-[rgb(7,33,44)] flex flex-col :flex-row min-h-[812px] h-auto justify-center items-center w-full">
        <Box
          ref={ref}
          width="100%"
          height={{
            xs: 'auto',
            md: '748px',
          }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          padding={{
            xs: '12px',
            md: '0',
          }}
        >
          <Stack
            flexDirection={{
              xs: 'column',
              md: 'row',
            }}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
            maxWidth={'1440px'}
            gap={{
              xs: '40px',
              md: '90px',
            }}
          >
            <Stack
              flexDirection={'column'}
              gap={{
                xs: '40px',
                md: '80px',
              }}
              maxWidth={'525px'}
            >
              <Stack
                flexDirection={'column'}
                gap={{
                  xs: '24px',
                  md: '32px',
                }}
              >
                <Typography
                  fontFamily={'Inter'}
                  fontWeight={700}
                  fontSize={{
                    xs: '32px',
                    md: '48px',
                  }}
                  lineHeight={{
                    xs: '40px',
                    md: '56px',
                  }}
                  letterSpacing={'-2%'}
                  color="#fff"
                  pt={{
                    xs: '40px',
                    md: '0',
                  }}
                  sx={{
                    transition: 'all 0.5s',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(10px)',
                  }}
                  textTransform={'uppercase'}
                >
                  Ủy thác niềm tin
                  <br /> gặt hái thịnh vượng
                </Typography>
                <Typography
                  fontFamily={'Inter'}
                  fontSize={{
                    xs: '14px',
                    md: '16px',
                  }}
                  lineHeight={{
                    xs: '24px',
                    md: '24px',
                  }}
                  color="#FFFFFF99"
                  sx={{
                    transition: 'all 0.5s',
                    opacity: inView ? 1 : 0,
                    transitionDelay: '0.3s',
                    transform: inView ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  Cung cấp cho các nhà đầu tư và doanh nghiệp những dự án tiềm
                  năng, mở ra cơ hội hợp tác nhằm tối ưu hóa lợi nhuận và thúc
                  đẩy sự phát triển tài chính.
                </Typography>
                <Button
                  sx={{
                    height: {
                      xs: '40px',
                      md: '48px',
                    },
                    width: 'fit-content',
                    backgroundColor: '#48B96D',
                    color: '#FFFFFF',
                    px: {
                      xs: '20px',
                      md: '16px',
                    },
                    py: {
                      xs: '10px',
                      md: '14px',
                    },
                    borderRadius: '999px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: {
                      xs: '14px',
                      md: '16px',
                    },
                    lineHeight: {
                      xs: '20px',
                    },
                    letterSpacing: {
                      xs: '-2%',
                    },
                    paragraph: '16px',
                    textTransform: 'none',
                    transition: 'all 0.5s',
                    opacity: inView ? 1 : 0,
                    transitionDelay: '0.5s',
                    transform: inView ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  Tham gia cùng chúng tôi
                </Button>
              </Stack>
              <Stack
                flexDirection="row"
                flexWrap={'wrap'}
                width={'100%'}
                gap={{
                  xs: '8px',
                  md: '16px',
                }}
                px={{
                  xs: '12px',
                  md: '0',
                }}
                maxHeight="137px"
              >
                {[
                  { value: '$20M+', label: 'Tổng vốn đang huy động' },
                  { value: '10M+', label: 'Tổng vốn đang đầu tư' },
                  { value: '771+', label: 'Nhà đầu tư' },
                ].map((item, index) => (
                  <Box
                    key={index}
                    maxHeight="137px"
                    flexGrow={1}
                    flexBasis="0"
                    maxWidth={{
                      xs: '87px',
                      md: '163px',
                    }}
                    bgcolor="#FFFFFF14"
                    borderRadius="10px"
                    px={{
                      xs: '12px',
                      md: '18px',
                    }}
                    py={{
                      xs: '12px',
                      md: '19px',
                    }}
                    display="flex"
                    flexDirection="column"
                    gap="12px"
                    sx={{
                      transition: 'all 0.5s',
                      opacity: inView ? 1 : 0,
                      transitionDelay: `${index * 0.2}s`,
                      transform: inView ? 'translateX(0)' : 'translateX(20px)',
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      color="#48B96D"
                      fontSize={{
                        xs: '16px',
                        md: '24px',
                      }}
                      fontWeight={600}
                      lineHeight={{
                        xs: '24px',
                        md: '32px',
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      fontFamily="Inter"
                      color="#FFFFFFCC"
                      fontWeight={400}
                      fontSize={{
                        xs: '12px',
                        md: '14px',
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
            <div className="w-full flex lg:hidden relative justify-center items-center">
              <div className="block lg:hidden w-[351px] h-[289px] overflow-hidden rounded-[16px] ">
                <Image
                  src={'/img/invest.png'}
                  alt="image"
                  width={351}
                  height={289}
                  style={{
                    width: '100%',
                    maxHeight: '289px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>

              <div className="absolute w-full bottom-[8px] ">
                <Marquee
                  autoFill
                  style={{
                    display: 'flex',
                    gap: '4px',
                  }}
                >
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="w-auto ml-[4px]  gap-[8px] bg-white p-[12px] rounded-[12px] flex"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '10px',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                        className="rounded-[10px] w-[48px] h-[48px] "
                      />
                      <div className="flex flex-col ">
                        <p
                          className="font-sans text-[#04141A] text-[14px] leading-[24px]"
                          style={{ fontWeight: 700 }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="font-sans text-[#31814B] text-[14px] leading-[24px]"
                          style={{ fontWeight: 500 }}
                        >
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            <Box
              pl={'90px'}
              display={{
                xs: 'none',
                md: 'block',
              }}
            >
              <Stack position={'relative'}>
                <Image
                  src={'/img/invest.png'}
                  alt="image"
                  width={381}
                  height={451}
                  // sx={{
                  //   transition: 'all 0.5s',
                  //   opacity: inView ? 1 : 0,
                  //   transitionDelay: '0.4s',
                  //   transform: inView ? 'translateX(0)' : 'translateX(20px)',
                  // }}
                  style={{
                    borderRadius: '20px',
                    transition: 'all 0.5s',
                    opacity: inView ? 1 : 0,
                    // transitionDelay: '0.4s',
                    transform: inView ? 'translateX(0)' : 'translateX(20px)',
                  }}
                />

                <Stack
                  bgcolor={'#FFFFFF'}
                  width={'fit-content'}
                  borderRadius={'10px'}
                  overflow={'hidden'}
                  position={'absolute'}
                  left={'-90px'}
                  top={'32px'}
                  sx={{
                    transition: 'all 0.5s',
                    opacity: inView ? 1 : 0,
                    transitionDelay: '0.1s',
                    transform: inView ? 'translateX(0)' : 'translateX(20px)',
                  }}
                >
                  <Image
                    src={'/img/hyperas1.png'}
                    alt="Hyperas Chain"
                    width={180}
                    height={98}
                  />
                  <Stack flexDirection={'column'} p={'8px'}>
                    <Typography
                      fontFamily={'Inter'}
                      fontWeight={700}
                      fontSize={'14px'}
                      lineHeight={'24px'}
                      color="#04141A"
                    >
                      HYPERAS CHAIN
                    </Typography>
                    <Typography
                      fontFamily={'Inter'}
                      fontWeight={500}
                      fontSize={'14px'}
                      lineHeight={'24px'}
                      color="#31814B"
                    >
                      $1.500.000
                    </Typography>
                    <Typography
                      fontFamily={'Inter'}
                      textTransform={'uppercase'}
                      fontWeight={400}
                      fontSize={'12px'}
                      lineHeight={'20px'}
                      color="#0000008F"
                    >
                      TECHNOLOGY
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  flexDirection={'column'}
                  bgcolor={'#F3F7F4'}
                  width={'254px'}
                  p={'8px'}
                  borderRadius={'20px'}
                  gap={'4px'}
                  position={'absolute'}
                  bottom={'-74px'}
                  right={'-127px'}
                  sx={{
                    transition: 'all 0.5s',
                    opacity: inView ? 1 : 0,
                    transitionDelay: '0.3s',
                    transform: inView ? 'translateX(0)' : 'translateX(20px)',
                  }}
                >
                  <Stack flexDirection={'row'} gap={'8px'}>
                    <Image
                      src={'/img/icon/salala.png'}
                      alt="Salala AI"
                      width={48}
                      height={48}
                      style={{
                        borderRadius: '10px',
                      }}
                    />
                    <Stack flexDirection={'column'}>
                      <Typography
                        fontFamily={'Inter'}
                        fontWeight={700}
                        fontSize={'14px'}
                        lineHeight={'24px'}
                        color="#04141A"
                        textTransform={'uppercase'}
                      >
                        SALALA AI
                      </Typography>
                      <Typography
                        fontFamily={'Inter'}
                        fontWeight={500}
                        fontSize={'14px'}
                        lineHeight={'24px'}
                        color="#31814B"
                      >
                        $1.500.000
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack flexDirection={'row'} gap={'8px'}>
                    <Image
                      src={'/img/icon/rapital.png'}
                      alt="Salala AI"
                      width={48}
                      height={48}
                      style={{
                        borderRadius: '10px',
                      }}
                    />
                    <Stack flexDirection={'column'}>
                      <Typography
                        fontFamily={'Inter'}
                        fontWeight={700}
                        fontSize={'14px'}
                        lineHeight={'24px'}
                        color="#04141A"
                        textTransform={'uppercase'}
                      >
                        RAPITAL BANK
                      </Typography>
                      <Typography
                        fontFamily={'Inter'}
                        fontWeight={500}
                        fontSize={'14px'}
                        lineHeight={'24px'}
                        color="#31814B"
                      >
                        $1.500.000
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack flexDirection={'row'} gap={'8px'}>
                    <Image
                      src={'/img/icon/egabid.png'}
                      alt="Salala AI"
                      width={48}
                      height={48}
                      style={{
                        borderRadius: '10px',
                      }}
                    />
                    <Stack flexDirection={'column'}>
                      <Typography
                        fontFamily={'Inter'}
                        fontWeight={700}
                        fontSize={'14px'}
                        lineHeight={'24px'}
                        color="#04141A"
                        textTransform={'uppercase'}
                      >
                        EGABID
                      </Typography>
                      <Typography
                        fontFamily={'Inter'}
                        fontWeight={500}
                        fontSize={'14px'}
                        lineHeight={'24px'}
                        color="#31814B"
                      >
                        $1.500.000
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <section
          ref={ref1}
          className="bg-[#07212C] flex  min-h-[812px]  justify-center items-center w-full "
        >
          <div
            className="bg-white h-[100%] bg-cover min-h-[812px]  w-full flex flex-col justify-center items-center "
            style={{
              backgroundImage: "url('/img/bghomepage2.png')",
              backgroundSize: '100% 100%',

              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="flex flex-col items-center justify-center w-full max-w-[1440px] md:px-[120px]">
              <div className="flex justify-between items-center w-full h-full mt-16 max-md:!flex-col ">
                <div className="flex flex-col min-h-[620px] justify-start md:justify-center flex-1 w-[100%] px-[12px] md:p-0  gap-10">
                  <div className="flex flex-col gap-2">
                    <p
                      // ref={ref}
                      className={`text-[32px] md:text-[40px] text-center md:text-left leading-[56px] text-[#fff] font-sans font-bold uppercase duration-700 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Nền Tảng <br /> Vững Mạnh,
                    </p>
                    <p
                      // ref={ref}
                      className={`text-[32px] md:text-[40px] text-center md:text-left leading-[56px] text-[#fff] font-sans font-bold uppercase duration-700 delay-200 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Cơ Hội Minh Bạch
                    </p>
                  </div>

                  <div className="flex w-[100%] justify-start items-start gap-[24px]  md:max-w-[500px]">
                    <button
                      // ref={ref}
                      className={` bg-[#48B96D] text-white font-sans text-[16px] leading-[20px] flex-grow   px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Khám phá cơ hội
                    </button>
                    <button
                      // ref={ref}
                      className={` bg-transparent border-[#FFFFFF29] border-[1px] flex-grow text-white font-sans text-[16px] leading-[20px]  px-[16px] py-[14px] rounded-[999px] text-center  hover:bg-[#379256] transition-all  duration-300 delay-200 ease-in-out transform ${
                        inView1
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      Liên hệ ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center max-w-[1440px]"></div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwipper;
