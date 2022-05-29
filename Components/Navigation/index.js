import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="topLeft">
        <img src="/favicon.ico" alt="" />
        <div className="topNavList">
          {/* <Link className="topNavListItem" href="">
            Porfolio
          </Link> */}
          <div className="topNavListItem">
            <Link className="topNavListItem" href="/">
              Blog
            </Link>
          </div>
          {/* <Link className="topNavListItem" href="">
            Projects
          </Link> */}
          <div className="topNavListItem">
            <Link className="topNavListItem" href="contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="topCenter"></div>
      <div className="topRight"></div>
    </div>
  );
}
