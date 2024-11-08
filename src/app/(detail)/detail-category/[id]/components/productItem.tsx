import { TimeLeft } from '@/components/icons';
import ProgressBar from '@/components/progress';
import { Typography } from '@mui/material';
import { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';

interface ProductItemProps {
  title: string;
  interest_rate: string;
  descriptions: string[];
  term: string;
  image: React.ReactNode;
  type: string;
  startDate: string;
  profit: number;
  sponsorship: number;
  invested: number;
  field: any[];
  className?: string;
  id?: string;
}

const ProductItem = forwardRef<HTMLDivElement, ProductItemProps>(
  (props: ProductItemProps, ref) => {
    const router = useRouter();
    const handleNavigate = (id: string) => {
      window.location.href = `/detail-category/${id}`;
    };
    switch (props.type) {
      case 'short':
      case 'long':
        return (
          <div
            ref={ref}
            className={`package-item md:w-[384px] bg-white shadow-md p-4 rounded-lg md:gap-6  border-t-8 border-[#00922F] flex justify-center items-center flex-col flex-grow ${props.className}`}
          >
            <div className="w-full h-20 rounded-full flex justify-center items-center border-2 border-[#00922F] ">
              {props.image}
            </div>
            <h2 className="text-lg mf:text-[30px] font-bold">{props.title}</h2>
            <p className="text-xl md:text-[35px] font-bold text-[#00AA38] ">
              {props.interest_rate}/năm
            </p>
            {
              <ul className="text-left text-sm md:text-lg">
                {props.descriptions.map((description, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:text-[20px] text-[11px]"
                  >
                    {description}
                  </li>
                ))}
              </ul>
            }
            <div
              className="w-[80%] flex justify-center items-center border-dashed border-[#D6D6D6]"
              style={{ borderWidth: '0.5px' }}
            ></div>

            <div
              className="w-[60%]  flex justify-center rounded-[20px] items-center border-2 border-[#9AD2AE]  text-[#00AA38] 
                lg:text-[20px] lg:min-h-[42px] md:text-[15px] md:min-h-[30px]  mt-4 sm:text-[12px] sm:min-h-[30px] text-[10px] min-h-[30px]
                "
            >
              Kỳ hạn {props.term}
            </div>
          </div>
        );
      case 'flexible':
        return (
          <div
            ref={ref}
            className={`package-item max-w-none md:max-w-[384px] bg-white  rounded-lg md:gap-6   flex justify-center items-left flex-col flex-grow gap-3 ${props.className} hover:shadow-lg p-5 hover:scale-105 transition ease-in-out duration-150 hover:cursor-pointer `}
            onClick={() => props.id && handleNavigate(props.id)}
          >
            {props.image}

            <Typography
              fontWeight={600}
              fontSize={24}
              lineHeight={'32px'}
              letterSpacing={'-1%'}
              color="#04141A"
              textTransform={'uppercase'}
              display="-webkit-box"
              overflow="hidden"
              textOverflow="ellipsis"
              sx={{
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {props.title}
            </Typography>

            <div>
              <p className="uppercase font-[400] text-[14px] text-[#000] text-opacity-70">
                mục tiêu huy động
              </p>
              <p className="text-[20px] font-bold text-[#04141A] ">
                ${props.profit.toLocaleString('en-US')}
              </p>
            </div>
            <ProgressBar progress={props.sponsorship} />
            <div className="flex justify-between">
              <p className="text-[14px]">
                <span className="font-bold text-[#48B96D]">
                  ${props.invested.toLocaleString('en-US')}
                </span>{' '}
                Đã huy động
              </p>
              <p className="text-[15px]">
                <span className="font-bold text-[#48B96D]">
                  ${props.sponsorship}%
                </span>{' '}
                Hoàn thành
              </p>
            </div>
            <div className="w-min">
              {props?.field?.map((item, index) => (
                <p className="text-[13px] text-nowrap p-[3px] rounded-[3px] bg-[#0000000F] text-[#000000B2] uppercase font-[700]">
                  {item?.name || ''}
                </p>
              ))}
            </div>
          </div>
        );

      default:
        return 0;
    }
  }
);

ProductItem.displayName = 'ProductItem';

export default ProductItem;
