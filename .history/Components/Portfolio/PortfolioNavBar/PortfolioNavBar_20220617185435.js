import { Link } from "react-scroll";
import { transition } from "@headlessui/react"


export default function PortfolioNavBar() {
  return (
    <div className="portfolioNavigation">
      <div className="topLeft">
        
          <img className="topImg" src="/image/logo.png" alt="" />
        
        <div className="portfolioTopNavList">
          <div className="portfolioTopNavListItem">
            <Link href="/portfolio">Porfolio</Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link href="/">Blog</Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="portfolioTopNavListItem">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


<div className="hidden md:block">
      <Link activeClass="Portfolio" to="portfolio" smooth={true} offset={50} duration={500}></Link>
      <Link activeClass="About" to="about" smooth={true} offset={50} duration={500}></Link>
      <Link activeClass="SkillSets" to="skillsets" smooth={true} offset={50} duration={500}></Link>
      <Link activeClass="OtherSkills" to="otherskills" smooth={true} offset={50} duration={500}></Link>
          <Link activeClass="Hobbies" to="bobbies" smooth={true} offset={50} duration={500}></Link>
</div>
          
          <div className="flex justify-center items-center flex-shrink"></div>