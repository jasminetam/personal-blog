import socialMediaList from '../../utils/socialMediaList';
import Link from 'next/link';

export default function SocialMedia({ forwardRef }) {
  return (
    <>
      <div
        className="portfolioSidebarTextDiv"
        ref={forwardRef}
        data-test="component-SocialMedia"
      >
        <div>
          <h3 className="portfolioSidebarText">Thank you for your time</h3>
          <h3 className="portfolioSidebarText">Want to know more?</h3>
          <h3 className="portfolioSidebarText">Please contact me</h3>
        </div>
      </div>
      <div className="portfolioSidebar">
        {socialMediaList.map((item, idx) => (
          <div key={idx} className="portfolioAlignIcons">
            <a
              className="portfolioSidebarIconsOnly"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          </div>
        ))}
      </div>
      <div className="portfolioSidebarButtonDiv">
        <button className="button-81" role="button">
          <Link href="/">Back to my blog</Link>
        </button>
      </div>
    </>
  );
}
