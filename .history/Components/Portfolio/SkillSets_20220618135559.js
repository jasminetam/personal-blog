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
      <div>
        <div className="w-full h-auto flex flex-col justify-center items-center py-96 m">
          <p className="text-sm uppercase text-gray-400">Clients</p>
          <h1 className="text-neutral-800 bg-transparent text-6xl font-bold text-center">
            Skill Sets
          </h1>
          <div className="flex flex-wrap justify-center text-center mx-20 my-10 md:gap-10 gap-2">
            <div className="inline-block justify-center items-center cursor-pointer">
              <FaReact className="md:w-20 md:h-20 w-16 h-16  text-gray-500 m-3 p-1 hover:text-black" />
              <h3>React.js</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiNextdotjs className="md:w-20 md:h-20 w-16 h-16  text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Next.js</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiTypescript className="md:w-20 md:h-20 w-16 h-16  text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Typescript</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiExpress className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Express.js</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiMongodb className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>MongoDB</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiTailwindcss className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>
                Tailwind <br /> CSS
              </h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiNodedotjs className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Node.js</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiGraphql className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>GraphQL</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiApollographql className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Apollo</h3>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillSets;
