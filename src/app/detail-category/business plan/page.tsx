'use client';
import { usePathname } from "next/navigation";
import { FaDownload, FaEye } from "react-icons/fa";

const BusinessPlanSection: React.FC = () => {
    const pathname = usePathname(); 

    return (
        <div className="h-[80vh] bg-white px-11 py-10">
                <div className="flex gap-5 py-10 " >
    <div className="bg-[#CCCCCC] w-1 h-auto rounded-full"></div>
        <div  className="flex justify-between  w-full">
          <div >
            <p className="text-[30px] ">Kế hoạch kinh doanh</p>
            <span className="text-[25px] text-[#9f9f9f]"> 02/03/2024</span>
          </div>
          <div className="flex">
          <button className="bg-transparent border-2 border-[#28a745] rounded-full cursor-pointer ml-[10px] w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#28a745] group">
              <FaEye className="text-[#28a745] group-hover:text-white transition-colors duration-300" />
          </button>
          <button className="bg-transparent border-2 border-[#28a745] rounded-full cursor-pointer ml-[10px] w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#28a745] group">
              <FaDownload className="text-[#28a745] group-hover:text-white transition-colors duration-300" />
          </button>
          </div>
        </div>
    </div>

        </div>

    );
};

export default BusinessPlanSection;