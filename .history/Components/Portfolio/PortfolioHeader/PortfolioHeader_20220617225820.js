import React from "react";
import Image from "next/image";
import heroImage from "../../../public/image/heroImage.jpg";
import { Element } from "react-scroll";

export default function PortfolioHeader() {
  return (
    
      <Element id="home" name="home">
        <div>
          <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 sha">
            <div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block m-10">
              <Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
            </div>
            <div className="flex flex-col md:ml-20 mx-10 mt-10">
              <h1 className="font-bold text-7xl text-left mb-5 bg-transparent m-10">
                <span className="text-indigo-900 ">
                  Jasmine Tam <br /> | React Developer
                </span>
              </h1>
              <p className="text-left font-normal text-2xl font-serif mb-5 flex-wrap m-10 ">
                A self taught react developer with the background as a nurse for
                8 years based in the UK with 6 months of experiences in web
                development and more than 6 years of experiences in studying
                related subjects. Many projects and learning are ongoing. I am a
                passionate quick learner that always seek for learning
                opportunities and never give up. Currently got 13 repositories
                and 248 contributions since May.
              </p>
              <a
                href="#"
                className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black m-10"
              >
                Contact Me !
              </a>
            </div>
          </div>
        </div>
        {/* <div className="portfolioHeaderButtonDiv">
          <button className="button-81" role="button">
            <Link href="/CoverPage">About</Link>
          </button>
          <button className="button-81" role="button">
            <Link href="/">Blog</Link>
          </button>
        </div> */}
      </Element>

  )
}

