import Post from './Post';

export default function PostComponent({ data, slugs }) {
  return (
    <div className="posts" data-test="component-PostComponent">
      {data.map((d, id) => {
        return (
          <>
            <div key={id} className="postsContainer">
              <div key={id} className="postsDiv">
                <Post data={d} slug={slugs[id]} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
