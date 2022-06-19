import Link from "next/link";
import Image from "next/image";
import spotifake from "../../public/image/spotifake.png";
import dailyExpenses from "../../public/image/dailyExpenses.png";
import eCommerceSite from "../../public/image/eCommerceSite.png";
import projectManagement from "../../public/image/projectManagement.png";
import personalBlog from "../../public/image/personalBlog.png";
import { Element } from "react-scroll";

function PortfolioProjects() {
  return (
    <Element id="work" name="work">
      <div className="portfolioProjectsWrapper">
        <h1 className="portfolioTitles">My Projects</h1>
        <div className="portfolioProjectsFirstDiv">
          <div className="portfolioSingleProjectDiv">
            <h3 className="portfolioSingleProjectTitle">
              Spotifake - Spotify Clone
            </h3>
            <div className="portfolioSingleProjectImgDiv">
              <a href="https://spotifake-alpha.vercel.app/">
                <Image
                  src={spotifake}
                  alt="spotifake"
                  layout="fill"
                  objectFit="cover"
                  className="portfolioSingleProjectImg"
                />
              </a>
            </div>
          </div>
          <div className="portfolioSingleProjectDiv">
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
        </div>
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
     
      <div className="portfolioHeaderButtonDiv">
        <button className="button-81" role="button">
          <Link href="/projects">Check Out More</Link>
        </button>
      </div>
    </Element>
  );
}

export default PortfolioProjects;