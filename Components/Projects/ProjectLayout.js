import React from 'react';
import Image from 'next/image'
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
          <div className="projectImgWrapper">
          <Image
            layout="responsive"
            width={400}
            height={300}
            className="projectImg"
            src={project?.imgUrl}
            alt={project?.title}
            />
            </div>
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
