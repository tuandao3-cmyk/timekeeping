import Image from 'next/image';

const DownloadSection = () => {
  return (
    <div className="bg-[#FCFCFD] overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 ">
          <h2 className="text-3xl font-bold mb-4">
            INVEST PROFITABLY <span className="text-green-500">ANYWHERE, ANYTIME</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-[90%]">
            Download our app now to access real-time investment tools and grow your wealth with ease!
          </p>
          <div className="flex flex-col beetween sm:flex-row gap-6 mb-8">
            <button className="bg-[#48B96D] text-white px-6 py-3 w-[200px] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186c-.28.28-.45.66-.45 1.06V1.754c0 .4.17.78.45 1.06zM14.4 12.8L17.365 15.768L6.63 22.186 14.4 12.8zM17.365 8.232L14.4 11.2 6.63 1.814 17.365 8.232zM22.8 12L18.969 15.83 15.6 12.459 19.431 8.628 22.8 12z"/>
              </svg>
              Google Play
            </button>
            <button className="bg-[#48B96D] text-white px-6 py-3 w-[200px] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>
          </div>
          <div className="bg-[#000000]/5 p-4 rounded-lg flex md:max-w-[80%] items-center">
            <div className="w-24 h-24 bg-[#FBFFFE] mr-4"></div>
            <div>
              <p className="text-normal leading-6 text-[#000000]/60 mb-1">Scan to Download</p>
              <p className="font-semibold text-2xl leading-8 font-inter text-[#04141A]">IOS & Android</p>
            </div>
          </div>
        </div>
        <div className="relative w-[50%]  ">
          <Image
            src="/img/downloadimg.png"
            alt="App Screenshot"
            width={708}
            height={812}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;