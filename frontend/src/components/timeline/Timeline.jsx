import React from "react";
import Markdown from "react-markdown";

import ToolTip from "@/components/tooltip/ToolTip";
import "@/styles/timeline/_timeline.scss";

const Timeline = ({ timeline }) => {
  return (
    <section className="timeline">
      <div className="inner-wrap">
        <div className="container">
          <div className="title-wrap">
            <h1>Experience</h1>
          </div>
          <div className="content-wrap">
            <div className="timeline-border"></div>
            <div className="timeline-wrapper position-relative ">
              {timeline.map((t) => (
                <div
                  className="timeline-item d-block d-md-flex justify-content-between position-relative align-items-center"
                  key={t.id}
                >
                  <div className="timeline-company">
                    {t.Tooltip ? (
                      <ToolTip title={t.Tooltip} isHtml={true}>
                        <h5>{t.CompanyName}</h5>
                      </ToolTip>
                    ) : (
                      <h5>{t.CompanyName}</h5>
                    )}
                 { t.JobRole &&  <p>{t.JobRole}</p>}

                    <p className="duration">{t.WorkDuration}</p>
                  </div>
                  <div className="timeline-content">
                    <Markdown>{t.Content}</Markdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
