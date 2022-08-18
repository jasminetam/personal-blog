import React from 'react';
import Link from 'next/link';
import socialMediaList from '../../utils/socialMediaList';

export default function PortfolioHome({ forwardRef }) {
  return (
    <section
      className="portfolioHomeWrapper"
      data-test="component-PortfolioHome"
      ref={forwardRef}
    >
      <div className="portfolioHeaderWrapper">
        <div className="portfolioHeaderAllTextDiv">
          <div className="portfolioHeaderTitleDiv">
            <div className="portfolioHeaderTitle">
              <h1>Jasmine Tam </h1> <h2> React Developer</h2>
            </div>
            <div
             className="portfolioTitleIcons"
            >
              {socialMediaList.map((item, idx) => (
                <a
                  key={idx}
                  className="portfolioSidebar"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="portfolioHeaderDesc">
              A self taught{' '}
              <span className="highlight-container">
                <span className="highlight">react developer</span>
              </span>{' '}
              based in the UK with the background as a{' '}
              <span className="highlight-container">
                <span className="highlight"> nurse </span>
              </span>{' '}
              for years based in Hong Kong and in the UK with{' '}
              <span className="highlight-container">
                <span className="highlight"> 8 months </span>
              </span>{' '}
              of{' '}
              <span className="highlight-container">
                <span className="highlight"> commercial experience </span>
              </span>{' '}
              in frontend development and more than{' '}
              <span className="highlight-container">
                <span className="highlight">3 years</span>
              </span>{' '}
              of learning and practicing experience on frontend and backend
              development. Currently building various projects actively on
              GitHub. I am a{' '}
              <span className="highlight-container">
                <span className="highlight">lifelong learner</span>
              </span>{' '}
              that always seeking for learning opportunities and{' '}
              <span className="highlight-container">
                <span className="highlight">passionate</span>
              </span>{' '}
              in web development . Currently have 20 repositories and more than
              500 contributions this year.
            </p>
          </div>
          <div className="portfolioHeaderContactBtnDiv">
            <div className="portfolioHeaderContactBtn">
              <Link href="/contact">Contact Me !</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
