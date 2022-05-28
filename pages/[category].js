import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import PostComponent from "../Components/PostComponent";
import categories from "../components/Categories";

const Catergory = ({ category, data, slugs }) => {
  const type = "blog";
  return (
    <>
      <Head>
        <title>{`${category} | Jasmine's Blog`}</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <PostComponent slugs={slugs} data={data} category={category} />
        <Sidebar />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = categories;
  const paths = files.map((filename, idx) => ({
    params: {
      category: files[idx],
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { category } }) => {
  const files = fs.readdirSync("posts", "utf8").reverse();
  const slugs = files.map((filename) => filename.replace(".md", ""));
  const readMarkdownFile = files.map((slug) =>
    fs.readFileSync(path.join("posts", slug)).toString()
  );
  const matterMarkdownFile = readMarkdownFile.map((file) => matter(file).data);
  return {
    props: {
      category,
      slugs,
      data: matterMarkdownFile,
    },
  };
};

export default Catergory;
