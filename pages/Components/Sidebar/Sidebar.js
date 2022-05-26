import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <Image src={"/profile.jpg"} width="200px" height="200px" alt="" />
        <p>lorem</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <BsGithub className="sidebarIcons" />
          <SiIndeed className="sidebarIcons" />
          <FiTwitter className="sidebarIcons" />
        </div>
      </div>
    </div>
  );
}
