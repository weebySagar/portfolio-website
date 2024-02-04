'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavigationSocialLinks = ({ socialLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-social-links ${isScrolled && "d-none"}`}>
      {socialLinks?.map((social) => (
        <Link href={social?.Link} target="_blank" key={social?.id} title={social?.SocialName}>
          <div className={social?.SocialName}></div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationSocialLinks;
