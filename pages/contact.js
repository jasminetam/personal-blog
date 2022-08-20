import React from 'react';
import Header from '../omponents/Common/Header';
import Navigation from '../components/Common/Navigation';
import CustomHead from '../components/Common/CustomHead';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Common/Footer';
import SidebarIcon from '../components/Common/SidebarIcon';

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
