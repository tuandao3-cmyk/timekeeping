import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NearlyActionsProps {
  actions: any[];
}

function NearlyActions(props: NearlyActionsProps) {
  const router = useRouter();
  return (
    <Box flexDirection={'column'} display={'flex'} gap={'24px'} pb={'34px'}>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography
          fontFamily={'Inter'}
          fontWeight={600}
          fontSize={'20px'}
          lineHeight={'28px'}
          color="#000000"
        >
          Hoạt động gần đây
        </Typography>
        <Button
          sx={{
            color: '#31814B',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '24px',
            textTransform: 'none',
          }}
          onClick={() => router.push('/news')}
        >
          Xem thêm
        </Button>
      </Stack>
      <Stack flexDirection={'column'} gap={'20px'}>
        {props.actions.map((action, index) => (
          <Stack flexDirection={'row'} key={index} gap={'12px'}>
            <Box>
              <Image
                onClick={() => router.push('/news/newsdetail')}
                layout="responsive"
                className="cursor-pointer"
                src={`${action.img}/${index + 1}.png`}
                alt={action.img}
                width={80}
                height={80}
              />
            </Box>
            <Stack flexDirection={'column'} maxWidth={'293px'}>
              <Typography
                fontWeight={400}
                fontSize={'14px'}
                lineHeight={'24px'}
                fontFamily={'Inter'}
                color="#0000008F"
              >
                {action.date}
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={'14px'}
                lineHeight={'24px'}
                fontFamily={'Inter'}
                color="#000000B2"
                onClick={() => router.push('/news/newsdetail')}
                className="cursor-pointer"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {action.title}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
export default NearlyActions;
