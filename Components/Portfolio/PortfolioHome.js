import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/image/heroImage.jpg";

export default function PortfolioHome() {
  return (
    <div className="portfolioHomeWrapper" data-test="component-PortfolioHome">
      <div className="portfolioHeaderReactiveWrapper">
        <div className="portfolioHeaderWrapper">
          <div className="portfolioHeaderImageDiv">
            <Image
              src={heroImage}
              alt="heroImage"
              layout="fill"
              objectFit="cover"
              className="portfolioHeaderImage"
            />
          </div>
          <div className="portfolioHeaderAllTextDiv">
            <div className="portfolioHeaderTitleDiv">
              <h1 className="portfolioHeaderTitle">
                <span className="portfolioHeaderTitleSpan">
                  Jasmine Tam <br /> | React Developer
                </span>
              </h1>
            </div>
            <p className="portfolioHeaderDesc">
              A self taught{" "}
              <span className="highlight-container">
                <span className="highlight">react developer</span>
              </span>{" "}
              with the background as a{" "}
              <span className="highlight-container">
                <span className="highlight"> nurse </span>
              </span>{" "}
              for years based in Hong Kong and in the UK with{" "}
              <span className="highlight-container">
                <span className="highlight"> 6 months </span>
              </span>{" "}
              of commercial experiences in web development and more than{" "}
              <span className="highlight-container">
                <span className="highlight">2 years</span>
              </span>{" "}
              of learning and practicing experience on frontend and backend
              development. Currently building various projects actively on
              GitHub. I am a{" "}
              <span className="highlight-container">
                <span className="highlight">quick and lifelong learner</span>
              </span>{" "}
              that always seek for learning opportunities and{" "}
              <span className="highlight-container">
                <span className="highlight">passionate</span>
              </span>{" "}
              in web development . Currently got 13 repositories and nearly 300
              contributions since May.
            </p>
            <div className="portfolioHeaderContactBtnDiv">
              <div className="portfolioHeaderContactBtn">
                <Link href="/contact">Contact Me !</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
