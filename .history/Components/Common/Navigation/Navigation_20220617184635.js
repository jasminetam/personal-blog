import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="topLeft">
        <Link href="/">
          <img className="topImg" src="/image/logo.png" alt="" />
        </Link>
        <div className="topNavList">
          <div className="topNavListItem">
            <Link href="/portfolio">Porfolio</Link>
          </div>
          <div className="topNavListItem">
            <Link href="/">Blog</Link>
          </div>
          <div className="topNavListItem">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="topNavListItem">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}