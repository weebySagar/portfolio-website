"use client";

import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

import ProjectCard from "./ProjectCard";

const ProjectSlider = ({ data }) => {
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div className="scroll-container d-none d-md-block">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="project-container"
        >
          <div className="projects">
            {data.map((project) => (
             <ProjectCard {...project.attributes} key={project.id} img={project.attributes}/>
            ))}
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height:  scrollRange }} className="ghost d-none d-md-block" />
      <div className="d-flex flex-column gap-4 d-md-none">
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
    </>
  );
};

export default ProjectSlider;
