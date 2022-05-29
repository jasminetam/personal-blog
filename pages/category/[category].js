import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import PostComponent from "../../Components/PostComponent";
import categories from "../../Components/categories";
import Footer from "../../Components/Footer";

const Catergory = ({ category, data, slugs, htmlString }) => {
  const [filteredCategories, setfilteredCategories] = useState([]);

  useEffect(() => {
    setfilteredCategories((_prev) =>
      data.filter((cat) => cat?.tags.includes(category))
    );
  }, [category]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;500&family=Playfair+Display:ital@1&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="a Blog about Jasmine learning journey on coding"
        />
        <meta name="keywords" content="Jasmine javascript react jasminetam" />
        <link href="logo.png" rel="icon" type="image/png" sizes="16x16" />
        <meta name="description" content={htmlString} />
        <meta name="keywords" content={data.tags} />
        <title>{`${category} | Jasmine's Blog`}</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <PostComponent
          slugs={slugs}
          data={filteredCategories}
          category={category}
        />
        <Sidebar />
      </div>
      <Footer />
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
