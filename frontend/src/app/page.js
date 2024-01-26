import Image from 'next/image';
import "@/styles/global/_global.scss";

import Link from 'next/link'
import HeroBanner from '@/components/hero-banner/HeroBanner';
import MySkills from '@/components/my skills/MySkills';

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <MySkills/>
    </>
  )
}
