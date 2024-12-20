import { Stack, Typography } from '@mui/material';

interface ListFieldProps {
  list: any[];
}

function ListField(props: ListFieldProps) {
  const { list } = props;
  console.log(list);

  return (
    <Stack
      flexDirection={'column'}
      py={'12px'}
      px={'20px'}
      bgcolor={'#FFFFFF'}
      borderRadius={'12px'}
      gap={'16px'}
    >
      {list?.map((item, index) => (
        <Stack
          data-aos="zoom-in"
          data-aos-delay={index * 100}
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
            color="rgb(112,112,112)"
          >
            {item.title}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={'14px'}
            lineHeight={'24px'}
            color="rgb(76,76,76)"
            fontFamily={'Inter'}
          >
            {item?.value || ''}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default ListField;
