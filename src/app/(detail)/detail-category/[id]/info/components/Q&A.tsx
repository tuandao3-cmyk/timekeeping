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
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.`,
  },
  {
    question: 'How does it work?',
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
          {questions.slice(0, 5).map((question, index) => (
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
