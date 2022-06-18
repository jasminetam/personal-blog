import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function OtherSkills() {
	return (
		<Element id="otherskills" name="otherskills">
				<h1 className="text-neutral-800 bg-transparent text-6xl font-bold text-center">
					Other Skills
				</h1>
			<div className="w-full h-full flex justify-center items-center pb-40">
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<GiCardboardBox className="w-10 h-10 bg-yellow-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-neutral-800 font-semibold">
								Communication and Teamwork
							</h2>
						</div>
						<h5 className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-left sm:text-sm">
              Since I was working as a nurse, I have learnt that communication and cooperation with colleagues are extremely important.
              To make sure our job can be done properly and smoothly, we cannot work alone. We have to keep track on other&apos;s progress and provide feedback if necessary.
              By doing this, we can ensure the quality of our work but as well as to improve our performance.
              
						</h5>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer mb-30">
							<HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-neutral-800 font-semibold">
								Quick Learner and Challenger
							</h2>
						</div>
						<p className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-sm sm:text-left">
              In the hospital, we have to face emergency and situations that we may never seen before.
              We have to take challenge as a good opportunity to improve our practice and make it as a great experience for future challenges.
              Life-long learners and people who love challenges can fit in any of the roles in their career and life.
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
						<p className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-left sm:text-sm">
              Sometimes situations related to complicated social background or multiple factors can be difficult to solve.
              We should not stop thinking because the problem solving skills can be build up if we always question and keen on thinking the solutions.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer ">
							<MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-neutral-800 font-semibold">
								Organization
							</h2>
						</div>
						<p className="md:text-base text-gray-700 lg:text-lg md:text-center sm:text-left sm:text-sm">
              As nursing is a busy role which require multi-tasking. We have to prioritize our work and make sure we can provide our services accordingly.
              By better organization of work, tasks can be done on time according to the importance and urgency. More time can be arranged to deal with emergency events.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default OtherSkills;