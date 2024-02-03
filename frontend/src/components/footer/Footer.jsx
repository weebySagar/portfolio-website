import React from "react";

import "@/styles/footer/_footer.scss";
import Link from "next/link";
import FooterSocialIcons from "./FooterSocialIcons";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer>
      <div className="bgimage"></div>
      <div className="overlay"></div>
      <div className="inner-wrap">
        <div className="footer-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-6">
                <div className="title-wrap">
                  <h1>
                    Get in <span>Touch.</span>
                  </h1>
                </div>
                <div className="content-wrap">
                    <FooterSocialIcons/>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-6">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
