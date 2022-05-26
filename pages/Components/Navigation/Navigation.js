import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="topLeft">
        <BsGithub className="topIcons" />
        <SiIndeed className="topIcons" />
        <FiTwitter className="topIcons" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">CONTACT</li>
        </ul>
      </div>
      <div className="topRight">
        <Image className="topImg" src={"/jasmine.jpg"} alt="Jasmine" />
        <RiSearch2Line className="topSearchIcon" />
      </div>
    </div>
  );
}
