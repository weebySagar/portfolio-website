import Image from "next/image";
import React from "react";

import { findValueByKey } from "@/utils/helper";
import Typewriter from "@/components/typewriter/Typewriter";
import "@/styles/hero-banner/_hero-banner.scss";

async function getHeroDetails() {
  try {
    const response = await fetch(
      `${process.env.STRAPI_BACKEND_URL}/hero-banner?populate=deep`,
      {
        headers:{
          Authorization:`Bearer ${process.env.STRAPI_TOKEN}`
        }
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data in Hero Banner");
    }
    const { data } = await response.json();
    return data?.attributes;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function HeroBanner() {
  const data = await getHeroDetails();

  return (
    <section className="hero-banner vh-100" >
      <div className="hero-banner-inner">
        <div className=" container-fluid">
          <div className="row align-items-center justify-content-center">

             <div className="col-12 col-md-6 col-lg-4 order-2 order-md-1">
              <div className="subtitle">
                <Typewriter data={data}/>
              </div>
              <div className="title-wrap">
                <h1 dangerouslySetInnerHTML={{__html:data.Title}} >
                </h1>
              </div>

              <div className="description">
                <p>{data.Description}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <img
                src={findValueByKey(data, "BannerImage")?.url}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
