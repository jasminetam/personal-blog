import "./Posts.css";
import Post from "../post/Post";

const arr = [1, 2, 3, 4, 5, 6];

export default function Posts() {
  console.log(BLOG_DATA);
  return (
    <div className="posts">
      {arr.map((_, __) => {
        return <Post />;
      })}
    </div>
  );
}
