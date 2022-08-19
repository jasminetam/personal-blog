import Link from 'next/link';
import {
  personalBlog,
  spotifake,
  animeGo,
  insfakegram,
  dailyExpenses,
  projectManagement,
} from '../../utils/projectList';
import SetIntersectionObserver from '../../utils/IntersectionObserver';

function PortfolioProjects({ forwardRef }) {
  return (
    <>
      <div
        className="portfolioProjectsWrapper"
        data-test="component-PortfolioProjects"
        ref={forwardRef}
      >
        <h1 className="portfolioTitles">My Projects</h1>
        <div className="portfolioProjectsDiv">
          {[
            insfakegram,
            animeGo,
            personalBlog,
            projectManagement,
            spotifake,
            dailyExpenses,
          ].map((project, idx) => (
            <SetIntersectionObserver type={2} direction="left" key={idx}>
              <div className="portfolioSingleProjectDiv">
                <h3 className="portfolioSingleProjectTitle">{project.name}</h3>

                <div className="portfolioSingleProjectImgDiv">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={project.imgUrl}
                      alt={project.name}
                      className="portfolioSingleProjectImg"
                    />
                  </a>
                </div>
              </div>
            </SetIntersectionObserver>
          ))}
        </div>
      </div>
      <SetIntersectionObserver type={3} direction="up" >
      <div className="portfolioHeaderButtonDiv">
        <button className="button-81" role="button">
          <Link href="/projects">Check Out More</Link>
        </button>
        </div>
        </SetIntersectionObserver>
    </>
  );
}

export default PortfolioProjects;
