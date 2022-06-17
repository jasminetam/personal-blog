import Footer from "../Components/Common/Footer/Footer";
import Head from "next/head";
import { useRef } from "react";
import CoverPage from "../Components/Portfolio/about";
import PortfolioProjects from "../Components/Portfolio/pprojects";
import SkillSets from "../Components/Portfolio/skillsets";
import OtherSkills from "../Components/Portfolio/otherskills";
import Hobbies from "../Components/Portfolio/hobbies";
import PortfolioSidebar from "../Components/Portfolio/PortfolioSidebar/PortfolioSidebar";
import PortfolioHeader from "../Components/Portfolio/PortfolioHeader/PortfolioHeader";
import PortfolioNavBar from "../Components/Portfolio/PortfolioNavBar/PortfolioNavBar";

import About from "../Components/Portfolio/About"


export default function Portfolio() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;500&family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="a Blog about Jasmine learning journey on coding"
        />
        <meta name="keywords" content="Jasmine javascript react jasminetam" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <title>Portfolio | Jasmine&apos;s Blog</title>
      </Head>
      <div className="portfolioHome">
        <PortfolioNavBar />
        <PortfolioSidebar />
        <PortfolioHeader />
        <div className="background-container">
          <img
            className="backgroundImg"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
            alt=""
          />
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
      </div>
      <About />
    </>
  );
}
