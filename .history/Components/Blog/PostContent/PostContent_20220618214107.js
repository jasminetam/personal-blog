import React from "react";
import Link from "next/link";

export default function PostContent({ data, htmlString }) {
  return (
    <div className="PostContent">
      <div className="PostContentWrapper">
        <div className="PostContentTitle">
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
