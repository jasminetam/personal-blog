import React from "react";
import Link from "next/link";
import {BiBots}

export default function PostContent({ data, htmlString }) {
  return (
    <div className="PostContent">
      <div className="PostContentWrapper">
        <div className="PostContentTitle">
          <div className="PostContentInfo">
            {data?.tags.map((tag) => (
              <button className="button" key={tag}>
                <Link href={`/category/${tag}`}>{tag}</Link>
              </button>
            ))}
          </div>
          <h2 className="postTagTitle">{data?.title}</h2>

          <h3 className="postTagDesc">{data?.description}</h3>
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
