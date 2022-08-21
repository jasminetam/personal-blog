import React from 'react';
import SetIntersectionObserver from '../../utils/IntersectionObserver';
import Image from 'next/image';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { GiPolarStar } from 'react-icons/gi';
import Link from 'next/link';

function ProjectItem({ project }) {
  return (
    <div>
      <div className="projectItemGrid">
        <div className="portfoProjectImgAlign">
          <div className="portfolioProjectImgDiv">
            <a href={project.link} target="_blank" rel="noreferrer">
              <Image
                layout="fill"
                objectFit='cover'
                src={project.imgUrl}
                alt={project.name}
                className="portfolioProjectImg"
              />
            </a>
          </div>
        </div>
        <div className="portfoProjectTextDiv">
          <div>
            <h1>{project.name}</h1>
            <h6>{project.desc}</h6>
          </div>
          <p> Framework and technologies used:</p>
          <div className="portfoProjectTagsDiv">
            {project?.tag.map((item, idx) => (
              <div key={idx} className="portfoProjectTags">
                <VscDebugBreakpointLog
                  color="white"
                  style={{ paddingRight: '10px' }}
                />
                {item}
              </div>
            ))}
          </div>
          <p> Functions and Usage:</p>
          <div className="portfoProjectFunctionDiv">
            {project?.function.map((item, idx) => (
              <div key={idx} className="portfoProjectFunctions">
                <GiPolarStar color="white" style={{ paddingRight: '10px' }} />
                {item}
              </div>
            ))}
          </div>
          <SetIntersectionObserver type={3} direction="right">
            <div className="portfolioHeaderButtonDiv">
              <button className="button-81" role="button">
                <Link href={project.link} target="_blank" rel="noreferrer">
                  Check Out More
                </Link>
              </button>
            </div>
          </SetIntersectionObserver>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
