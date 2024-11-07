import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

function Growth() {
  const projects = [
    {
      name: 'Công việc đã đào tạo',
      amount: '+2,985,122,684',
      icon: '/img/icon/bag.png',
    },
    {
      name: 'Mô hình đào tạo',
      amount: '+2,985,122,684',
      icon: '/img/icon/brand.png',
    },
    {
      name: 'Tổng thiết bị',
      amount: '+2,985,122,684',
      icon: '/img/icon/multidevice.png',
    },

    {
      name: 'Tổng Hyra kiếm được',
      amount: '+2,985,122,684',
      icon: '/img/icon/hyracoin.png',
    },
  ];
  return (
    <Stack
      flexDirection={{
        xs: 'column',
        sm: 'column',
        md: 'row',
      }}
      gap={'34px'}
      bgcolor={'#FFFFFF'}
      padding={'20px'}
      borderRadius={'16px'}
    >
      <Stack
        flexDirection={'column'}
        maxWidth={{
          xs: '100%',
          sm: '100%',
          md: '282px',
        }}
        gap={'24px'}
      >
        <Typography
          fontWeight={600}
          fontFamily={'Inter'}
          fontSize={'16px'}
          lineHeight={'24px'}
          color="#000000E5"
        >
          Triển vọng tăng trưởng
        </Typography>
        <Typography
          fontFamily={'Inter'}
          fontWeight={400}
          fontSize={'14px'}
          lineHeight={'24px'}
          color="#000000A3"
        >
          Dự án Salala AI đã huy đông được tổng cộng 220,5 triệu đô la vòng đầu
          tư Series C. Nguồn đầu tư mới nhất được huy động vào ngày
          10/10/2024.Với 20 slot được tài trợ bởi 18 nhà đầu tư.
        </Typography>
      </Stack>
      <Stack flexDirection={'column'} gap={'25px'}>
        <Typography
          fontWeight={600}
          fontFamily={'Inter'}
          fontSize={'16px'}
          lineHeight={'24px'}
          color="#000000E5"
        >
          Thông số
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Stack flexDirection={'row'} gap={'12px'}>
                <Image width={50} height={50} src={project.icon} alt="icon" />
                <Stack
                  flexDirection={'column'}
                  justifyContent={'space-between'}
                >
                  <Typography
                    fontFamily={'Inter'}
                    fontWeight={600}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    color="#31814B"
                  >
                    {project.amount}
                  </Typography>
                  <Typography
                    fontFamily={'Inter'}
                    fontWeight={400}
                    fontSize={'13px'}
                    lineHeight={'22px'}
                    color="#0000008F"
                  >
                    {project.name}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Growth;
