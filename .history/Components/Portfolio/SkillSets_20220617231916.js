
import { FaApple } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
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
							<GrReactjs className="md:w-20 md:h-20 w-16 h-16  text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiNextdotjs className="md:w-20 md:h-20 w-16 h-16  text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<FaApple className="md:w-20 md:h-20 w-16 h-16  text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<FaDropbox className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<FaMicrosoft className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<FaMicrosoft className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<FaMicrosoft className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<FaMicrosoft className="md:w-20 md:h-20 w-16 h-16 text-gray-500 md:m-3 p-1 hover:text-black" />
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default SkillSets;