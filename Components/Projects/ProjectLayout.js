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
            alt={project?.name}
            />
            </div>
          <h3 className="projectHeading">{project?.name}</h3>
          <h6 className="projectSubHeading">{project?.desc}</h6>
          <p className="projectSubHeading">
            Framework and technologies used:
          </p>
          <p className="projectDescription">
            {project?.tag.map((tag, idx) => (
              <div className="frameworkItems" key={idx}>
                <GiDiamonds /> {tag}
              </div>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
}
