import { useState } from "react";
import { Link } from "react-scroll";
import { transition } from "@headlessui/react";

export default function PortfolioNavBar() {
const [isOpen, setIsOpen] = useState(false)

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
        <div className="mr-14 flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-yellow focus:outline-none focus:ring-white"
          aria-controls="mobile-menu"></button>
</div>

      </div>
    </div>
  );
}
