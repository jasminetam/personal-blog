import React from 'react';
import Header from '../Components/Common/Header';
import Navigation from '../Components/Common/Navigation';
import CustomHead from '../Components/Common/CustomHead';
import ContactForm from '../Components/ContactForm/ContactForm';
import Footer from '../Components/Common/Footer';
import SidebarIcon from '../Components/Common/SidebarIcon';

export default function Contact() {
  const topRef = React.useRef(null);
  const executeScroll = (Ref) => Ref.current.scrollIntoView();

  return (
    <div className="pageWrapper">
      <CustomHead>
        <meta
          name="description"
          content="a Blog about Jasmine learning journey on coding"
        />
        <meta name="keywords" content="Jasmine javascript react jasminetam" />
        <title>Contact | Jasmine&apos;s Blog</title>
      </CustomHead>
      <main className="center">
        <Header />
        <Navigation topRef={topRef} executeScroll={executeScroll} />
        <div className="projects">
          <ContactForm />
          <SidebarIcon />
        </div>
        <Footer />
      </main>
    </div>
  );
}
