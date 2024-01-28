// "use client";

import React from "react";


import "@/styles/my skills/_my-skills.scss";
import StackWrapper from "./StackWrapper";

async function getSkillsDetails() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/my-skill?populate=deep"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data in My Skill");
    }
    const { data } = await response.json();
    return data?.attributes;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function MySkills() {
  const data = await getSkillsDetails();

  return (
    <section className="myskills">
      <div className="inner-wrap">
        <div className="container">
          <div className="title-wrap">
            <h1>My Skills</h1>
          </div>
          <div className="skills-wrapper">
            <StackWrapper data={data.Skill}/>
          </div>
        </div>
      </div>
    </section>
  );
}
