import { useState } from "react";
import { Link } from "react-scroll";
import {BsDot} from "react-icons/bs"

export default function PortfolioNavBar() {

  return (
    <div className="portfolioNavigation">
      <nav className="topLeft">
        <div className="portfolioTopNavList">
          <div className="portfolioTopNavListItem">
            <label for="home" >
            <Link
              activeClass="home"
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              <BsDot />
              </Link>
              </label>
          </div>
          <div className="portfolioTopNavListItem">
            <Link
              activeClass="work"
              to="work"
              smooth={true}
              offset={50}
              duration={500}
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
            >
              <BsDot />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
