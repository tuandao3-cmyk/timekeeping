import { TimeLeft } from '@/components/icons';
import ProgressBar from '@/components/progress';

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
  field: string;
}

function ProductItem(props: ProductItemProps) {
  switch (props.type) {
    case 'short':
    case 'long':
      return (
        <div className="package-item min-w-[200px] bg-white shadow-md p-4 rounded-lg md:gap-6  border-t-8 border-[#00922F] flex justify-center items-center flex-col flex-grow">
          <div className="w-20 h-20 rounded-full flex justify-center items-center border-2 border-[#00922F] ">
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
        <div className="package-item min-w-[200px] bg-white  rounded-lg md:gap-6   flex justify-center items-left flex-col flex-grow gap-3">
          {props.image}
          <h2 className="text-lg md:text-[30px] font-bold">{props.title}</h2>
          <div className="flex justify-items-start items-center gap-2">
            <TimeLeft />
            {props.startDate}
          </div>
          <p>{props.descriptions}</p>
          <p className="text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#305D3E] to-[#64C383]">
            ${props.profit}
          </p>
          <ProgressBar progress={props.sponsorship} />
          <div className="flex ">
            <p className="text-[15px]">
              Đã đầu tư{' '}
              <span className="font-bold text-black">${props.invested}</span>
            </p>
            <p className="text-[15px]">
              Được tài trợ{' '}
              <span className="font-bold text-black">
                ${props.sponsorship}%
              </span>
            </p>
          </div>
          <p className="text-[13px]">{props.field}</p>
        </div>
      );

    default:
      return 0;
  }
}

export default ProductItem;
