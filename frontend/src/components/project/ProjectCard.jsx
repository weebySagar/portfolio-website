import { findValueByKey } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ img, ProjectName,Description, Link: url,TechnologyUsed }) => {

  return (
    <div className="project-card d-flex align-items-center justify-content-center flex-shrink-0">
      <div className="row row-gap-4">
        <div className="col-12 col-lg-6">
        <div className="img-wrap">
        <img
          src={findValueByKey(img, "Image")?.url}
          alt=""
          className="img-fluid"
        />
      </div>
        </div>
        <div className="col-12 col-lg-5">
        <div className="details-wrap">
        <h3>{ProjectName}</h3>
        <Link href={url} target="blank">
          {url}
        </Link>
        <div className="description">
          <p>{Description}</p>
        </div>

          <h5>Technologies used :</h5>
        <div className="technology-wrapper d-flex  flex-wrap">

          {
            TechnologyUsed.map(tech=><div key={tech.id} className="tech-badge">
              <img src={findValueByKey(tech,"Image").url} alt={tech.Skill} height={50} width={50}/>
              <span>
              {tech.Skill}
              </span>
            </div>)
          }
        </div>
      </div>
        </div>
      </div>
      

      
    </div>
  );
};

export default ProjectCard;
