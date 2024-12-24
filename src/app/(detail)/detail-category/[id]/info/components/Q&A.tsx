import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';

const questions = [
  {
    question: 'Sản phẩm đầu tư HyraCap là gì? Lợi ích sản phẩm như thế nào ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'Lợi nhuận khi đầu tư vào HyraCap được tính thế nào ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'HyraCap có các gói đầu tư nào cho nhà đầu tư lựa chọn ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'Những ai có thể tham gia đầu tư trên nền tảng HyraCap ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question:
      'HyraCap có yêu cầu về số vốn tối thiểu để bắt đầu đầu tư không ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'Tôi có thể rút tiền đầu tư HyraCap bất kỳ lúc nào không ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'HyraCap có hỗ trợ tư vấn đầu tư cho người dùng không ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question:
      'Phí giao dịch và quản lý tài sản trên HyraCap được tính như thế nào ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question:
      'HyraCap bảo vệ thông tin cá nhân và tài sản của nhà đầu tư như thế nào ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'Làm thế nào để nạp và rút tiền ?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
];

function QandA() {
  return (
    <Stack
      flexDirection={'column'}
      maxWidth={'1440px'}
      width={'100%'}
      px={{
        xs: '12px',
        sm: '16px',
        md: '120px',
      }}
      gap={'40px'}
      py={'62px'}
    >
      <Typography
        fontWeight={700}
        fontSize={{
          xs: '24px',
          md: '32px',
        }}
        lineHeight={'40px'}
        letterSpacing={'-1%'}
        fontFamily={'Inter'}
        color="#000000"
        textAlign={'left'}
      >
        Những câu hỏi thường gặp
      </Typography>
      <Stack
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        gap={{
          xs: '0',
          md: '40px',
        }}
      >
        <Stack
          flexDirection={'column'}
          width={{
            xs: '100%',
            md: '50%',
          }}
        >
          {questions?.slice(0, 5).map((question, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: 'none',
                borderRadius: '8px',
                borderBottom: '1px solid #E6E8EC',
              }}
            >
              <AccordionSummary
                expandIcon={<KeyboardArrowRightIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  paddingLeft: 0,
                  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                    transform: 'rotate(90deg)',
                  },
                }}
              >
                <Stack
                  flexDirection={'row'}
                  justifyContent={'flex-start'}
                  width={'100%'}
                  gap={'30px'}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    fontFamily={'Inter'}
                    color="#000000B2"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    fontFamily={'Inter'}
                    color="#000000E5"
                  >
                    {question.question}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  boxShadow: 'none',
                  border: 'none',
                  fontFamily: 'Inter',
                }}
              >
                {question.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
        <Stack
          flexDirection={'column'}
          width={{
            xs: '100%',
            md: '50%',
          }}
        >
          {questions.slice(5, 10).map((question, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: 'none',
                borderRadius: '8px',
                borderBottom: '1px solid #E6E8EC',
              }}
            >
              <AccordionSummary
                expandIcon={<KeyboardArrowRightIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  paddingLeft: 0,
                  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                    transform: 'rotate(90deg)',
                  },
                }}
              >
                <Stack
                  flexDirection={'row'}
                  justifyContent={'flex-start'}
                  width={'100%'}
                  gap={'30px'}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    fontFamily={'Inter'}
                    color="#000000B2"
                  >
                    {String(index + 1 + 5).padStart(2, '0')}
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    fontFamily={'Inter'}
                    color="#000000E5"
                  >
                    {question.question}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  boxShadow: 'none',
                  border: 'none',
                  fontFamily: 'Inter',
                }}
              >
                {question.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default QandA;
