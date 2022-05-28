import React from "react";
import Link from "next/link";

export default function PostContent({ data, htmlString }) {
  return (
    <div className="PostContent">
      <div className="PostContentwrapper">
        <div className="PostContentTitle">
          <h1>{data?.title}</h1>
          <h2>{data?.description}</h2>
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
