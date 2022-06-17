import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function OtherSkills() {
	return (
		<Element id="services" name="services">
			<div className="w-full h-full flex flex-col justify-center items-center pb-80">
				<h1 className="text-neutral-800 bg-transparent text-6xl font-bold text-center">
					Other Skills
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<GiCardboardBox className="w-10 h-10 bg-yellow-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-neutral-800 font-semibold">
								Communication and Teamwork
							</h2>
						</div>
						<p className="md:text-base text-gray-700 md:text-center sm:text-left sm:text-sm">
							Have been working as a nurse for many years. No matter what emergency or critical situations that we have encounter, communicate and cooperate with my colleagues
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer mb-30">
							<HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-neutral-800 font-semibold">
								Quick Learner and Challenger
							</h2>
						</div>
						<p className="md:text-base text-gray-700 md:text-center sm:text-sm sm:text-left">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<AiOutlineBlock className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-neutral-800 font-semibold ">
								Problem Solving Skill
							</h2>
						</div>
						<p className="md:text-base text-gray-700 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer ">
							<MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-neutral-800 font-semibold">
								Passionate
							</h2>
						</div>
						<p className="md:text-base text-gray-700 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Perferendis aliquid fuga, asperiores voluptas expedita nulla.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default OtherSkills;