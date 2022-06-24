import { Link } from "react-scroll";
import {BsDot} from "react-icons/bs"

export default function PortfolioNavBar() {

  return (
    <div className="portfolioNavigation" data-test="component-PortfolioNavBar">
      <nav className="topLeft">
        <div className="portfolioTopNavList">
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="portfoliohome"
              to="portfoliohome"
              smooth={true}
              offset={50}
              duration={500}
              data-tooltip="Top"
              className="tooltip-top"
            >
              <BsDot />
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="work"
              to="work"
              smooth={true}
              offset={50}
              duration={500}
              data-tooltip="Projects"
              className="tooltip-projects"
            >
              <BsDot />
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="skillsets"
              to="skillsets"
              smooth={true}
              offset={50}
              duration={500}
              data-tooltip="SkillSets"
              className="tooltip-skillsets"
            >
              <BsDot />
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="otherskills"
              to="otherskills"
              smooth={true}
              offset={50}
              duration={500}
              data-tooltip="OtherSkills"
              className="tooltip-otherskills"
            >
              <BsDot />
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="socialmedia"
              to="socialmedia"
              smooth={true}
              offset={50}
              duration={500}
              data-tooltip="SocialMedia"
              className="tooltip-socialmedia"
            >
              <BsDot />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
