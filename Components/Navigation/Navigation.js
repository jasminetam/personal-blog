import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="topLeft">
        <div className="topNavList">
          {/* <a className="topNavListItem" href="/Porfolio">
            Porfolio
          </a>
          <a className="topNavListItem" href="/">
            Blog
          </a>
          <a className="topNavListItem" href="/Projects">
            Projects
          </a>
          <a className="topNavListItem" href="/Conta">
            Contact
          </a> */}
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
