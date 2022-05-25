import Header from '../../Header/Header'
import "./Home.css"
import Posts from "../../posts/Posts"
import Sidebar from "../../Sidebar/Sidebar"

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
