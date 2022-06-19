import Header from "../Components/Common/Header/Header";
import Navigation from "../Components/Common/Navigation/Navigation";
import Head from "next/head";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Common/Footer/Footer";
import SidebarIcon from "../Components/Common/SidebarIcon/SidebarIcon";
import Link from "next/link";

export default function Contact() {
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="image/favicon-16x16.png"
        />
        
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Contact | Jasmine&apos;s Blog</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <ContactForm />
        <SidebarIcon />
      </div>
      <Footer />
    </>
  );
}
