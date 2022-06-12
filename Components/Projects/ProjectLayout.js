import React from "react";

export default function ProjectLayout({ project }) {
  return (
    
      <div className="projectLinkDiv">
        <a href={project?.link} target="_blank" className="projectLink">
        
        <div className="projectImgWrapper">
          <img
            className="projectImg"
            src={project?.imgUrl}
            alt={project.heading}
          />
        </div>
        <div className="projectDetails">
          <h3 className="projectHeading">{project?.title}</h3>
          <p className="projectDescription">{project?.description}</p>
        </div>
      </a>
    </div>
  );
}
