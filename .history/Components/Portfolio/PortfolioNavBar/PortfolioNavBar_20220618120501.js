import { useState } from "react";
import { Link } from "react-scroll";

export default function PortfolioNavBar() {

  return (
    <div className="portfolioNavigation">
      <nav className="topLeft">
        <div className="portfolioTopNavList">
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="portfolio"
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="work"
              to="work"
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="skillsets"
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
              activeClass="otherskills"
              to="otherskills"
              smooth={true}
              offset={50}
              duration={500}
            >
              OtherSkills
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
