import Post from "../post/Post";

const arr = [1, 2, 3, 4, 5, 6];

export default function Posts() {
  return (
    <div className="posts">
      {arr.map((_, __) => {
        return <Post key={""} />;
      })}
    </div>
  );
}
