import { Stack, Typography } from '@mui/material';
import exp from 'constants';
import { desc } from 'framer-motion/client';

function Terminology() {
  const data = [
    {
      title: 'Huấn luyện AI (Training AI)',
      desc: 'Training AI (Huấn luyện AI) là quá trình trong đó một mô hình học máy hoặc mạng nơ-ron học từ dữ liệu để thực hiện một nhiệm vụ cụ thể, chẳng hạn như phân loại hình ảnh, nhận dạng giọng nói, dự đoán, hoặc đưa ra quyết định.',
    },
    {
      title: 'Điện toán biên (Edge Computing)',
      desc: 'Điện toán biên (Edge Computing) là một mô hình tính toán phân tán trong đó việc xử lý dữ liệu được thực hiện gần với nơi dữ liệu được tạo ra hoặc thu thập, thay vì chuyển toàn bộ dữ liệu về một trung tâm dữ liệu hoặc đám mây để xử lý. Mục tiêu chính của điện toán biên là giảm độ trễ, tiết kiệm băng thông và cải thiện hiệu suất ứng dụng.',
    },
    {
      title: 'Cụm thiết bị (Cluster)',
      desc: ' Là tập hợp các thiết bị active do người dùng trực tiếp giới thiệu.',
    },
  ];
  return (
    <Stack
      flexDirection={'column'}
      width={'100%'}
      bgcolor={'#FFFFFF'}
      p={'20px'}
      borderRadius={'16px'}
    >
      <Stack flexDirection={'row'} width={'100%'} py={'16px'}>
        <Typography
          fontFamily={'Inter'}
          fontSize={'14px'}
          lineHeight={'24px'}
          fontWeight={700}
          textAlign={'center'}
          color="#000000CC"
          flexGrow={1}
        >
          Thuật ngữ chính
        </Typography>
        <Typography
          fontFamily={'Inter'}
          fontSize={'14px'}
          lineHeight={'24px'}
          fontWeight={700}
          textAlign={'center'}
          color="#000000CC"
          flexGrow={1}
        >
          Mô tả
        </Typography>
      </Stack>
      {data.map((item, index) => (
        <Stack
          key={index}
          flexDirection={'row'}
          justifyContent={'space-between'}
          py={'12px'}
          borderBottom={'1px solid #0000000F'}
        >
          <Typography
            fontWeight={400}
            fontSize={'14px'}
            lineHeight={'24px'}
            fontFamily={'Inter'}
            color="#0000008F"
            flexGrow={1}
          >
            {item.title}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={'14px'}
            lineHeight={'24px'}
            color="#000000B2"
            fontFamily={'Inter'}
            flexGrow={1}
            maxWidth={'50%'}
          >
            {item.desc}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default Terminology;
