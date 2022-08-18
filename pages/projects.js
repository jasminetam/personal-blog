import Header from "../Components/Common/Header";
import Navigation from "../Components/Common/Navigation";
import CustomHead from '../Components/Common/CustomHead';
import Footer from "../Components/Common/Footer";
import ProjectsBrowse from "../Components/Projects/ProjectsBrowse";
import SidebarIcon from "../Components/Common/SidebarIcon";

export default function Projects() {
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
      <Navigation />
      <Header />
      <div className="projects">
        <ProjectsBrowse />
        <SidebarIcon />
      </div>
      <Footer />
      </div>
      </div>
  );
}
