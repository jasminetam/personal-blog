

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="topLeft">
        <a href="/">
          <img className="topImg" src="/image/logo.png" alt="" />
        </a>
        <div className="topNavList">
          <div className="topNavListItem">
            <a href="/portfolio">Porfolio</a>
          </div>
          <div className="topNavListItem">
            <a href="/">Blog</a>
          </div>
          <div className="topNavListItem">
            <a href="/projects">Projects</a>
          </div>
          <div className="topNavListItem">
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
