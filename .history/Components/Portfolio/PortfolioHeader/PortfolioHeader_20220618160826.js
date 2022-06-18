import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../public/image/heroImage.jpg";


export default function PortfolioHeader() {
  return (
    
      <div className="w-full h-full">
        <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 shadow">
          <div className=" w-full h-96 shadow-xl rounded-full relative px-10 hidden md:block">
            <Image
              src={heroImage}
              alt="heroImage"
              layout="fill"
              objectFit="cover"
              className=" rounded-full cursor-pointer hidden md:block"
            />
          </div>
          <div className="flex flex-col md:ml-20 mx-10 mt-50 pb-50 sm:m-0">
            <h1 className="font-bold text-7xl text-left mb-5 bg-transparent">
              <span className="text-neutral-800 ">
                Jasmine Tam <br /> | React Developer
              </span>
            </h1>
            <p className="text-left font-normal text-2xl font-serif mb-5 flex-wrap m-10">
              A self taught <span class="highlight-container"><span class="highlight">react developer</span></span> with
              the background as a <span class="highlight-container"><span class="highlight"> nurse </span></span> for 8 years
              based in the UK with <span class="highlight-container"><span class="highlight"> 6 months </span></span> of
              experiences in web development and more than <span class="highlight-container"><span class="highlight">6 years</span></span> of
              experiences in studying related subjects. Many projects and
              learning are ongoing. I am a <span class="highlight-container"><span class="highlight">passionate quick learner</span></span> that always
              seek for learning opportunities and <span class="highlight-container"><span class="highlight">never give up</span></span>. Currently got
              13 repositories and 248 contributions since May.
            </p>
            <div className="pl-10">
            <div className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-neutral-800 rounded-md w-60 h-16 text-lg hover:bg-black mb-20">
              <Link href="/contact">Contact Me !</Link>
              </div>
              </div>
          </div>
        </div>
      </div>

  );
}
