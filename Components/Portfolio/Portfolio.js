import React from 'react';
import PortfolioHome from './PortfolioHome';
import PortfolioProjects from './PortfolioProjects';
import SkillSets from './SkillSets';
import OtherSkills from './OtherSkills';
import Scrollbar from './Scrollbar';
import SocialMedia from './SocialMedia';

function Portfolio() {
  const topRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const techsSkillsRef = React.useRef(null);
  const softSkillsRef = React.useRef(null);
  const langNHobbiesRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const executeScroll = (Ref) => Ref.current.scrollIntoView();

  return (
    <section data-test="component-portfolio" className="portfolio">
      <div className="aboutCotent">
        <Scrollbar
          topRef={topRef}
          projectsRef={projectsRef}
          techsSkillsRef={techsSkillsRef}
          softSkillsRef={softSkillsRef}
          langNHobbiesRef={langNHobbiesRef}
          contactRef={contactRef}
          executeScroll={executeScroll}
        />
        <PortfolioHome
          forwardRef={topRef}
          // executeScroll={executeScroll}
          projectsRef={projectsRef}
        />
        <div className="mb-56" />
        <PortfolioProjects forwardRef={projectsRef} />
        <div className="mb-56" />
        <SkillSets forwardRef={techsSkillsRef} />
        <div className="mb-56" />
        <OtherSkills forwardRef={softSkillsRef} />
        <div className="mb-56" />
        {/* <LangNHobbies forwardRef={langNHobbiesRef} />
        <div className="mb-56" /> */}
        <SocialMedia
          forwardRef={contactRef}
          // executeScroll={executeScroll}
          topRef={topRef}
        />
      </div>
    </section>
  );
}

export default Portfolio;
