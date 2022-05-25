import fs from "fs";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ slugs }) {
  return (
    <div>
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
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
