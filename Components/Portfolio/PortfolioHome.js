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
                  <h1>Jasmine Tam</h1>
                  <h2>Software Engineer (Full-Stack)</h2>
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
                    aria-label={item.name || "social link"}
                    title={item.name || "social link"}
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
                A proactive {highlighting("Software Engineer")} with{" "}
                {highlighting("Right to Work in the UK")} and{" "}
                {highlighting("four years")} of commercial experience. I build
                {` `}
                {highlighting("full-stack")} products with{" "}
                {highlighting("React, Next.js, TypeScript, Java & Node.js")}.
                Recently, I’ve worked on an{" "}
                {highlighting("enterprise-scale LMS")}—optimising core modules
                across front-end and back-end, leading a migration from Redux
                Saga to React Query with stronger Cypress coverage (cutting API
                errors by 40%), and contributing to{" "}
                {highlighting("CSP compliance")} refactors. I also developed a
                {` `}
                {highlighting("client skin framework")} used by 30+ corporate
                customers for scalable branding. I care about{" "}
                {highlighting("clean, maintainable code")}, performance, and
                collaborating in {highlighting("Agile")} teams to ship reliable,
                user-centred features.
              </p>
            </div>
          </SetIntersectionObserver>

          <div className="portfolioHeaderContactBtnDiv">
            <SetIntersectionObserver type={3} direction="right">
              <div className="portfolioHeaderContactBtn">
                <Link href="/contact">Contact Me</Link>
              </div>
            </SetIntersectionObserver>
          </div>
        </div>
      </div>
    </section>
  );
}
