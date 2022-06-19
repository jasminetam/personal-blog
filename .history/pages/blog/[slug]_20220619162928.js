import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Header from "../../Components/Common/Header/Header";
import Navigation from "../../Components/Common/Navigation/Navigation";
import SidebarIcon from "../../Components/Common/SidebarIcon/SidebarIcon";
import PostContent from "../../Components/Blog/PostContent/PostContent";
import Footer from "../../Components/Common/Footer/Footer";

const Post = ({ htmlString, data }) => {
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
        <title>{`${data.title} | Jasmine's Blog`}</title>
      </Head>
      <div className="pageWrapper">
      <Header />
      <Navigation />
      <div key={""} className="home">
        <PostContent data={data} htmlString={htmlString} />
        <SidebarIcon />
      </div>
        <Footer />
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
