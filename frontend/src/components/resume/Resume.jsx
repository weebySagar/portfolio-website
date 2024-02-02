import React from "react";

import "@/styles/resume/_resume.scss";
import { findValueByKey } from "@/utils/helper";
import PdfViewer from "@/components/pdf viewer/PdfViewer";

const Resume = ({ resume }) => {
  return (
    <section className="resume text-start" style={{backgroundImage:`url(${findValueByKey(resume,"BackgroundImage").url})`}}>
      <div className="inner-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <h1>{resume.Title}</h1>
              <p>{resume.Description}</p>
              {/* <button className="button-primary">
                <span>Resume</span>
              </button> */}
            </div>
            <div className="col-12 col-md-6">
              <PdfViewer file={findValueByKey(resume,"File").url}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
