import { findValueByKey } from "@/utils/helper";
import React from "react";

const Intro = ({ Title, Subtitle, Description, ImageData }) => {
  return (
    <div className="intro">
      <div className="inner-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="title-wrap">
                <h3>{Subtitle}</h3>
                <h1 dangerouslySetInnerHTML={{ __html: Title }}></h1>
              </div>
              <div className="content">
                <p>{Description}</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="img-wrapper">
                <img
                  src={findValueByKey(ImageData, "Image").url}
                  alt={
                    findValueByKey(ImageData, "Image").alternativeText ||
                    findValueByKey(ImageData, "Image").name
                  }
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
