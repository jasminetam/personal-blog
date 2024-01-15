import React from "react";
import Link from "next/link";
import socialMediaList from "../../utils/socialMediaList";
import SetIntersectionObserver from "../../utils/IntersectionObserver";

export default function PortfolioHome({ forwardRef }) {
  const highlighting = (phrase = "") => {
    return (
      <span className="highlight-container">
        <span className="highlight">{phrase}</span>
      </span>
    );
  };
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
                A proactive {highlighting("React Developer")} with a valid UK
                work permit and {highlighting("Two years")} of commercial
                experience, specializing in frontend development and looking for{" "}
                {highlighting("Full Stack development")} opportunities.{" "}
                {highlighting("Passionate")} about learning, coding, and
                consistently updating a personal blog. Possesses a solid
                background in {highlighting("collaborating with designers,")}{" "}
                optimizing codebase performance, and staying up-to-date with the{" "}
                {highlighting("latest industry trends,")} as demonstrated in
                previous commercial experiences.
              </p>
            </div>
          </SetIntersectionObserver>
          <div className="portfolioHeaderContactBtnDiv">
            <SetIntersectionObserver type={3} direction="right">
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
