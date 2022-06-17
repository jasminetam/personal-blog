import Link from "next/link";
export default function PortfolioHeader() {
  return (
    <div className="portfolioHeader">
      <div className="titlesDiv">
        <h2 className="titleName">Jasmine Tam | React Developer</h2>
      </div>

      <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
        A self taught react developer with the background as a nurse for 8 years
        based in the UK with 6 months of experiences in web development and more
        than 6 years of experiences in studying related subjects. Many projects
        and learning are ongoing. I am a passionate quick learner that always
        seek for learning opportunities and never give up. Currently got 13
        repositories and 248 contributions since May.
      </p>
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
