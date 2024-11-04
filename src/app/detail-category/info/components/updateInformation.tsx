import { Box, Button, Input, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

function UpdateInfo() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Stack
      flexDirection={'column'}
      maxWidth={'1440px'}
      width={'100%'}
      px={'120px'}
      gap={'40px'}
      py={'62px'}
    >
      <Box
        sx={{
          backgroundImage: 'url(/img/product_category/updateInfoBg.png)',
        }}
        borderRadius={'16px'}
        height={'313px'}
        width={'100%'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'80px'}
      >
        <Image
          src={'/img/product_category/content.png'}
          width={455}
          height={323}
          alt="content"
        />
        <Stack flexDirection={'column'} maxWidth={455} gap={'20px'}>
          <Typography
            fontFamily={'Inter'}
            fontWeight={600}
            fontSize={'16px'}
            lineHeight={'24px'}
            color="#000000CC"
          >
            Cập nhật thông tin mới nhất
          </Typography>
          <Stack
            flexDirection={'row'}
            border={isFocused ? '1px solid #48B96D' : '1px solid #00000029'}
            py={'4px'}
            pr={'4px'}
            pl={'16px'}
            borderRadius={'8px'}
            width={'100%'}
          >
            <Input
              placeholder="Nhập địa chỉ email"
              disableUnderline
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onMouseMove={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
              sx={{
                color: '#000000A3',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                border: 'none',
                flexGrow: 1,
              }}
            />
            <Button
              sx={{
                backgroundColor: '#48B96D',
                borderRadius: '6px',
                border: '1px solid #00987466',
                padding: '10px 16px',
                color: '#FFFFFF',
                textTransform: 'none',
                width: '80px',
                '&:hover': {
                  backgroundColor: '#3DA55C',
                  border: '1px solid #007F5F',
                },
              }}
            >
              Send
            </Button>
          </Stack>
          <Typography
            fontFamily={'Inter'}
            fontWeight={400}
            fontSize={'14px'}
            lineHeight={'24px'}
            color="#0000007A"
          >
            Bạn sẽ nhận được email cập nhật thường xuyên về tiến độ, thay đổi
            quan trọng, và cơ hội đầu tư mới của các dự án.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

export default UpdateInfo;
