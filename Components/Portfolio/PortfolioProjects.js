import Link from 'next/link';
import {
  personalBlog,
  animeGo,
  insfakegram,
  projectManagement,
} from '../../utils/projectList';
import SetIntersectionObserver from '../../utils/IntersectionObserver';
import ProjectItem from './ProjectItem';

function PortfolioProjects({ forwardRef }) {
  return (
    <>
      <div
        className="portfolioProjectsWrapper"
        data-test="component-PortfolioProjects"
        ref={forwardRef}
      >
        <div className="portfolioProjectDiv">
          <h1 className="portfolioTitles">My Projects</h1>
          <div className="portfoProjectGrid">
            <ProjectItem project={animeGo} />
            <ProjectItem project={personalBlog} />
            <ProjectItem project={insfakegram} />
            <ProjectItem project={projectManagement} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioProjects;
