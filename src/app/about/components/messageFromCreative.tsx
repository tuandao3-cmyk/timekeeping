import { Typography } from '@mui/material';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

function MessageFromCreative() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="flex w-full justify-center items-center lg:py-[75px] py-[30px] min-h-[700px] px-[14px] ">
      <div className="flex justify-center items-center w-full max-w-[1440px] min-h-[700px]">
        <div className="flex flex-col justify-center items-center w-full max-w-[1440px] min-h-[528px] h-full relative ">
          <div className="absolute z-10 lg:left-[20%] bottom-0   lg:top-[-100px] flex flex-col justify-end px-[14px]  items-start pb-[40px] transform translate-all duration-200 bg-[url('/img/about/msc-bg-1.png')] min-h-[320px] h-auto max-h-[528px] md:max-h-[300px] lg:max-h-[500px] max-sm:w-full lg:max-w-[486px] hover:max-w-[1200px]  bg-[length:100%_100%] hover:w-auto  bg-top rounded-[24px] bg-no-repeat gap-[23px] pt-[60px] md:pt-0  md:px-[56px]">
            <Typography
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: {
                  md: 6,
                  lg: 6,
                },
                WebkitBoxOrient: 'vertical',
                fontSize: {
                  xs: '16px',
                  md: '30px',
                  lg: '30px',
                },
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                textAlign: 'left',
                fontFamily: 'Inter',
              }}
            >
              Tại Hyra Capital, chúng tôi không chỉ đơn thuần là một quỹ đầu tư.
              Chúng tôi là đối tác của bạn, cánh tay nối dài giúp bạn đạt được
              mục tiêu và ước mơ của mình. Với tầm nhìn xa và đội ngũ chuyên
              nghiệp, chúng tôi cam kết đem đến cho bạn các giải pháp tài chính
              và đào tạo toàn diện, giúp bạn vượt qua mọi thách thức và hướng
              đến thành công.
            </Typography>
            <div>
              <Typography className="text-[#48B96D] text-left text-[20px] font-[700] font-sans">
                Trần Thị Thu Hương
              </Typography>
              <Typography className="text-[#fff]/60 text-left text-[20px] font-[400] font-sans">
                Founder and CEO of HyraCap
              </Typography>
            </div>
          </div>
          <img
            className="absolute top-0   z-0 lg:left-[50%] lg:translate-x-[-20%] hover:z-20 hover:scale-105 transition ease-in-out duration-100"
            src={'/img/about/tran-thi-thu-huong.png'}
            alt="Trần Thị Thu Hương"
          />
        </div>
      </div>
    </section>
  );
}

export default MessageFromCreative;
