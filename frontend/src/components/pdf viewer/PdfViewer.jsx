
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import {Document,Page,pdfjs} from 'react-pdf';


const PdfViewer = ({file,showResume}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
      ).toString();
  return (
    <motion.div initial={{x:150}} animate={{x:showResume ?'0' : '150%',opacity:1}} transition={{ease:'linear',duration:0.3}}  className='resume-wrapper'>
    <Link href={file} target='blank'>
        <Document file={file}>
            <Page pageNumber={1}  renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
        </Link>
   </motion.div>
  )
}

export default PdfViewer