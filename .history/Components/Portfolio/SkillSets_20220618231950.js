import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { Element } from "react-scroll";

function SkillSets() {
  return (
    <Element id="skillsets" name="skillsets">
      <div className="portfolioSkillSetsWrapper">
        <div className="portfolioSkillSetsFirstDiv">
          <h1>
            Skill Sets
          </h1>
          <div className="portfolioSkillSetsIconsDiv">
            <div className="portfolioSkillSetsSingleIconDiv">
              <FaReact />
              <h3>React.js</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiNextdotjs className="md:w-20 md:h-20 w-16 h-16  text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Next.js</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiTypescript className="md:w-20 md:h-20 w-16 h-16  text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Typescript</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiExpress className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Express.js</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiMongodb />
              <h3>MongoDB</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiTailwindcss />
              <h3>
                Tailwind <br /> CSS
              </h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiNodedotjs className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Node.js</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiGraphql />
              <h3>GraphQL</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiApollographql />
              <h3>Apollo</h3>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillSets;
