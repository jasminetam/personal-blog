import Link from "next/link";
import Post from "../Post";

export default function PostComponent({ data, slugs }) {
  return (
    <div className="posts">
      {data.map((d, id) => {
        return (
          <div key={id} className="postsContainer">
            <Post data={d} slug={slugs[id]} />
          </div>
        );
      })}
    </div>
  );
}
