import { Box, Button, Modal } from '@mui/material';
import Image from 'next/image';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
interface Prop {
  modal: boolean;
  setModal: (v: boolean) => void;
}
function ModalDown(props: Prop) {
  const { modal, setModal } = props;

  return (
    <div>
      <Modal
        
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          className={`w-[90%] sm:w-[55%] lg:w-[45%]`}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <p
            className={`xl:text-3xl text-[14px] font-bold mb-4 font-sans duration-300 ease-in-out transform uppercase text-center mt-5`}
            style={{
              fontWeight: 700,
            }}
          >
            Bạn hãy tải ứng dụng để sử dụng{' '}
          </p>
          <p className="text-green-500 delay-150  xl:text-3xl text-[14px] font-bold mb-4 font-sans duration-300 ease-in-out transform uppercase text-center ">
            dịch vụ của HyraCap
          </p>
          <div
            className={`bg-[#000000]/5 sm:bg-white  rounded-lg flex md:max-w-[100%] items-center justify-center duration-300 delay-700 ease-in-out transform`}
          >
            <div className="w-24 h-24 bg-[#000000]/5 mr-4 flex items-center justify-center">
              <Image
                src={'/img/qr.png'}
                alt="App Screenshot"
                width={708}
                height={812}
                className={` w-[80px] h-[80px] 
                 `}
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
          <div className="w-full flex items-center justify-center  ">
            <div className="flex index-2 justify-center items-center  bg-[#07212C] w-[100%] sm:w-[400px] rounded-lg my-8  p-5  ">
              <div className="index-3 relative flex flex-row text-white  font-bold text-[11px] bg-[#48B96D] w-full h-full  rounded-lg ">
                <div className=" flex  flex-col h-full text-[20px] md:text-2xl lg:text-3xl  justify-between gap-4 py-5 px-28 pl-5 md:py-10 md:px-8  ">
                  <p className="max-w-[250px]  w-[200px] md:w-[auto] ">
                    Trải nghiệm ngay nền tảng đầu tư HyraCap
                  </p>

                  <div className="flex text-xs font-medium flex-col max-w-[130px] md:max-w-[140px] pb-10 gap-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.hyracap"
                      className="flex items-center  gap-2 bg-white text-[#34A853] p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaGooglePlay className="md:text-xl text-[14px]" />
                      <span>GOOGLE PLAY</span>
                    </a>

                    <a
                      href="https://apps.apple.com/app/hyracap"
                      className="flex items-center gap-2 bg-white text-[#34A853] p-2 rounded-full hover:bg-gray-100 transition-colors "
                    >
                      <FaApple className="md:text-xl text-[14px]" />
                      <span>APP STORE</span>
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/product/app_log.png"
                    alt="screenshot"
                    className="max-w-[216px] max-h-[198px] md:max-w-[216px] md:max-h-[228px] absolute -right-10 -bottom-4 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full  flex justify-end absolute top-2 left-0">
            <Button
              className="absolute top-0 right-0 bg-black text-white hover:bg-white hover:text-black hover:cursor-default"
              onClick={() => setModal(false)}
              color="inherit"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalDown;
