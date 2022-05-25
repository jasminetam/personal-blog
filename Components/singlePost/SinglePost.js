import "./singlePost.css"
import { RiDeleteBinFill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem
                <div className="singlePostEdit">
                    <RiEdit2Fill className="singlePostIcon" />
                    <RiDeleteBinFill className="singlePostIcon" />
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem
                </p>
            </div>
        </div>
    )
}