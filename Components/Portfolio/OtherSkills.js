import otherSkillList from '../../utils/otherskillList';

function OtherSkills() {
  return (
    <>
      <div className="portfolioOtherSkillsWrapper" data-test="component-OtherSkills">
        <div className="portfolioOtherSkillsDiv">
          <h1 className="portfolioOtherSkillsTitles">Other Skills</h1>
        </div>
        <div className="portfolioSkillsComponentsDiv">
          <div className="portfolioSkillsComponentsSecondDiv">
   
            {otherSkillList.map((item, idx) => (
              <div className="portfolioSkillsBlockDiv" key={idx}>
                <div className="portfolioSkillsSubtitlesDiv">
                  <div className="portfolioSkillsIcon">{item.icon}</div>
                  <h2 className="portfolioSkillsSubtitles">{item.title}</h2>
                </div>
                <div className="portfolioSkillsTextDiv">
                  <h5 className="portfolioSkillsText">{item.desc}</h5>
                </div>
              </div>
            ))}

            {/* second block
            <div className="portfolioSkillsSecondBlockDiv">
              <div className="portfolioSkillsSubtitlesDiv">
                <HiColorSwatch className="portfolioSkillsSecondIcon" />
                <h2 className="portfolioSkillsSubtitles">
                  Quick Learner and Challenger
                </h2>
              </div>
              <div className="portfolioSkillsTextDiv">
                <h5 className="portfolioSkillsText">
                  In the hospital, we have to face emergency and situations that
                  we may never seen before. We have to take challenge as a good
                  opportunity to improve our practice and make it as a great
                  experience for future challenges. Life-long learners and
                  people who love challenges can fit in any of the roles in
                  their career and life.
                </h5>
              </div>
            </div> */}

            {/* first block */}
            {/* <div className="portfolioSkillsFirstBlockDiv">
              <div className="portfolioSkillsSubtitlesDiv">
                <AiOutlineBlock className="portfolioSkillsThirdIcon" />
                <h2 className="portfolioSkillsSubtitles">
                  Problem Solving Skill
                </h2>
              </div>
              <div className="portfolioSkillsTextDiv">
                <h5 className="portfolioSkillsText">
                  Sometimes situations related to complicated social background
                  or multiple factors can be difficult to solve . We should not
                  stop thinking because the problem solving skills can be build
                  up if we always question and work on various solutions .
                </h5>
              </div>
            </div> */}

            {/* second block */}
            {/* <div className="portfolioSkillsSecondBlockDiv">
              <div className="portfolioSkillsSubtitlesDivWrapper">
                <div className="portfolioSkillsSubtitlesDiv">
                  <MdDeveloperBoard className="portfolioSkillsFourthIcon" />
                  <h2 className="portfolioSkillsSubtitles">Organization</h2>
                </div>
                <div className="portfolioSkillsTextDiv">
                  <h5 className="portfolioSkillsText">
                    As nursing is a busy role which require multi-tasking. We
                    have to prioritize our work and make sure we can provide our
                    services accordingly. By betterorganization of work, tasks
                    can be done on time according to the importance and urgency
                    . More time can be arranged to deal with emergency events.
                  </h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherSkills;
