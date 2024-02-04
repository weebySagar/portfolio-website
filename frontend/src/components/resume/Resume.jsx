'use client'
import React, { useState } from "react";

import "@/styles/resume/_resume.scss";
import { findValueByKey } from "@/utils/helper";
import PdfViewer from "@/components/pdf viewer/PdfViewer";

const Resume = ({ resume }) => {
  const [showResume,setShowResume] = useState(false)
  return (
    <section className="resume text-start" style={{backgroundImage:`url(${findValueByKey(resume,"BackgroundImage")?.url})`}}>
      <div className="inner-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <h1>{resume.Title}</h1>
              <p>{resume.Description}</p>
              <button className={!showResume ? 'button-primary' :'button-secondary'} onClick={()=>setShowResume(!showResume)}>
               <span>{!showResume ? 'View' : 'Hide'}</span> 
              </button>
            </div>
            <div className="col-12 col-md-6 overflow-hidden">
                <PdfViewer file={findValueByKey(resume,"File").url} showResume={showResume}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
