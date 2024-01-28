import { Outfit } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.css"

import Header from '../components/header/Header';
import SmoothScrolling from '@/components/smooth scroll/SmoothScrolling';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'See my Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossOrigin="anonymous" />
      </head>
      <body className={outfit.className}>
        <Header/>
        {/* <SmoothScrolling> */}

        {children}
        {/* </SmoothScrolling> */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>

        </body>
    </html>
  )
}
