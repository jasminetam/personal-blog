import SinglePost from "../../singlePost/SinglePost";
import Sidebar from "../../Sidebar/Sidebar";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
