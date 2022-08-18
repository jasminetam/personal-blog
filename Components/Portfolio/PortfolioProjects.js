import Link from 'next/link';
import Image from 'next/image';
import {
  personalBlog,
  spotifake,
  animeGo,
  insfakegram,
  dailyExpenses,
  projectManagement,
} from '../../utils/projectList';

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
            <div className="portfolioSingleProjectDiv" key={idx}>
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
          ))}
          {/* <div className="portfolioSingleProjectDiv">
            <h3 className="portfolioSingleProjectTitle">
              Daily Expenses Web App
            </h3>
            <div className="portfolioSingleProjectImgDiv">
              <a href="https://daily-expenses.vercel.app/">
                <Image
                  src={dailyExpenses}
                  alt="dailyExpenses"
                  layout="fill"
                  objectFit="cover"
                  className="portfolioSingleProjectImg"
                />
              </a>
            </div>
          </div>
          <div className="portfolioSingleProjectDiv">
            <h3 className="portfolioSingleProjectTitle">E-Commerce Site</h3>
            <div className="portfolioSingleProjectImgDiv">
              <a href="https://ecommerce-site-vert.vercel.app/">
                <Image
                  src={eCommerceSite}
                  alt="eCommerceSite"
                  layout="fill"
                  objectFit="cover"
                  className="portfolioSingleProjectImg"
                />
              </a>
            </div>
          </div>

          <div className="portfolioSingleProjectDiv">
            <h3 className="portfolioSingleProjectTitle">Project Management</h3>
            <div className="portfolioSingleProjectImgDiv">
              <a href="https://graph-ql-project-management.vercel.app/">
                <Image
                  src={projectManagement}
                  alt="projectManagement"
                  layout="fill"
                  objectFit="cover"
                  className="portfolioSingleProjectImg"
                />
              </a>
            </div>
          </div>
          <div className="portfolioSingleProjectDiv">
            <h3 className="portfolioSingleProjectTitle">Personal Blog</h3>
            <div className="portfolioSingleProjectImgDiv">
              <a href="https://personal-blog-six-phi.vercel.app/">
                <Image
                  src={personalBlog}
                  alt="personalBlog"
                  layout="fill"
                  objectFit="cover"
                  className="portfolioSingleProjectImg"
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="portfolioHeaderButtonDiv">
        <button className="button-81" role="button">
          <Link href="/projects">Check Out More</Link>
        </button>
      </div>
    </>
  );
}

export default PortfolioProjects;
