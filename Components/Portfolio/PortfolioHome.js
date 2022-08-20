import React from 'react';
import Link from 'next/link';
import socialMediaList from '../../utils/socialMediaList';
import SetIntersectionObserver from '../../utils/IntersectionObserver';

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
            <SetIntersectionObserver type={1} direction="down">
              <div className="portfolioHeaderTitle">
                <div>
                  <h1>Jasmine Tam </h1> <h2> React Developer</h2>
                </div>
              </div>
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
          </div>
          <SetIntersectionObserver type={2} direction="up">
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
              600 contributions this year.
            </p>
            </div>
            </SetIntersectionObserver>
          <div className="portfolioHeaderContactBtnDiv">
          <SetIntersectionObserver type={3} direction="left">
            <div className="portfolioHeaderContactBtn">
              <Link href="/contact">Contact Me !</Link>
              </div>
              </SetIntersectionObserver>
          </div>
        </div>
      </div>
    </section>
  );
}
