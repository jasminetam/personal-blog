import Link from "next/link";

export default function Post({ data, slug }) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="post">
        <div className="postInfo">
          <img className="postImg" src={data?.picture} alt="" />
          <div className="postCats">
            <div className="postCat">
              {data?.tags.map((tag) => (
                <button className="button" key={tag}>
                  <Link href={`/category/${tag}`}>{tag}</Link>
                </button>
              ))}
            </div>
          </div>
          <span className="postTitle">{data?.title}</span>
          <hr />
          <span className="postDate">{data?.date}</span>
        </div>
      </div>
    </Link>
  );
}
