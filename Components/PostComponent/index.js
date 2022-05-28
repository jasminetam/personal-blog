import Link from "next/link";
import Post from "../Post";

export default function Posts({ data, slugs }) {
  return (
    <div className="posts">
      {slugs.map((slug, id) => {
        return (
          <div key={id} className="postsContainer">
            <Post data={data[id]} slug={slug} />
          </div>
        );
      })}
    </div>
  );
}
