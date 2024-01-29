import React from "react";

import "@/styles/project/_project.scss";
import ProjectSlider from "./ProjectSlider";

async function getProjectDetails() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/projects?populate=deep"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data in Projects");
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const Project = async () => {
  const data = await getProjectDetails();

  return (
    <section className="project-section">
      <div className="inner-wrap">
        <div className="container-fluid">
          <h1 className="ps-lg-3">Projects</h1>
          <ProjectSlider data={data} />
        </div>
      </div>
    </section>
  );
};

export default Project;
