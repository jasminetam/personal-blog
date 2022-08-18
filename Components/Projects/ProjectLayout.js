import React from 'react';
import { GiDiamonds } from 'react-icons/gi';
export default function ProjectLayout({ project }) {
  return (
    <div className="projectLinkDiv" data-test="component-ProjectLayout">
      <a
        href={project?.link}
        className="projectLink"
        target="_blank"
        rel="noreferrer"
      >
        <div className="projectDetails">
          <img
            className="projectImg"
            src={project?.imgUrl}
            alt={project?.title}
          />
          <h3 className="projectHeading">{project?.title}</h3>
          <p className="projectSubHeading">
            Framework and tools that I have used:
          </p>
          <p className="projectDescription">
            {project?.description.map((desc, idx) => (
              <div className="frameworkItems" key={idx}>
                <GiDiamonds /> {desc}
              </div>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
}
