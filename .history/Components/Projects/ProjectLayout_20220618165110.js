import React from "react";

export default function ProjectLayout({ project }) {
  return (
    
      <div className="projectLinkDiv">
        <a href={project?.link} className="projectLink">
        
        <div className="projectDetails">
          <img
            className="projectImg"
            src={project?.imgUrl}
            alt={project?.title}
          />
          <h3 className="projectHeading">{project?.title}</h3>
          <p className="projectDescription">{project?.description.map((desc)=>(
            <div key={idx}>{desc}</div>
          ))}</p>
        </div>
      </a>
    </div>
  );
}
