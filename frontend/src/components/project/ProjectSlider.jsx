"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useTransform, useScroll } from "framer-motion";

import ProjectCard from "./ProjectCard";

const ProjectSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-250%"]);
  return (
    <div className="project-slider" ref={ref}>
      <div className="d-none d-lg-flex align-items-center overflow-hidden sticky-div">
        <motion.div style={{ x }} className="d-flex">
          {data.map((project) => (
            <ProjectCard
              key={project.id}
              {...project.attributes}
              img={project.attributes}
            />
          ))}
        </motion.div>
      </div>
      <div className="content-wrap d-flex flex-column gap-4 d-lg-none">
        <Slider {...settings}>
          {data.map((project) => (
            <ProjectCard
              key={project.id}
              {...project.attributes}
              img={project.attributes}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectSlider;
