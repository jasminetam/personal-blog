import React from 'react'
import CustomHead from '../Components/Common/CustomHead';
import Navigation from '../Components/Common/Navigation';
import Portfolio from '../Components/Portfolio/Portfolio';

export default function About() {
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
          <title>Portfolio | Jasmine&apos;s Blog</title>
        </CustomHead>
        <div className="center">
          <Navigation topRef={topRef} executeScroll={executeScroll} />
          <div className="about">
            <Portfolio topRef={topRef} />
          </div>
        </div>
      </div>
    </>
  );
}
