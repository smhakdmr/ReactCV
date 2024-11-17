import { Icon } from "@iconify/react";
import React from "react";

const Skills = ({ sharedSkills, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.section_name?.skills || "Yetenekler";
  const skills = sharedSkills?.icons.map((skill, index) => (
    <li className="list-inline-item mx-3" key={index}>
      <span>
        <div className="text-center skills-tile">
          <Icon
            icon={skill.class}
            style={{ fontSize: "220%" }}
          />
          <p
            className="text-center"
            style={{ fontSize: "70%", marginTop: "4px" }}
          >
            {skill.name}
          </p>
        </div>
      </span>
    </li>
  ));

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
