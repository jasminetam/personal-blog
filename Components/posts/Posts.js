import Link from "next/link";
import Post from "../post/Post";
const arr = [1, 2, 3, 4, 5, 6];

//

export default function Posts({ slugs }) {
  return (
    <div className="posts">
      {slugs.map((slug, id) => {
        console.log(slug);
        return (
          <div key={id}>
            <Post slug={slug} />
          </div>
        );
      })}
    </div>
  );
}
