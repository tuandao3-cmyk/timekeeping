import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const DownloadSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className="bg-[#F3F7F4] overflow-hidden flex flex-col justify-center items-center  p-2 pr-5 pl-5 md:pt-20 md:pb-20">
      <div className="max-w-[1440px]">
        <div className="container mx-auto  flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0  ">
            <div className="item-center w-full justify-center flex">
              <Image
                ref={ref}
                src="/img/down_re.png"
                alt="App Screenshot"
                width={220}
                height={270}
                className={`h-[384px] w-[334px] 
                `}
              />
            </div>

            <p
              ref={ref}
              className={`text-3xl font-bold mb-4 mt-10 md:mt:0 font-sans duration-300 ease-in-out transform uppercase ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Đầu tư sinh lời{' '}
              <span className="text-green-500 delay-150 uppercase font-sans">
                Mọi lúc, mọi nơi
              </span>
            </p>
            <p
              ref={ref}
              className={`text-gray-600 mb-8 max-w-[90%] font-sans duration-300 delay-300 ease-in-out transform ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Tải ứng dụng HyraCap để trải nghiệm những tính năng đầu tư sinh
              lời hiệu quả.
            </p>
            <div className="flex flex-col beetween sm:flex-row gap-6 mb-8">
              <button
                ref={ref}
                className={`bg-[#48B96D] w-full h-16 text-white px-6 py-3 md:w-[200px] font-sans rounded-xl flex items-center justify-center gap-[10px] duration-300 delay-500 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5977 10.8453H12.0527V14.9366H17.4627C16.5977 17.6641 14.4615 18.5728 12.009 18.5728C11.0586 18.574 10.122 18.3459 9.27853 17.908C8.43508 17.47 7.70973 16.835 7.16402 16.0569C6.6183 15.2788 6.26832 14.3806 6.14377 13.4384C6.01923 12.4962 6.12379 11.5379 6.44858 10.6447C6.77338 9.75158 7.30882 8.94994 8.00949 8.30784C8.71016 7.66575 9.55537 7.20213 10.4734 6.95634C11.3915 6.71055 12.3553 6.68983 13.283 6.89594C14.2108 7.10205 15.0751 7.52892 15.8027 8.14031L18.7752 5.30906C17.5782 4.20636 16.1301 3.4125 14.5566 2.9964C12.9832 2.5803 11.3319 2.55453 9.74624 2.92135C8.16056 3.28816 6.68839 4.03645 5.45751 5.10127C4.22663 6.1661 3.27425 7.51526 2.68306 9.03164C2.09186 10.548 1.87972 12.1858 2.06504 13.8027C2.25037 15.4197 2.82756 16.967 3.7465 18.3103C4.66545 19.6536 5.89838 20.7523 7.33826 21.511C8.77814 22.2697 10.3814 22.6655 12.009 22.6641C17.5227 22.6641 22.509 19.0278 21.5977 10.8453Z"
                    fill="#FCFCFD"
                  />
                </svg>
                Google Play
              </button>
              <button
                ref={ref}
                className={`bg-[#48B96D] w-full h-16 text-white px-6 py-3 font-sans md:w-[200px] rounded-xl flex items-center justify-center gap-[10px] duration-300 delay-500 ease-in-out transform ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3486 3.16852C12.935 3.58607 12.662 4.10763 12.4865 4.63713C12.4854 4.6404 12.4843 4.64367 12.4832 4.64694C12.4516 4.74289 12.4232 4.83908 12.3978 4.93493C12.3978 4.93495 12.3978 4.93497 12.3977 4.93498C12.27 5.41586 12.216 5.88843 12.2033 6.28056C12.1964 6.49532 12.3747 6.66754 12.5883 6.64372C12.9931 6.59857 13.358 6.48419 13.6854 6.32841C13.6856 6.32834 13.6857 6.32826 13.6859 6.32819C13.8626 6.24406 14.0284 6.14786 14.1836 6.04398C14.1979 6.03444 14.212 6.02483 14.2261 6.01515C14.6898 5.69675 15.0569 5.31169 15.3374 4.98124C15.5898 4.684 15.7758 4.27608 15.909 3.8388C15.9167 3.81357 15.9243 3.78824 15.9316 3.76283C16.0051 3.50851 16.0612 3.24596 16.1027 2.99084C16.1028 2.99078 16.1028 2.99072 16.1028 2.99065C16.1525 2.68485 16.1812 2.38972 16.1933 2.13223C16.2049 1.88678 15.9789 1.70914 15.7433 1.77902C15.5202 1.8452 15.2478 1.94011 14.9525 2.07359C14.9524 2.07364 14.9523 2.07369 14.9522 2.07374C14.7212 2.17819 14.4763 2.30625 14.2302 2.46264C14.2041 2.47921 14.178 2.4961 14.1519 2.51331C13.8781 2.69392 13.6045 2.91016 13.3486 3.16852ZM13.8128 3.68677L13.8128 3.6868L13.8128 3.68677ZM13.3486 3.16852L13.3596 3.17938L13.3486 3.16852Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1527 20.9652C15.7149 21.1806 15.9979 21.2719 16.1567 21.3026C16.2184 21.2758 16.3305 21.2224 16.4966 21.1209C16.8551 20.9019 17.2947 20.5606 17.7227 20.1276C18.3397 19.5032 18.7808 18.8475 19.0127 18.2574C17.8957 17.3591 16.6 15.8152 16.5387 13.6284C16.4852 11.7231 17.1045 10.0683 17.8909 8.87121C17.8836 8.86684 17.8763 8.86249 17.869 8.85816C17.3895 8.57441 17.0534 8.49891 16.8973 8.50204C16.3385 8.51327 15.7819 8.72144 14.9718 9.05636L14.94 9.06951C14.6697 9.18132 14.3338 9.32024 14.0055 9.42762C13.6699 9.53743 13.2025 9.66319 12.6812 9.66319C12.1555 9.66319 11.6902 9.53028 11.3658 9.41858C11.0488 9.30942 10.7259 9.16874 10.4717 9.05801C10.461 9.05334 10.4504 9.04873 10.44 9.04417C9.64348 8.69731 9.13466 8.50245 8.62793 8.50245C8.19781 8.50245 7.35699 8.70343 6.63099 9.41595C5.95224 10.0821 5.2002 11.3695 5.2002 13.8538C5.2002 14.9102 5.81964 16.9424 6.87162 18.7843C7.38013 19.6746 7.91868 20.3916 8.40744 20.8534C8.83324 21.2558 9.051 21.3091 9.06388 21.3156H9.09191C9.22598 21.3156 9.47559 21.2476 10.1912 20.9703M20.9813 17.1877C21.1131 17.2615 21.2033 17.3963 21.1966 17.5472C21.068 20.486 17.4969 23.3156 16.2705 23.3156C15.6973 23.3156 15.0641 23.073 14.4378 22.8331C13.8248 22.5983 13.218 22.3659 12.6812 22.3659C12.1253 22.3659 11.5222 22.5995 10.9143 22.8351C10.297 23.0742 9.67406 23.3156 9.09191 23.3156C6.39556 23.3977 3.2002 16.9491 3.2002 13.8538C3.20021 8.01493 6.804 6.50245 8.62793 6.50245C9.61261 6.50245 10.4904 6.88471 11.2385 7.2105C11.794 7.45239 12.278 7.66319 12.6812 7.66319C13.1068 7.66319 13.6199 7.4511 14.2075 7.20817C14.9735 6.89149 15.8663 6.52235 16.8571 6.50245C18.2188 6.47509 19.7114 7.58955 20.4533 8.39975C20.6171 8.57868 20.5541 8.85846 20.3706 9.01713C19.5551 9.72216 18.4777 11.4266 18.5379 13.5724C18.5895 15.4137 20.0729 16.6794 20.9813 17.1877ZM10.2909 20.9315C10.8179 20.7255 11.738 20.3659 12.6812 20.3659C13.6023 20.3659 14.5244 20.7224 15.0498 20.9255C15.086 20.9395 15.1204 20.9528 15.1527 20.9652M10.2909 20.9315C10.2559 20.9452 10.2227 20.9582 10.1912 20.9703L10.2909 20.9315Z"
                    fill="#FCFCFD"
                  />
                </svg>
                App Store
              </button>
            </div>
            <div
              ref={ref}
              className={` md:bg-[#000000]/5 p-4 rounded-lg flex md:max-w-[80%] items-center justify-center  duration-300 delay-700 ease-in-out transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            >
              <div className="w-24 h-24 bg-[#FBFFFE] mr-4 flex items-center justify-center">
                <Image
                  ref={ref}
                  src="/img/qr.png"
                  alt="App Screenshot"
                  width={80}
                  height={24}
                />
              </div>
              <div>
                <p className="text-normal leading-6 text-[#000000]/60 mb-1 font-sans">
                  Scan to Download
                </p>
                <p className="font-semibold text-2xl leading-8 font-inter text-[#04141A] font-sans">
                  IOS & Android
                </p>
              </div>
            </div>
          </div>
          <div className="relative  max-h-[660px] flex items-center justify-center overflow-hidden ">
            <Image
              ref={ref}
              src="/img/downloadimg.png"
              alt="App Screenshot"
              width={708}
              height={812}
              className={`h-[812px] w-[708px] duration-300 hidden md:block delay-200 ease-in-out transform ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              } `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
