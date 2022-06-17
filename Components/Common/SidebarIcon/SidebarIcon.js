import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import Link from "next/link";

export default function SidebarIcon() {
  return (
    <div className="sidebarIconOnly">
      <div className="sidebarIconItem2">
        <div className="sidebarIconSocial">
          <Link href="https://github.com/jasminetam">
            <div className="alignIconsOnly">
              <BsGithub className="sidebarIconsOnly" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/ching-man-tam-b89a69129/">
            <div className="alignIconsOnly">
              <BsLinkedin className="sidebarIconsOnly" />
            </div>
          </Link>

          <Link href="https://twitter.com/JasmineTam6">
            <div className="alignIconsOnly">
              <FiTwitter className="sidebarIconsOnly" />
            </div>
          </Link>

          <Link href="mailto:jasminetam94@gmail.com">
            <div className="alignIconsOnly">
              <SiGmail className="sidebarIconsOnly" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
