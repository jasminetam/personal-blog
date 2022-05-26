import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <Image className="headerImg" src={"/header.jpg"} alt="" />
    </div>
  );
}
