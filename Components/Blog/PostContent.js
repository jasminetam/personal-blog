import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

export default function PostContent({ data, htmlString }) {
  const router = useRouter();
  return (
    <div className="postContent" data-test="component-PostContent">
      <div className="backIconDiv">
        <div onClick={() => router.back()}>
          <a className="backIcon">
            <BiArrowBack className="mr-2" /> Back
          </a>
        </div>
      </div>
      <div className="postContentWrapper">
        <div className="postContentHeader">
          <div className="postContentTitle">
            <div className="postContentInfo">
              {data?.tags.map((tag) => (
                <Link href={`/category/${tag}`} key={tag}>
                  <button className="button">{tag}</button>
                </Link>
              ))}
            </div>
            <h2 className="postTagTitle">{data?.title}</h2>

            <p className="postTagDesc">{data?.description}</p>
          </div>
          <span className="postContentDate">{data?.date}</span>
        </div>
        <div
          className="postContentDesc"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        ></div>
      </div>
    </div>
  );
}
