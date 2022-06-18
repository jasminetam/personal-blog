import Link from "next/link";

export default function PortfolioNavBar() {
  return (
    <div className="navigation">
      <div className="topLeft">
        <Link href="/">
          <img className="topImg" src="/image/logo.png" alt="" />
        </Link>
        <div className="porttopNavList">
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