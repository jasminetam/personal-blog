import React from "react";
import Link from "next/link";

export default function PostContent({ data, htmlString }) {
  return (
    <div className="PostContent">
      <div className="PostContentWrapper">
        <div className="PostContentTitle">
          <h2 className="postTagTitle">{data?.title}</h2>

          <div className="PostContentInfo">
            {data?.tags.map((tag) => (
              <button className="button" key={tag}>
                <Link href={`/category/${tag}`}>{tag}</Link>
              </button>
            ))}
          </div>
        </div>
        <span className="PostContentDate">{data?.date}</span>
        <div
          className="PostContentDesc"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        ></div>
      </div>
    </div>
  );
}
