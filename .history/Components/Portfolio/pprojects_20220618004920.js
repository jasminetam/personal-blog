import Link from "next/link"
import { Element } from "react-scroll";

function Pprojects() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				<h1 className="text-neutral-800 bg-transparent text-6xl font-bold text-center">
					My Projects
				</h1>
        <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="m-10 hover:text-gray-200">
        <h3>Spotifake - Spotify Clone</h3>
          <div className="rounded w-96 h-60 shadow-xl relative cursor-pointer">
            <a href="https://spotifake-alpha.vercel.app/">
						<img
							src="/image/spotifake.png"
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
            />
            </a>
            </div>
            </div>
          <div className="m-10 hover:text-gray-200">
        <h3>Daily Expenses Web App</h3>
          <div className="rounded w-96 h-60 shadow-xl relative cursor-pointer">
          <a href="https://daily-expenses.vercel.app/">
						<img
							src="/image/dailyExpenses.png"
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
              />
              </a>
              </div>
          </div>
          <div className="m-10 hover:text-gray-200 ">
        <h3>E-Commerce Site</h3>
          <div className="rounded w-96 h-60 shadow-xl relative cursor-pointer">
          <a href="https://ecommerce-site-vert.vercel.app/">
						<img
							src="/image/eCommerceSite.png"
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
              />
              </a>
            </div>
            </div>
				</div>
        <div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
          <div className="m-10 hover:text-gray-200">
        <h3>Project Management</h3>
          <div className="rounded w-96 h-60 shadow-xl relative cursor-pointer">
          <a href="https://graph-ql-project-management.vercel.app/">
						<img
							src="/image/projectManagement.png"
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
              />
              </a>
            </div>
          </div>
          <div className="m-10 hover:text-gray-200">
        <h3>Personal Blog</h3>
          <div className="rounded w-96 h-60 shadow-xl relative ">
          <a href="https://personal-blog-six-phi.vercel.app/">
						<img
							src="/image/personalBlog.png";
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
              />
              </a>
            </div>
            </div>
        </div>
         <div className="portfolioHeaderButtonDiv">
          <button className="button-81" role="button">
            <Link href="/projects">Check Out More</Link>
          </button>
        </div>
			</div>
		</Element>
	);
}

export default Pprojects;