
"use client";
import Link from 'next/link';
import React from 'react';
import {Document,Page,pdfjs} from 'react-pdf';


const PdfViewer = ({file}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
      ).toString();
  return (
    <div className='resume-wrapper'>
    <Link href={file} target='blank'>
        <Document file={file}>
            <Page pageNumber={1}  renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
        </Link>
   </div>
  )
}

export default PdfViewer