import React, { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import CustomHead from '../../components/Common/CustomHead';
import Sidebar from '../../components/Common/Sidebar';
import Header from '../../components/Common/Header';
import Navigation from '../../components/Common/Navigation';
import PostComponent from '../../components/Blog/PostComponent';
import categories from '../../components/Categories/CategoriesList';
import Footer from '../../components/Common/Footer';
import CategoriesSideBar from '../../components/Categories/CategoriesSideBar';

const Catergory = ({ category, data, slugs, htmlString }) => {
  const topRef = React.useRef(null);
  const executeScroll = (Ref) => Ref.current.scrollIntoView();
  const [filteredCategories, setfilteredCategories] = useState([]);

  useEffect(() => {
    setfilteredCategories((_prev) =>
      data.filter((cat) => cat?.tags.includes(category))
    );
  }, [category]);

  return (
    <>
      <div className="pageWrapper">
        <CustomHead>
          <meta
            name="description"
            content="a Blog about Jasmine learning journey on coding"
          />
          <meta name="keywords" content="Jasmine javascript react jasminetam" />
          <meta name="description" content={htmlString} />
          <meta name="keywords" content={data.tags} />
          <title>{`${category} | Jasmine's Blog`}</title>
        </CustomHead>
        <div className="center">
          <Navigation topRef={topRef} executeScroll={executeScroll} />
          <Header forwardRef={topRef} />
          <div className="home">
            <CategoriesSideBar />
            <PostComponent
              slugs={slugs}
              data={filteredCategories}
              category={category}
            />
            <Sidebar />
          </div>
          <Footer />
        </div>
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
  const files = fs.readdirSync('posts', 'utf8').reverse();
  const slugs = files.map((filename) => filename.replace('.md', ''));
  const readMarkdownFile = files.map((slug) =>
    fs.readFileSync(path.join('posts', slug)).toString()
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
