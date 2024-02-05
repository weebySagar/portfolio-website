import { Outfit } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle"
import "@/styles/global/_global.scss";

import Header from '../components/header/Header';
import SmoothScrolling from '@/components/smooth scroll/SmoothScrolling';
import ParticleComponent from '@/components/particles/ParticleComponent';
import { BootstrapClient } from '@/components/bootstrap/BootstrapClient';
import Footer from '@/components/footer/Footer';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "Sagar's Portfolio",
  description: 'See my Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    
          <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={outfit.className}>
        <Header />
        {/* <SmoothScrolling> */}

        {children}
        <BootstrapClient/>
        <ParticleComponent />
        <Footer/>
        {/* </SmoothScrolling> */}
      </body>
    </html>
  )
}
