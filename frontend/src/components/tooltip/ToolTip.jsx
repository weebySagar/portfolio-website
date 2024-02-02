"use client";

import React, { useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
import { marked } from "marked";



const ToolTip = ({
  placement = "top",
  customClass = "custom-tooltip",
  title,
  children,
  isHtml = false
}) => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);


  return (
    <span
      data-bs-toggle="tooltip"
      data-bs-placement={placement}
      data-bs-custom-class={"custom-tooltip"}
      data-bs-title={marked(title)}
      data-bs-html={isHtml}
    >
      {children}
    </span>
  );
};

export default ToolTip;
