import { Link } from "react-scroll";
import { transition } from "@headlessui/react";

export default function PortfolioNavBar() {
  return (
    <div className="portfolioNavigation">
      <div className="topLeft">
        <div className="portfolioTopNavList">
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="Portfolio"
              to="portfolio"
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="About"
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="SkillSets"
              to="skillsets"
              smooth={true}
              offset={50}
              duration={500}
            >
              SkillSets
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="OtherSkills"
              to="otherskills"
              smooth={true}
              offset={50}
              duration={500}
            >
              OtherSkills
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="Hobbies"
              to="hobbies"
              smooth={true}
              offset={50}
              duration={500}
            >
              Hobbies
            </Link>
          </div>
        </div>
        {/* //hidden select button */}
        
      </div>
    </div>
  );
}
