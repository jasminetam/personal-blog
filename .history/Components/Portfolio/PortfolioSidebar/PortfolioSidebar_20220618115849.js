import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import Link from "next/link";

export default function PortfolioSidebar() {
  return (
    <>
      <div>
        <h3>Want to know more<br/>Please contact me and check out more </h3>
      </div>
    <div className="portfolioSidebar">
      <div className="portfolioSidebarItem2">
        <div className="portfolioSidebarSocial">
          <Link href="https://github.com/jasminetam">
            <div className="portfolioAlignIcons">
              <BsGithub className="portfolioSidebarIconsOnly" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/ching-man-tam-b89a69129/">
            <div className="portfolioAlignIcons">
              <BsLinkedin className="portfolioSidebarIconsOnly" />
            </div>
          </Link>

          <Link href="https://twitter.com/JasmineTam6">
            <div className="portfolioAlignIcons">
              <FiTwitter className="portfolioSidebarIconsOnly" />
            </div>
          </Link>

          <Link href="mailto:jasminetam94@gmail.com">
            <div className="portfolioAlignIcons">
              <SiGmail className="portfolioSidebarIconsOnly" />
            </div>
          </Link>
        </div>
      </div>
      </div>
      </>
  );
}
