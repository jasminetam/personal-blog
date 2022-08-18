import CustomHead from '../Components/Common/CustomHead';
import SocialMedia from "../Components/Portfolio/SocialMedia";
import PortfolioHome from "../Components/Portfolio/PortfolioHome";
import PortfolioNavBar from "../Components/Portfolio/PortfolioNavBar";
import PortfolioProjects from "../Components/Portfolio/PortfolioProjects";
import SkillSets from "../Components/Portfolio/SkillSets";
import OtherSkills from "../Components/Portfolio/OtherSkills";
import { Element } from "react-scroll";
import Navigation from '../Components/Common/Navigation';

export default function Portfolio() {
  return (
    <>
      <CustomHead>
        <meta
          name="description"
          content="a Blog about Jasmine learning journey on coding"
        />
        <meta name="keywords" content="Jasmine javascript react jasminetam" />
        <title>Portfolio | Jasmine&apos;s Blog</title>
      </CustomHead>
      <Navigation />
    </>
  );
}
