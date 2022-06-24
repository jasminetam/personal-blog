import Link from "next/link";

export default function Post({ data, slug }) {
  return (
    <Link href={`/blog/${slug}`} data-test="component-Post">
      <div className="post">
        <div className="postInfo">
          <div className="postCats">
          <div>
            <div className="postCat">
              {data?.tags.map((tag) => (
                <button className="button" key={tag}>
                  <Link href={`/category/${tag}`}>{tag}</Link>
                </button>
              ))}
            </div>
          </div>
            <span className="postTitle">{data?.title}</span>
            <span className="postDate">{data?.date}</span>
            </div>
        </div>
      </div>
    </Link>
  );
}
