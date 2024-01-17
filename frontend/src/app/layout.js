import { Outfit } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

import Header from './components/Header';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'See my Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header/>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>

        </body>
    </html>
  )
}
