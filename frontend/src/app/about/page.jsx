import React from "react";

import "@/styles/about/_about.scss";
import Timeline from "@/components/timeline/Timeline";
import Intro from "@/components/Intro/Intro";
import Resume from "@/components/resume/Resume";

async function getAboutDetails() {
  try {
    const response = await fetch(
      `${process.env.STRAPI_BACKEND_URL}/abouts?populate=deep`,
      {
        headers:{
          Authorization:`Bearer ${process.env.STRAPI_TOKEN}`
        }
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data in Projects");
    }
    const { data } = await response.json();
    return data[0]?.attributes;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function AboutPage() {
  const data = await getAboutDetails();

  return (
    <main>
      <section className="about">
        <Intro {...data.Introduction} ImageData={data.Introduction}/>
        <Timeline timeline={data.Timeline} />
        <Resume resume={data.Resume}/>
      </section>
    </main>
  );
}
