'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InfoSection from './info/page';
import { Stack, Typography } from '@mui/material';
import CustomTabPanel from '@/components/customTabPanel';
import PitchingDeckSection from './pitchingdeck/page';

const DetailCategoryPage: React.FC = () => {
  const pathname = usePathname();

  const [value, setValue] = React.useState(0);

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
              overflowX: 'auto', // Cho phép cuộn ngang
              whiteSpace: 'nowrap', // Đảm bảo nội dung không xuống dòng
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
              {[
                'Thông tin',
                'Pitchingdeck',
                'Hợp đồng mẫu',
                'Lộ trình tài chính',
                'Kế hoạch kinh doanh',
              ].map((label, index) => (
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
        <InfoSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <InfoSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <InfoSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <InfoSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <InfoSection />
      </CustomTabPanel>
    </Box>
  );
};
export default DetailCategoryPage;
