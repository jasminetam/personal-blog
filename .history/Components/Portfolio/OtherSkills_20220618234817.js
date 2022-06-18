import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function OtherSkills() {
  return (
    <Element id="otherskills" name="otherskills">
      <div className="portfolioOtherSkillsFirstDiv">
      <h1 className="portfolioTitles">
        Other Skills
        </h1>
        </div>
      <div className="portfolioSkillsComponentsFirstDiv">
        <div className="portfolioSkillsComponentsSecondDiv">
          {/* first block */}
          <div className="portfolioSkillsFirstBlockDiv">
            <div className="portfolioSkillsSubtitlesDiv">
              <GiCardboardBox className="portfolioSkillsFirstIcon"/>
              <h2>
                Communication and Teamwork
              </h2>
            </div>
            <div className="portfolioSkillsTextDiv">
              <h5>
                Since I was working as a nurse, I have learnt that communication
                and cooperation with colleagues are extremely important. To make
                sure our job can be done properly and smoothly{" "}
                <span className="highlight-container">
                  <span className="highlight">towards the same goal</span>
                </span>
                , we cannot work alone. We have to keep track on other&apos;s
                progress and provide feedback if necessary. By doing this, we
                can ensure the{" "}
                <span className="highlight-container">
                  <span className="highlight">quality and efficiency</span>
                </span>
                of our work but as well as to{" "}
                <span className="highlight-container">
                  <span className="highlight">improve our performance</span>
                </span>
                .
              </h5>
            </div>
          </div>

          {/* second block */}
          <div className="portfolioSkillsSecondBlockDiv">
            <div className="portfolioSkillsSubtitlesDiv">
              <HiColorSwatch className="portfolioSkillsSecondIcon" />
              <h2>
                Quick Learner and Challenger
              </h2>
            </div>
            <div className="portfolioSkillsTextDiv">
              <h5 className=ter sm:text-sm sm:text-left p-3">
                In the hospital, we have to face emergency and situations that
                we may never seen before. We have to take challenge as a{" "}
                <span className="highlight-container">
                  <span className="highlight">good opportunity</span>
                </span>
                to improve our practice and make it as a{" "}
                <span className="highlight-container">
                  <span className="highlight">great experience</span>
                </span>
                for future challenges.{" "}
                <span className="highlight-container">
                  <span className="highlight">Life-long learners</span>
                </span>
                and people who love challenges can fit in any of the roles in
                their career and life.
              </h5>
            </div>
          </div>

          {/* first block */}
          <div className="portfolioSkillsFirstBlockDiv">
            <div className="portfolioSkillsSubtitlesDiv">
              <AiOutlineBlock className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-neutral-800 font-semibold ">
                Problem Solving Skill
              </h2>
            </div>
            <div className="portfolioSkillsTextDiv">
              <h5>
                Sometimes situations related to complicated social background or
                multiple factors can be{" "}
                <span className="highlight-container">
                  <span className="highlight">difficult to solve</span>
                </span>
                . We should not stop thinking because the problem solving skills
                can be build up if we{" "}
                <span className="highlight-container">
                  <span className="highlight">always question</span>
                </span>{" "}
                and{" "}
                <span className="highlight-container">
                  <span className="highlight">work on various solutions</span>
                </span>
                .
              </h5>
            </div>
          </div>

          {/* second block */}
          <div className="portfolioSkillsSecondBlockDiv">
            <div className="portfolioSkillsSubtitlesDivWrapper">
              <div className="portfolioSkillsSubtitlesDiv">
                <MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2>
                  Organization
                </h2>
              </div>
              <div className="portfolioSkillsTextDiv">
                <h5>
                  As nursing is a busy role which require multi-tasking. We have
                  to{" "}
                  <span className="highlight-container">
                    <span className="highlight">prioritize our work</span>
                  </span>{" "}
                  and make sure we can provide our services accordingly. By
                  betterorganization of work, tasks can be done on time
                  according to the{" "}
                  <span className="highlight-container">
                    <span className="highlight">importance and urgency</span>
                  </span>
                  . More time can be arranged to deal with emergency events.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default OtherSkills;
