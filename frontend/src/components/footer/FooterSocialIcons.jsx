import Link from "next/link";
import React from "react";

const FooterSocialIcons = ({ socialLinks }) => {
  return (
    <div className="footer-social-links">
      {socialLinks.map((social) => (
        <div>
          <Link href={social.Link} target="_blank">
            <div className={social.SocialName}>
              <span className="text-capitalize">{social.SocialName}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterSocialIcons;
