export default function Header({forwardRef}) {
  return (
    <>
      <div className="header" ref={forwardRef}>
        <h1 className="headerTitle">Jasmine&apos;s Blog</h1>
      </div>
    </>
  );
}
