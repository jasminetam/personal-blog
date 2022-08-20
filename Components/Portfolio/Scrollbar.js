import React from 'react';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';
import { MdOutlineWork, MdMilitaryTech } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

function Scrollbar({
  topRef,
  projectsRef,
  techsSkillsRef,
  softSkillsRef,
  contactRef,
  executeScroll,
}) {
  return (
    <div>
      <nav data-test="component-Scrollbar" className="scrollbarWrapper">
        <div className="scrollbarList">
          <AiOutlineVerticalAlignTop
            className="scrollbarIcon"

            onClick={() => executeScroll(topRef)}
          />
          <MdOutlineWork
            className="scrollbarIcon"

            onClick={() => executeScroll(projectsRef)}
          />
          <MdMilitaryTech
            className="scrollbarIcon"

            onClick={() => executeScroll(techsSkillsRef)}
          />
          <RiTeamFill
            className="scrollbarIcon"

            onClick={() => executeScroll(softSkillsRef)}
          />
          <HiOutlineMail
            className="scrollbarIcon"

            onClick={() => executeScroll(contactRef)}
          />
        </div>
      </nav>
    </div>
  );
}

export default Scrollbar;
