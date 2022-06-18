import Link from "next/link"
import One from "../../public/image/spotifake.png";
import Two from "../../public/image/dailyExpenses.png";
import Three from "../../public/image/eCommerceSite.png";
import Four from "../../public/image/projectManagement.png";
import Five from "../../public/image/personalBlog.png";
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
						<Img
							src={One}
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
						<Image
							src={Two}
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
						<Image
							src={Three}
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
						<Image
							src={Four}
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
						<Image
							src={Five}
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