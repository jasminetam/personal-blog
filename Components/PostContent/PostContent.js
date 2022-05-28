import React from "react";

export default function PostContent({ data, htmlString }) {
  console.log("123", htmlString, data);
  return (
    <div className="PostContent">
      <div className="PostContentwrapper">
        <div className="PostContentTitle">
          <h1>{data?.title}</h1>
          <h2>{data?.description}</h2>
          <div className="PostContentInfo">
            <button>
              <span>{data?.tags}</span>
            </button>
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
