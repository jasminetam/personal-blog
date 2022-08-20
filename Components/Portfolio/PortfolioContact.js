import socialMediaList from '../../utils/socialMediaList';
import Link from 'next/link';
import SetIntersectionObserver from '../../utils/IntersectionObserver';

export default function PortfolioContact({ forwardRef }) {
  return (
    <>
      <div ref={forwardRef} data-test="component-PortfolioContact" className="portfolioContactWrapper">
        <div className="portfolioSidebarTextDiv">
          <SetIntersectionObserver type={2} direction="left">
            <h3 className="portfolioSidebarText">Thank you for your time</h3>
            <h3 className="portfolioSidebarText">Want to know more?</h3>
            <h3 className="portfolioSidebarText">Please contact me</h3>
          </SetIntersectionObserver>
        </div>
        <SetIntersectionObserver type={3} direction="up">
        <div className="portfolioContactIconDiv">
                {socialMediaList.map((item, idx) => (
                  <a
                    key={idx}
                    className="portfolioContactIcon"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.icon}
                  </a>
                ))}
          </div>
        </SetIntersectionObserver>
        <SetIntersectionObserver type={4} direction="down">
        <div className="portfolioSidebarButtonDiv">
          <button className="button-81" role="button">
            <Link href="/">Back to my blog</Link>
          </button>
          </div>
          </SetIntersectionObserver>
      </div>
    </>
  );
}
