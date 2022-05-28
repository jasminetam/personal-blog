import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Sidebar from "../../Components/Sidebar";
import PostContent from "../../Components/PostContent";

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{`${data.title} | Jasmine's Blog`}</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <PostContent data={data} htmlString={htmlString} />
        <Sidebar />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const readMarkdownFile = fs
    .readFileSync(path.join("posts", slug + ".md"), "utf8")
    .toString();
  const matterMarkdownFile = matter(readMarkdownFile);
  const htmlString = marked(matterMarkdownFile.content);

  return {
    props: {
      htmlString,
      data: matterMarkdownFile.data,
    },
  };
};

export default Post;
