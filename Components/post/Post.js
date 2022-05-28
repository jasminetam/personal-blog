import Link from "next/link";

export default function Post({ data, slug }) {
  console.log(data, slug);
  return (
    <Link href={`/blog/${slug}`}>
      <div className="post">
        <div className="postInfo">
          <img className="postImg" src={data?.picture} alt="" />
          <div className="postCats">
            <span className="postCat">{data?.tags}</span>
          </div>
          <span className="postTitle">{data?.title}</span>
          <hr />
          <span className="postDate">{data?.date}</span>
        </div>
        <p className="postDesc">{data?.description}</p>
      </div>
    </Link>
  );
}
