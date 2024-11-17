import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Badge } from "reactstrap";

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.section_name?.experience || "Deneyim";

  const workItems = resumeExperience?.map((work, index) => {
    const mainTech = work.mainTech.map((technology, i) => (
      <Badge
        pill={true}
        key={i}
        className="main-badge"
        color="#AE944F !important"
      >
        {technology}
      </Badge>
    ));

    const tech = work.technologies.map((technology, i) => (
      <Badge
        pill={true}
        className="experience-badge mr-2 mb-2"
        key={i}
        color="#AE944F !important"
        >
        {technology}
      </Badge>
    ));

    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={work.years}
        iconStyle={{
          background: "#AE944F",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<img src={work.icon} height={"100%"} style={{ borderRadius: "inherit" }} />}
        key={index}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          {work.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          {work.company}
        </h4>
        <h5
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left", marginTop: "5px" }}
        >
          {work.description}
        </h5>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-white" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {workItems}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
