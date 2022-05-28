import fs from "fs";
import styles from "../styles/Home.module.css";
import path from "path";
import matter from "gray-matter";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import PostComponent from "../Components/PostComponent";
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
        <title>Jasmine Blog</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <PostComponent slugs={slugs} data={data} />
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
