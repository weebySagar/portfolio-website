import React from "react";

import "@/styles/project/_project.scss";
import ProjectSlider from "./ProjectSlider";

async function getProjectDetails() {
  try {
    const response = await fetch(
      `${process.env.STRAPI_BACKEND_URL}/projects?populate=deep`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      }
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

export default async function Project() {
  const data = await getProjectDetails();

  return (
    <section className="project-section">
      <div className="inner-wrap">
        <div className="container-fluid">
          <h1 className="ps-lg-3">Projects</h1>
          <div className="content-wrap">
            <ProjectSlider data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
