import { useState } from "react";
import { Link } from "react-scroll";
import { transition } from "@headlessui/react";

export default function PortfolioNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="portfolioNavigation">
      <nav className="topLeft">
        <div className="portfolioTopNavList">
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="portfolio"
              to="portfolio"
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="about"
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
              activeClass="projects"
              to="projects"
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
        
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="hobbies"
              to="hobbies"
              smooth={true}
              offset={50}
              duration={500}
            >
              Hobbies
            </Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="pContact"
              to="pcontact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
        {/* //hidden select button */}
      
          </button>
        </div>
      </nav>
    </div>
  );
}
