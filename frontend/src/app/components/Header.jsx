import React from 'react';
import Image from 'next/image';

import '@/styles/header/_header.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className='d-flex justify-content-between'>
                <div>logo</div>
                <div className='navbar-menu'>
                    <Link href='/' className='active'>
                        <Image src='https://assets-global.website-files.com/63a43262f79dbeb635af818d/64143aa33d65707fcdf6c075_Smiling%20Face%20with%20Heart-Eyes-p-500.png' width='40' height='40'/>
                    </Link>
                    <Link href='/'>
                    <Image src='https://assets-global.website-files.com/63a43262f79dbeb635af818d/64143aa33d65707fcdf6c075_Smiling%20Face%20with%20Heart-Eyes-p-500.png' width='40' height='40'/>
                    </Link>
                    <Link href='/'>
                    <Image src='https://assets-global.website-files.com/63a43262f79dbeb635af818d/64143aa33d65707fcdf6c075_Smiling%20Face%20with%20Heart-Eyes-p-500.png' width='40' height='40'/>
                    </Link>
                    <Link href='/'>
                    <Image src='https://assets-global.website-files.com/63a43262f79dbeb635af818d/64143aa33d65707fcdf6c075_Smiling%20Face%20with%20Heart-Eyes-p-500.png' width='40' height='40'/>
                    </Link>

                </div>
                <div>social</div>
            </div>
        </div>
    </header>
  )
}

export default Header