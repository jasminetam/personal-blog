import fs from "fs";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Posts from "../Components/posts/Posts";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";

export default function Home({ slugs }) {
  return (
    <>
      {/* <div>
        slugs:
        {slugs.map((slug) => {
          return (
            <div key={slug}>
              <Link href={"/blog/" + slug}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div>
          );
        })}
      </div> */}
      <Navigation />
      <Header />
      <div key={""} className="home">
        <Posts slugs={slugs} />
        <Sidebar />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
