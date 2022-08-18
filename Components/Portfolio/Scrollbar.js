import React from 'react';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';
import { MdOutlineWork, MdMilitaryTech } from 'react-icons/md';
import { TbLanguageHiragana } from 'react-icons/tb';
import { RiTeamFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

function Scrollbar({
  topRef,
  projectsRef,
  techsSkillsRef,
  softSkillsRef,
  langNHobbiesRef,
  contactRef,
  executeScroll,
}) {
  return (
    <div>
      <nav data-test="component-Scrollbar" className="scrollbarWrapper">
        <div className="scrollbarList">
          <AiOutlineVerticalAlignTop
            className="scrollbarIcon"
            size={20}
            onClick={() => executeScroll(topRef)}
          />
          <MdOutlineWork
            className="scrollbarIcon"
            size={20}
            onClick={() => executeScroll(projectsRef)}
          />
          <MdMilitaryTech
            className="scrollbarIcon"
            size={20}
            onClick={() => executeScroll(techsSkillsRef)}
          />
          <RiTeamFill
            className="scrollbarIcon"
            size={20}
            onClick={() => executeScroll(softSkillsRef)}
          />
          <TbLanguageHiragana
            className="scrollbarIcon"
            size={20}
            onClick={() => executeScroll(langNHobbiesRef)}
          />
          <HiOutlineMail
            className="scrollbarIcon"
            size={20}
            onClick={() => executeScroll(contactRef)}
          />
        </div>
      </nav>
    </div>
  );
}

export default Scrollbar;
