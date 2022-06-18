import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Element } from "react-scroll";

import Link from "next/link";

export default function SocialMedia() {
  return (
    <>
       <Element id="socialmedia" name="socialmedia">
      <div className="items-center flex justify-center">
        <div>
            <h3 className="text-5xl p-10">
              Thank you for your time
            </h3>
            <h3 className="text-5xl p-10">
            Want to know more
            </h3>
            <h3 className="text-5xl p-10">
            Please contact me
            </h3>
        </div>
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
      <div className="portfolioSidebarButtonDiv">
        <button className="button-81" role="button">
          <Link href="/projects">Back to my blog</Link>
        </button>
        </div>
        </Element>
    </>
  );
}
