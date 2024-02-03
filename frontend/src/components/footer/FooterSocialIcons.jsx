import Link from "next/link";
import React from "react";

const FooterSocialIcons = () => {
  return (
    <div className="footer-social-links">
      <div>
      <Link href={""}>
        <div className="linkedin">
          <span>LinkedIn</span>{" "}
        </div>
      </Link>
        </div>
  
  <div>

  
      <Link href={""}>
        <div className="mail">
          <span>Mail</span>
        </div>
      </Link>
      </div>

    <div>

      <Link href={""}>
        <div className="instagram">
          <span>Instagram</span>
        </div>
      </Link>
    </div>


<div>

      <Link href={""}>
        <div className="github">
          <span>Github</span>
        </div>
      </Link>
    </div>
</div>
  );
};

export default FooterSocialIcons;
