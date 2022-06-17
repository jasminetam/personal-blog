import { Element } from "react-scroll";

function Pprojects() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				<p className="text-sm uppercase text-gray-400">Portfolio</p>
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					All Creative Works
				</h1>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
					
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
					
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
					
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
					
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
					
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						{/* <Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer" */}
						/>
					</div>
				</div>

				<h1 className="text-blue-900 text-base my-10">
					Discover all projects on{" "}
					<a href="#" className="text-black font-semibold">
						dribbble{" "}
					</a>
				</h1>
			</div>
		</Element>
	);
}

export default Pprojects;