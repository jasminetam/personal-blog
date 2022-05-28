import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Jasmine Tam</span>
        <img src={"/profile.jpg"} width="200px" height="200px" alt="" />
        <p>From Nurse to React developer</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">React</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Nextjs</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarSocial">
          <BsGithub className="sidebarIcons" />
          <SiIndeed className="sidebarIcons" />
          <FiTwitter className="sidebarIcons" />
        </div>
      </div>
    </div>
  );
}
