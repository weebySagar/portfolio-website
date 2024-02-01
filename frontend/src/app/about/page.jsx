import React from "react";

import "@/styles/about/_about.scss";
import Timeline from "@/components/timeline/Timeline";
import Intro from "@/components/Intro/Intro";
import { findValueByKey } from "@/utils/helper";

async function getAboutDetails() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/abouts?populate=deep"
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
      </section>
    </main>
  );
}
