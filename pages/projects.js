import React from "react";
import Header from "../components/Common/Header";
import Navigation from "../components/Common/Navigation";
import CustomHead from '../components/Common/CustomHead';
import Footer from "../components/Common/Footer";
import ProjectsBrowse from "../components/Projects/ProjectsBrowse";
import SidebarIcon from "../components/Common/SidebarIcon";

export default function Projects() {
  const topRef = React.useRef(null);
  const executeScroll = (Ref) => Ref.current.scrollIntoView();

  return (
    <div className="pageWrapper">
      <CustomHead>
        <meta
          name="description"
          content="a Blog about Jasmine learning journey on coding"
        />
        <meta name="keywords" content="Jasmine javascript react jasminetam" />
        <title>Projects | Jasmine&apos;s Blog</title>
      </CustomHead>
      <div className="center">
        <Navigation topRef={topRef} executeScroll={executeScroll} />
      <Header forwardRef={topRef} />
      <div className="projects">
        <ProjectsBrowse />
        <SidebarIcon />
      </div>
      <Footer />
      </div>
      </div>
  );
}
