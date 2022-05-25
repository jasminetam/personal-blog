import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import jasmine from "./jasmine.jpg";

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
        <img className="topImg" src={jasmine} alt="Jasmine"></img>
        <RiSearch2Line className="topSearchIcon" />
      </div>
    </div>
  );
}
