import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import CustomHead from '../../Components/Common/CustomHead';
import marked from 'marked';
import Header from '../../Components/Common/Header';
import Navigation from '../../Components/Common/Navigation';
import SidebarIcon from '../../Components/Common/SidebarIcon';
import PostContent from '../../Components/Blog/PostContent';
import Footer from '../../Components/Common/Footer';

const Post = ({ htmlString, data }) => {
  const topRef = React.useRef(null);
  const executeScroll = (Ref) => Ref.current.scrollIntoView();

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
          <title>{`${data.title} | Jasmine's Blog`}</title>
        </CustomHead>
        <div className="center">
          <Header forwardRef={topRef} />
          <Navigation topRef={topRef} executeScroll={executeScroll} />
          <div className="projects">
            <PostContent data={data} htmlString={htmlString} />
            <SidebarIcon />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const readMarkdownFile = fs
    .readFileSync(path.join('posts', slug + '.md'), 'utf8')
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
