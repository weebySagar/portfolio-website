"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import '@/styles/header/_header.scss';
import useFetch from '../../hooks/useFetch';
import { findValueByKey } from '@/utils/helper';
import NavigationMenu from './NavigationMenu';
import NavigationBrand from './NavigationBrand';
import NavigationSocialLinks from './NavigationSocialLinks';


const Header = () => {
   const {data,isLoading} =  useFetch('http://localhost:1337/api/header?populate=deep');

  return (
     !isLoading && <header className='header'>
        <div className="container-fluid">
            <div className='row align-items-center'>
              <div className="col"><NavigationBrand navigationBrand={data?.NavigationBrand}/></div>
              <div className="col d-flex justify-content-center navbar-menu-wrapper">   <NavigationMenu navigationMenu={data?.NavigationMenu}/></div>
              <div className="col d-flex justify-content-end"><NavigationSocialLinks socialLinks={data.SocialLinks}/></div>
                
             
                
            </div>
        </div>
    </header>
  )
}

export default Header