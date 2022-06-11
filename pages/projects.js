import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import Head from "next/head";
import Footer from "../Components/Footer";
import ProjectsBrowse from "../Components/Projects/ProjectsBrowse";

export default function Projects() {
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
        <link rel="shortcut icon" href="/favicon.ico" />

        <title>Projects | Jasmine&apos;s Blog</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <ProjectsBrowse />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
