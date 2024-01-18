import Link from "next/link";
import React from "react";

const NavigationSocialLinks = ({ socialLinks }) => {
  return (
    <div className="navbar-social-links">
      {socialLinks.map((social) => (
        <Link href={social.Link} target="_blank" key={social.id} title={social.SocialName}>
          <div className={social.SocialName}></div>
        </Link>
      ))}

      {/* <Link href='/'>
            <div className='linkedin'></div>
        </Link><Link href='/'>
            <div className='github'></div>
        </Link><Link href='/'>
            <div className='instagram'></div>
        </Link> */}
    </div>
  );
};

export default NavigationSocialLinks;
