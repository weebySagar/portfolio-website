"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = ({ data }) => {
  return (
    <TypeAnimation
      sequence={data.Subtitle.map((string) => string.Subtitle)}
      repeat={Infinity}
      speed={3}
      deletionSpeed={6}
    />
  );
};

export default Typewriter;
