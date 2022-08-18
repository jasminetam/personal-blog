import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si'
import Link from 'next/link';

export default function SocialMedia({ forwardRef }) {
  return (
    <>
      <div className="portfolioSidebarTextDiv" ref={forwardRef}>
        <div>
          <h3 className="portfolioSidebarText">Thank you for your time</h3>
          <h3 className="portfolioSidebarText">Want to know more?</h3>
          <h3 className="portfolioSidebarText">Please contact me</h3>
        </div>
      </div>
      <div className="portfolioSidebar">
        <a href="https://github.com/jasminetam" className="portfolioAlignIcons">
          <BsGithub className="portfolioSidebarIconsOnly" />
        </a>
        <a
          href="https://www.linkedin.com/in/ching-man-tam-b89a69129/"
          className="portfolioAlignIcons"
        >
          <BsLinkedin className="portfolioSidebarIconsOnly" />
        </a>
        <a
          href="https://twitter.com/JasmineTam6"
          className="portfolioAlignIcons"
        >
          <FiTwitter className="portfolioSidebarIconsOnly" />
        </a>

        <a href="mailto:jasminetam94@gmail.com" className="portfolioAlignIcons">
          <SiGmail className="portfolioSidebarIconsOnly" />
        </a>
      </div>
      <div className="portfolioSidebarButtonDiv">
        <button className="button-81" role="button">
          <Link href="/">Back to my blog</Link>
        </button>
      </div>
    </>
  );
}
