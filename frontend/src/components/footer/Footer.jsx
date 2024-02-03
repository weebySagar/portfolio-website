import React from "react";

import "@/styles/footer/_footer.scss";
import FooterSocialIcons from "./FooterSocialIcons";
import ContactForm from "./ContactForm";
import { findValueByKey } from "@/utils/helper";

async function getFooterDetails() {
    try {
      const response = await fetch(
        "http://127.0.0.1:1337/api/footer?populate=deep"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data in footer");
      }
      const { data } = await response.json();
      return data?.attributes;
    } catch (error) {
      throw new Error(error);
    }
  }

const Footer =async () => {
    const data  = await getFooterDetails();

  return (
    <footer style={{backgroundImage: `url(${findValueByKey(data,'BackgroundImage')?.url})`}}>
      <div className="bgimage"></div>
      <div className="overlay"></div>
      <div className="inner-wrap">
        <div className="footer-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-6">
                <div className="title-wrap">
                  <h1 dangerouslySetInnerHTML={{__html:data.Title}}>
                  </h1>
                </div>
                <div className="content-wrap">
                    <FooterSocialIcons socialLinks={data.SocialLinks}/>
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
