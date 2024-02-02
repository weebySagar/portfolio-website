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

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'See my Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous" /> */}
      </head>
      <body className={outfit.className}>
        <Header />
        {/* <SmoothScrolling> */}

        {children}
        <BootstrapClient/>
        <ParticleComponent />
        <footer style={{ height: "100vh", background: "black" }}>
          <h1>footer</h1>
        </footer>
        {/* </SmoothScrolling> */}
        {/* <Script strategy='afterInteractive' dangerouslySetInnerHTML={{__html:`"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"`}}/>
        <Script strategy='afterInteractive' dangerouslySetInnerHTML={{__html:`"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"`}}/>  */}
        {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>*/}

      </body>
    </html>
  )
}
