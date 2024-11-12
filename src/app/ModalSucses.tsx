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
          className="w-[90%] sm:w-[55%] lg:w-[40%] max-h-[80%]"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 24,
            p: 5,
            textAlign: 'center',
          }}
        >
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            </svg>

            <p
              className="xl:text-3xl text-[18px] font-bold mb-2 font-sans uppercase text-green-700"
              style={{ fontWeight: 700 }}
            >
              Đã gửi thành công
            </p>
            <p className="text-green-600 text-[16px] font-semibold mb-6 font-sans">
              Thông tin đã được chuyển đến HyraCap
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
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalSucses;
