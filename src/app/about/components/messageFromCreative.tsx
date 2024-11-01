import { Typography } from '@mui/material';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

function MessageFromCreative() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="flex w-full justify-center items-center py-[75px] min-h-[700px] ">
      <div className="block w-full max-w-[1440px]">
        <div className="flex flex-col justify-center items-center w-full max-w-[1440px] h-full relative">
          <div className="absolute z-10 left-[20%] bottom-[-150px] flex flex-col justify-end items-start pb-[40px] transform translate-all duration-200 bg-[url('/img/about/msc-bg-1.png')]  h-[486px] w-full max-w-[486px] hover:max-w-[1200px]  bg-[length:100%_100%] hover:w-auto  bg-top rounded-[24px] bg-no-repeat gap-[23px]  px-[56px]">
            <Typography
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical',
                fontSize: '30px',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                textAlign: 'left',
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
              <Typography className="text-[#48B96D] text-left text-[20px] font-[700]">
                Trần Thị Thu Hương
              </Typography>
              <Typography className="text-[#fff]/60 text-left text-[20px] font-[400]">
                Founder and CEO of HyraCap
              </Typography>
            </div>
          </div>
          <img
            className="absolute z-0 left-[50%] translate-x-[-20%] hover:z-20 hover:scale-105 transition ease-in-out duration-100"
            src={'/img/about/tran-thi-thu-huong.png'}
            alt="Trần Thị Thu Hương"
          />
        </div>
      </div>
    </section>
  );
}

export default MessageFromCreative;
