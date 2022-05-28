import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="topLeft">
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
      <div className="topRight">
        <button className="topSearchIcon">
          <RiSearch2Line />
        </button>
      </div>
    </div>
  );
}

{
  /* 
<input value placeholder="Type to Search" />
<button>
  <RiSearch2Line className="topSearchIcon" />
</button>
 */
}
