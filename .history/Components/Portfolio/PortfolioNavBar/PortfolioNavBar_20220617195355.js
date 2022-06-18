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
        <div className="mr-14 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-yellow focus:outline-none focus:ring-white"
            aria-controls="mobile-menu"
            arai-aria-expanded="false"
          >
            <span className="sr-only"> Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}