// import CloseIcon from '@mui/icons-material/Close';
// import { IconButton } from '@mui/material';
// import Drawer from '@mui/material/Drawer';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// interface PdfViewProps {
//   pdfPath: string;
//   openPdf: boolean;
//   setOpenPdf: (openPdf: boolean) => void;
// }

// function PdfView(props: PdfViewProps) {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();
//   const handleClose = () => {
//     props.setOpenPdf(false);
//   };

//   // const isPdf = props.pdfPath.endsWith('.pdf');
//   return (
//     <>
//       <Drawer
//         anchor="bottom"
//         open={props.openPdf}
//         onClose={handleClose}
//         PaperProps={{
//           sx: {
//             height: '100vh',
//             width: '100vw',
//             overflow: 'hidden',
//             position: 'relative',
//           },
//         }}
//       >
//         <div className="flex justify-end px-2 bg-[#323639]">
//           <IconButton
//             onClick={handleClose}
//             sx={{
//               color: 'white',
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </div>

//         <Worker
//           workerUrl={`https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js`}
//         >
//           <Viewer
//             fileUrl={
//               props?.pdfPath ||
//               'https://hyracap.s3.us-east-1.amazonaws.com/blog/petalspetals.pdf'
//             }
//             plugins={[defaultLayoutPluginInstance]}
//           />
//         </Worker>
//       </Drawer>
//     </>
//   );
// }

// export default PdfView;
