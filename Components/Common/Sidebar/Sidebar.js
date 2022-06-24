import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar" data-test="component-sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Jasmine Tam</span>
        <img src={"/image/profile.jpg"} width="200px" height="200px" alt="" />
        <h4>From a Nurse to a React developer</h4>
      </div>
      <div className="sidebarItem2">
        <div className="sidebarSocial">
          <Link href="https://github.com/jasminetam">
            <div className="alignIcons">
              <BsGithub className="sidebarIcons" />
              <h3 className="sidebarIconsDesc">@jasminetam</h3>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/ching-man-tam-b89a69129/">
            <div className="alignIcons">
              <BsLinkedin className="sidebarIcons" />
              <h3 className="sidebarIconsDesc">Jasmine Tam</h3>
            </div>
          </Link>

          <Link href="https://twitter.com/JasmineTam6">
            <div className="alignIcons">
              <FiTwitter className="sidebarIcons" />
              <h3 className="sidebarIconsDesc">@JasmineTam6</h3>
            </div>
          </Link>

          <Link href="mailto:jasminetam94@gmail.com">
            <div className="alignIcons">
              <SiGmail className="sidebarIcons" />
              <h3 className="sidebarIconsDesc">jasminetam94</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
