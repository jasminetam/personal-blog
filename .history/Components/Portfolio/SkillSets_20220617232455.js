import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
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
					<div className="flex justify-between text-center mx-20 my-10 md:gap-10 gap-2">
						<div className="flex justify-center items-center cursor-pointer">
							<FaReact className="md:w-20 md:h-20 w-16 h-16  text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiNextdotjs className="md:w-20 md:h-20 w-16 h-16  text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiTypescript className="md:w-20 md:h-20 w-16 h-16  text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiExpress className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiMongodb className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiStyledcomponents className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiStrapi className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiTailwindcss className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default SkillSets;