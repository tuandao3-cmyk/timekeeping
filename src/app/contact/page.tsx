'use client';
import ContactForm from '@/components/contact_form/ContactForm';
import ContactInfo from '@/components/contact_information/ContactInfo';
import { Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Map = dynamic(() => import('./Map'), { ssr: false });

const ContactPage: React.FC = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <div
        ref={ref}
        className="flex flex-col items-center justify-center font-sans w-full min-h-[320px] lg:min-h-[585px] lg:h-[520px] bg-[#07212C] bg-[url('/img/contactbg.png')] bg-no-repeat bg-cover "
      >
        <div className="  pb-[107px] justify-center">
          <div className="flex flex-col items-center justify-end text-center max-w-[1440px] text-white gap-[22px]">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '32px', md: '48px' },
                lineHeight: { xs: '40px', md: '56px' },
                textAlign: 'center',
                fontFamily: 'Inter',
              }}
              className={`${inView ? 'animate-fadeIn' : 'translate-y-20 opacity-0'} transition
           duration-300 ease-in-out`}
            >
              Liên hệ
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: '14px', md: '18px' },
                lineHeight: '24px',
                textAlign: 'center',
                fontFamily: 'Inter',
                padding: '0 50px',
              }}
              className={`${inView ? 'animate-fadeIn' : 'translate-y-20 opacity-0'} transition
           duration-300 delay-300 ease-in-out`}
            >
              Liên hệ với chúng tôi để được tư vấn và hỗ trợ
            </Typography>
          </div>
        </div>
      </div>
      <div className="  flex flex-col  lg:px-[20px] py-2 lg:py-10 md:px-[40px] my-8 max-md:!px-8">
        <div className="flex justify-center  flex-col lg:flex-row gap-10 ">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  );
};
export default ContactPage;
