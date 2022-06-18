import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function OtherSkills() {
  return (
    <Element id="otherskills" name="otherskills">
      <h1 className="text-neutral-800 bg-transparent text-6xl font-bold text-center pt-25">
        Other Skills
      </h1>
      <div className="w-full h-full justify-center items-center">
        <div className="justify-center items-center m-5">
          {/* first block */}
          <div className="pt-8 pb-8 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center cursor-pointer ">
              <GiCardboardBox className="w-10 h-10 bg-yellow-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-neutral-800 font-semibold">
                Communication and Teamwork
              </h2>
            </div>
            <div className="w-full md:w-1/2">
            <h5 className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-left sm:text-sm p-3">
              Since I was working as a nurse, I have learnt that communication
              and cooperation with colleagues are extremely important. To make
              sure our job can be done properly and smoothly{" "}
              <span class="highlight-container">
                <span class="highlight">towards the same goal</span>
              </span>
              , we cannot work alone. We have to keep track on other&apos;s
              progress and provide feedback if necessary. By doing this, we can
              ensure the{" "}
              <span class="highlight-container">
                <span class="highlight">quality and efficiency</span>
              </span>
              of our work but as well as to{" "}
              <span class="highlight-container">
                <span class="highlight">improve our performance</span>
              </span>
              .
              </h5>
              </div>
          </div>

          {/* second block */}
          <div className="pt-8 pb-8 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center cursor-pointer">
              <HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-neutral-800 font-semibold">
                Quick Learner and Challenger
              </h2>
            </div>
            <div className="w-full md:w-1/2">
            <h5 className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-sm sm:text-left p-3">
              In the hospital, we have to face emergency and situations that we
              may never seen before. We have to take challenge as a{" "}
              <span class="highlight-container">
                <span class="highlight">good opportunity</span>
              </span>
              to improve our practice and make it as a{" "}
              <span class="highlight-container">
                <span class="highlight">great experience</span>
              </span>
              for future challenges.{" "}
              <span class="highlight-container">
                <span class="highlight">Life-long learners</span>
              </span>
              and people who love challenges can fit in any of the roles in
              their career and life.
              </h5>
            </div>
          </div>

          {/* first block */}
          <div className="pt-8 pb-8 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center cursor-pointer ">
              <AiOutlineBlock className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-neutral-800 font-semibold ">
                Problem Solving Skill
              </h2>
            </div>
            <div className="w-full md:w-1/2">
            <h5 className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-left sm:text-sm p-3">
              Sometimes situations related to complicated social background or
              multiple factors can be{" "}
              <span class="highlight-container">
                <span class="highlight">difficult to solve</span>
              </span>
              . We should not stop thinking because the problem solving skills
              can be build up if we{" "}
              <span class="highlight-container">
                <span class="highlight">always question</span>
              </span>{" "}
              and{" "}
              <span class="highlight-container">
                <span class="highlight">work on various solutions</span>
              </span>
              .
              </h5>
              </div>
          </div>

          {/* second block */}
          <div className="pt-8 pb-8 flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
                <h2 className="text-xl text-neutral-800 font-semibold">
                  Organization
                </h2>
              </div>
              <div className="w-full md:w-1/2">
              <h5 className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-left sm:text-sm p-3">
                As nursing is a busy role which require multi-tasking. We have
                to{" "}
                <span class="highlight-container">
                  <span class="highlight">prioritize our work</span>
                </span>{" "}
                and make sure we can provide our services accordingly. By
                betterorganization of work, tasks can be done on time according
                to the{" "}
                <span class="highlight-container">
                  <span class="highlight">importance and urgency</span>
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
