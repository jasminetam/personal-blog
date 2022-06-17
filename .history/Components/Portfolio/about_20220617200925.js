import { Element } from "react-scroll";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";

export default function About() {
  return (
    <Element id="services" name="services">
      <div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
        <p className="text-sm uppercase text-gray-400">My Skills</p>
        <h1 className="text-white text-6xl font-bold text-center bg-">
         About Me
        </h1>
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex  flex-col justify-center items-center">
            {/* first block */}
            <div className="flex justify-center items-center cursor-pointer">
              <GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">About</h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              A self taught react developer with the background as a nurse for 8
              years based in the UK with 6 months of experiences in web
              development and more than 6 years of experiences in studying
              related subjects. Many projects and learning are ongoing. I am a
              passionate quick learner that always seek for learning
              opportunities and never give up. Currently got 13 repositories and
              248 contributions since May.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
