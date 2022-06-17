import Link from "next/link";

export default function PortfolioNavBar() {
  return (
    <div className="portfolioNavigation">
      <div className="topLeft">
      <Link activeClass="Home" to="home" smooth={true} offset={50} duration={500}>
          <img className="topImg" src="/image/logo.png" alt="" />
        </Link>
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
