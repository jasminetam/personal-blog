import Link from "next/link";
export default function PortfolioHeader() {
  return (
    <div className="portfolioHeader">
      <div className="titlesDiv">
        <h2 className="titleName">
          Jasmine Tam <br /> React Developer
        </h2>
      </div>
      {/* <div className="portfolioHeaderButtonDiv">
        <button className="button-81" role="button">
          <Link href="/CoverPage">About</Link>
        </button>
        <button className="button-81" role="button">
          <Link href="/">Blog</Link>
        </button> */}
      </div>
    </div>
  );
}
