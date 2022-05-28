import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import Head from "next/head";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <>
      {/* <div>
        slugs:
        {slugs.map((slug) => {
          return (
            <div key={slug}>
              <Link href={"/blog/" + slug}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div>
          );
        })}
      </div> */}
      <Head>
        <title>Contact | Jasmine Blog</title>
      </Head>
      <Header />
      <Navigation />
      <div key={""} className="home">
        <ContactForm />
        <Sidebar />
      </div>
    </>
  );
}
