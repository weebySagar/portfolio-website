import Image from 'next/image';
import "@/styles/global/_global.scss";

import Link from 'next/link'
import HeroBanner from '@/components/hero-banner/HeroBanner';
import MySkills from '@/components/my skills/MySkills';
import ParticleComponent from '@/components/particles/ParticleComponent';

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <MySkills/>
      <ParticleComponent/>
    </>
  )
}
