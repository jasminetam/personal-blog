import React, { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Sidebar from '../Components/Common/Sidebar';
import Header from '../Components/Common/Header';
import Navigation from '../Components/Common/Navigation';
import CustomHead from '../Components/Common/CustomHead';
import PostComponent from '../Components/Blog/PostComponent';
import Footer from '../Components/Common/Footer';
import CategoriesSideBar from '../Components/Categories/CategoriesSideBar';
import SearchBar from '../Components/Common/SearchBar';


export default function Home({ data, slugs, htmlString }) {
  const topRef = React.useRef(null);
  const executeScroll = (Ref) => Ref.current.scrollIntoView();
  const [searchInput, setsearchInput] = useState('');
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
    <div className="pageWrapper">
      <CustomHead>
        <meta
          name="description"
          content="a Blog about Jasmine learning journey on coding"
        />
        <meta
          name="keywords"
          content="Jasmine javascript react jasminetam blog"
        />
        <title>Jasmine&apos;s Blog</title>
      </CustomHead>

      <div className="center">
        <Navigation topRef={topRef} executeScroll={executeScroll} />
        <Header forwardRef={topRef} />
        <SearchBar handleChange={handleChange} searchInput={searchInput} />
        <div className="home">
          <CategoriesSideBar />
          <PostComponent
            data={data}
            searchResults={searchResults}
            slugs={slugs}
            htmlString={htmlString}
          />
          <Sidebar />
          </div>
        <Footer />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts', 'utf8').reverse();
  const slugs = files.map((filename) => filename.replace('.md', ''));
  const readMarkdownFile = files.map((slug) =>
    fs.readFileSync(path.join('posts', slug)).toString()
  );
  const matterMarkdownFile = readMarkdownFile.map((file) => matter(file).data);
  return {
    props: {
      slugs,
      data: matterMarkdownFile,
    },
  };
};
