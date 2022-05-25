import Header from "../../Header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
