import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import PitchingDeckSection from '../../pitchingdeck/pitchingDeck';
import ContractSampleSection from '../../contract_sample/contractSample';
import FinanceRoadSection from '../../finance_road/finance_road';
import BusinessPlanSection from '../../business plan/business_plan';

interface GrowthProps {
  data: any;
}

function Growth(props: GrowthProps) {
  const { data } = props;

  return (
    <Stack
      flexDirection={{
        xs: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
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
          md: '100%',
          lg: '282px',
        }}
        gap={'24px'}
      >
        <Typography
          fontFamily={'Inter'}
          fontWeight={600}
          fontSize={'20px'}
          lineHeight={'28px'}
          color="#000000"
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
          {data?.data?.growth_prospects || ''}
        </Typography>
      </Stack>
      <Stack flexDirection={'column'} gap={'25px'}>
        <Typography
          fontFamily={'Inter'}
          fontWeight={600}
          fontSize={'20px'}
          lineHeight={'28px'}
          color="#000000"
        >
          Thông số
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {data?.data?.metrics.map((project: any, index: any) => (
            <Box
              key={index}
              width={{
                xs: '100%',
                md: '48%',
                lg: '48%',
              }}
              mb={2}
              bgcolor={'#0000000F'}
              padding={'3px'}
              borderRadius={'8px'}
            >
              <Stack direction="row" gap="12px">
                <Image
                  width={50}
                  height={50}
                  src={'/img/icon/brand.png'}
                  layout="responsive"
                  alt="icon"
                  style={{
                    width: '50px',
                    height: '50px',
                    maxWidth: '50px',
                    maxHeight: '50px',
                    objectFit: 'cover',
                  }}
                />
                <Stack
                  flexDirection="column"
                  justifyContent="space-between"
                  width={'100%'}
                >
                  <Typography
                    fontFamily="Inter"
                    fontWeight={600}
                    fontSize="16px"
                    lineHeight="24px"
                    color="#28a745"
                  >
                    {project.value}
                  </Typography>
                  <Typography
                    fontFamily="Inter"
                    fontWeight={400}
                    fontSize="13px"
                    lineHeight="22px"
                    color="#0000008F"
                  >
                    {project.name}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Growth;
