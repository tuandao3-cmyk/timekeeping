import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface PdfViewProps {
  pdfPath: string;
  openPdf: boolean;
  setOpenPdf: (openPdf: boolean) => void;
}

function PdfView(props: PdfViewProps) {
  const handleClose = () => {
    props.setOpenPdf(false);
  };

  const isPdf = props.pdfPath.endsWith('.pdf');
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

        {isPdf ? (
          <iframe src={props.pdfPath} width="100%" height="100%" />
        ) : (
          <Image
            width={1000}
            height={1000}
            src={props.pdfPath}
            alt="File Preview"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        )}
      </Drawer>
    </>
  );
}

export default PdfView;
