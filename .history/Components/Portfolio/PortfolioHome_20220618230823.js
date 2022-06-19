import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/image/heroImage.jpg";
import { Element } from "react-scroll";

export default function PortfolioHome() {
  return (
    <Element id="portfoliohome" name="portfoliohome">
      <div className="PortfolioHomeWrapper">
        <div className="PortfolioHeaderReactiveWrapper">
          <div className="PortfolioHeaderWrapper">
            <div className="PortfolioHeaderImageDiv">
              <Image
                src={heroImage}
                alt="heroImage"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="PortfolioHeaderAllTextDiv">
              <div className="PortfolioHeaderTitleDiv">
                <h1>
                  <span>
                    Jasmine Tam <br /> | React Developer
                  </span>
                </h1>
              </div>
              <p className="PortfolioHeaderDescDiv">
                A self taught{" "}
                <span className="highlight-container">
                  <span className="highlight">react developer</span>
                </span>{" "}
                with the background as a{" "}
                <span className="highlight-container">
                  <span className="highlight"> nurse </span>
                </span>{" "}
                for 8 years based in the UK with{" "}
                <span className="highlight-container">
                  <span className="highlight"> 6 months </span>
                </span>{" "}
                of experiences in web development and more than{" "}
                <span className="highlight-container">
                  <span className="highlight">6 years</span>
                </span>{" "}
                of experiences in studying related subjects. Many projects and
                learning are ongoing. I am a{" "}
                <span className="highlight-container">
                  <span className="highlight">passionate quick learner</span>
                </span>{" "}
                that always seek for learning opportunities and{" "}
                <span className="highlight-container">
                  <span className="highlight">never give up</span>
                </span>
                . Currently got 13 repositories and 248 contributions since May.
              </p>
              <div className="PortfolioHeaderContactBtnDiv">
                <div className="PortfolioHeaderContactBtn">
                  <Link href="/contact">Contact Me !</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
