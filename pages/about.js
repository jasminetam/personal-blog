import CustomHead from '../Components/Common/CustomHead';
import Navigation from '../Components/Common/Navigation';
import Portfolio from '../Components/Portfolio/Portfolio';

export default function About() {
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
          <Navigation />
          <div className="about">
            <Portfolio />
          </div>
        </div>
      </div>
    </>
  );
}
