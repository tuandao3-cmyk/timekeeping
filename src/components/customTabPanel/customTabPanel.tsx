import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: {
              xs: '8px',
              sm: '16px',
              md: '24px',
            },
            background:
              'linear-gradient(180deg, #F9FBFA 0%, #F5F5F5 21%, #FBFBFB 95%)',
          }}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default CustomTabPanel;
