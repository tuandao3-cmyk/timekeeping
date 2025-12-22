'use client';

import dynamic from 'next/dynamic';

const PdfView = dynamic(() => import('./pdfView'), {
  ssr: false,
});

export default PdfView;
