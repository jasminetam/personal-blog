import React from "react";

export default function ProjectLayout({ project }) {
  console.log(project.description)
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
          <div className="projectDescription">{project?.description.forEach((desc)=>(
            <div>{desc}</div>
          ))}</div>
        </div>
      </a>
    </div>
  );
}
