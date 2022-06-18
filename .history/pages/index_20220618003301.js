import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Sidebar from "../Components/Common/Sidebar/Sidebar";
import Header from "../Components/Common/Header/Header";
import Navigation from "../Components/Common/Navigation/Navigation";
import Head from "next/head";
import PostComponent from "../Components/Blog/PostComponent/PostComponent";
import Footer from "../Components/Common/Footer/Footer";


export default function Home({ data, slugs, htmlString }) {
  const [searchInput, setsearchInput] = useState([]);
  const [searchResults, setsearchResults] = useState([]);
  const handleChange = (e) => {
    setsearchInput(e.target.value);
  };

  useEffect(() => {
    const results = data.filter((data) =>
      data.title.toLowerCase().includes(searchInput)
    );
    setsearchResults(results);
  }, [searchInput]);

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
        <link rel="shortcut icon" href="../../favicon.ico" />

        <title>Jasmine&apos;s Blog</title>
      </Head>
      <Header />
      <Navigation />
      <div>
        <input
          className="searchBox"
          type="text"
          placeholder="'Search"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
      <div key={""} className="home">
        <PostComponent
          data={searchResults}
          slugs={slugs}
          htmlString={htmlString}
        />
        <Sidebar />
      </div>
      <Footer />
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