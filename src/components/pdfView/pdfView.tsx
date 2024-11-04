import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

interface PdfViewProps {
  pdfPath: string;
  openPdf: boolean;
  setOpenPdf: (openPdf: boolean) => void;
}

function PdfView(props: PdfViewProps) {
  const handleClose = () => {
    props.setOpenPdf(false);
  };
  return (
    <>
      <Drawer
        anchor="bottom"
        open={props.openPdf}
        onClose={handleClose}
        PaperProps={{
          sx: {
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            position: 'relative',
          },
        }}
      >
        <div className="flex justify-end px-2 bg-[#323639]">
          <IconButton
            onClick={handleClose}
            sx={{
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <embed
          src={props.pdfPath}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </Drawer>
    </>
  );
}

export default PdfView;
