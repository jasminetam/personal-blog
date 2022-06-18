import Footer from "../Components/Common/Footer/Footer";
import Head from "next/head";
import { useRef } from "react";
import SocialMedia from "../Components/Portfolio/SocialMedia";
import PortfolioHeader from "../Components/Portfolio/PortfolioHeader/PortfolioHeader";
import PortfolioNavBar from "../Components/Portfolio/PortfolioNavBar/PortfolioNavBar";
import Pprojects from "../Components/Portfolio/PProjects";
import SkillSets from "../Components/Portfolio/SkillSets";
import OtherSkills from "../Components/Portfolio/OtherSkills";


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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="image/favicon-16x16.png"
        />
        
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>Portfolio | Jasmine&apos;s Blog</title>
      </Head>
      <div className="portfoliobackground">
      <Element id="home" name="home">
      <PortfolioNavBar />
            <PortfolioHeader />
            </Element>
        <Pprojects />
        <SkillSets />
        <OtherSkills />
        <SocialMedia />
        </div>
    </>
  );
}
