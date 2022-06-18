import Post from "../Post/Post"
export default function PostComponent({ data, slugs }) {
  return (
    <div className="posts">
      {data.map((d, id) => {
        return (
          <div keyclassName="postsContainer">
          <div key={id} className="postsDiv">
            <Post data={d} slug={slugs[id]} />
            </div>
            </div>
        );
      })}
    </div>
  );
}
