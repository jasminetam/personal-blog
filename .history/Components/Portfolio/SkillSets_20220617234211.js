import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { Element } from "react-scroll";

function SkillSets() {
  return (
    <Element id="Clients" name="Clients">
      <div>
        <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
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
              <SiStyledcomponents className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>
                Styled
                <br /> Components
              </h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiStrapi className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Strapi</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiTailwindcss className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>
                Tailwind <br /> CSS
              </h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiBootstrap className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Bootstrap</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiNodedotjs className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Node.js</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiHtml5 className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>HTML 5</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiCss3 className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>CSS 3</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiJavascript className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>Javascript</h3>
            </div>
            <div className="inline-block justify-center items-center cursor-pointer">
              <SiAmazonaws className="md:w-20 md:h-20 w-16 h-16 text-gray-500 m-3 p-1 hover:text-black" />
              <h3>AWS</h3>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillSets;
