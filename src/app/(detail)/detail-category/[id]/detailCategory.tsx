'use client';
import CustomTabPanel from '@/components/customTabPanel';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';
import BusinessPlanSection from './business plan/business_plan';
import ContractSampleSection from './contract_sample/contractSample';
import FinanceRoadSection from './finance_road/finance_road';
import InfoSection from './info/infoSection';
import PitchingDeckSection from './pitchingdeck/pitchingDeck';

interface DetailCategoryPageProps {
  data: any;
}

const DetailCategoryPage = (props: DetailCategoryPageProps) => {
  const [value, setValue] = React.useState(0);
  const [project, setProject] = useState<any>(null);
  const { data }: any = props;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          maxWidth="1440px"
          px={{
            xs: '12px',
            sm: '16px',
            md: '120px',
          }}
          sx={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              width: '100%',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tabs"
              sx={{
                '& .Mui-selected': {
                  backgroundColor: 'transparent',
                  color: '#0B3546',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#0B3546',
                },
                minWidth: '100%',
              }}
              variant="scrollable"
              scrollButtons="auto"
            >
              {['Thông tin'].map((label, index) => (
                <Tab
                  key={label}
                  label={label}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '12px',
                    lineHeight: '20px',
                    letterSpacing: '-2%',
                    fontFamily: 'Inter',
                    color: '#000000A3',
                    '&.Mui-selected': {
                      color: '#0B3546',
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Stack>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <InfoSection dataP={data} />
      </CustomTabPanel>
    </Box>
  );
};
export default DetailCategoryPage;
