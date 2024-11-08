import { Box, Button, Modal } from '@mui/material';
interface Prop {
  modal: boolean;
  setModal: (v: boolean) => void;
}
function ModalSucses(props: Prop) {
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
          className={` w-[90%] sm:w-[55%] lg:w-[45%] max-h-[90%]`}
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
            Đã gửi thành công
          </p>
          <p className="text-green-500 delay-150  xl:text-3xl text-[14px] font-bold mb-4 font-sans duration-300 ease-in-out transform uppercase text-center ">
            Thông tin đến HyraCap
          </p>

          <div className="w-full bg-white flex items-center justify-center  "></div>

          <div className=" w-full  flex justify-end absolute top-2 left-0">
            <Button
              className="absolute top-0 right-0  text-black hover:bg-white hover:text-black hover:cursor-default"
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

export default ModalSucses;
