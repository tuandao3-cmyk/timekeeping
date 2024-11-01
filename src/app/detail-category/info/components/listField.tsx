import { Stack, Typography } from '@mui/material';

interface ListFieldProps {
  list: any[];
}

function ListField(props: ListFieldProps) {
  const { list } = props;
  return (
    <Stack
      flexDirection={'column'}
      py={'12px'}
      px={'20px'}
      bgcolor={'#FFFFFF'}
      borderRadius={'12px'}
      gap={'16px'}
    >
      {list.map((item, index) => (
        <Stack
          key={index}
          flexDirection={'row'}
          justifyContent={'space-between'}
          py={'4px'}
          borderBottom={'1px solid #0000000F'}
        >
          <Typography
            fontWeight={400}
            fontSize={'14px'}
            lineHeight={'24px'}
            fontFamily={'Inter'}
            color="#0000008F"
          >
            {item.title}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={'14px'}
            lineHeight={'24px'}
            color="#000000B2"
            fontFamily={'Inter'}
          >
            {item.value}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default ListField;
