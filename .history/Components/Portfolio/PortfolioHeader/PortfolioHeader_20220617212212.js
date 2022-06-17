import Link from "next/link";
export default function PortfolioHeader() {
  return (
    <div className="portfolioHeader">
      <div className="titlesDiv">
        <h2 className="titleName">Jasmine Tam | React Developer</h2>
      </div>

      <p className="subtitleName">
        A self taught react developer with the background as a nurse for 8 years
        based in the UK with 6 months of experiences in web development and more
        than 6 years of experiences in studying related subjects. Many projects
        and learning are ongoing. I am a passionate quick learner that always
        seek for learning opportunities and never give up. Currently got 13
        repositories and 248 contributions since May.
      </p>


      import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";
import { Element } from "react-scroll";


		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am <span className="text-indigo-900">Jenny</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
							aperiam placeat molestiae atque tempore perspiciatis laboriosam
							quasi pariatur, vitae sequi veritatis veniam rerum, quos
							consectetur commodi rem totam voluptatum? Hic!
						</p>
						<a
							href="#"
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
							See My Portfolio !
						</a>
					</div>
				</div>
			</div>
		</Element>
	);
}














      {/* <div className="portfolioHeaderButtonDiv">
        <button className="button-81" role="button">
          <Link href="/CoverPage">About</Link>
        </button>
        <button className="button-81" role="button">
          <Link href="/">Blog</Link>
        </button>
      </div> */}
    </div>
  );
}
