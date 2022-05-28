import fs from "fs";
import styles from "../styles/Home.module.css";
import path from "path";
import matter from "gray-matter";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import Posts from "../Components/Posts/Posts";
import Head from "next/head";

export default function Home({ data, slugs }) {
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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anaheim&family=Cinzel+Decorative&family=Hind+Siliguri:wght@300&family=Julius+Sans+One&family=Proza+Libre&family=Rajdhani&family=Spartan:wght@400&family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>Jasmine's Blog</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <Posts slugs={slugs} data={data} />
        <Sidebar />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts", "utf8").reverse();
  const slugs = files.map((filename) => filename.replace(".md", ""));
  const readMarkdownFile = files.map((slug) =>
    fs.readFileSync(path.join("posts", slug)).toString()
  );
  const matterMarkdownFile = readMarkdownFile.map((file) => matter(file).data);
  return {
    props: {
      slugs,
      data: matterMarkdownFile,
    },
  };
};
