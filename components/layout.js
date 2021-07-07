import NavBar from "./navbar";
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      {/* Meta tag will be here */}
      <Meta />
      <div className="w-full">
        <NavBar />
        <main>{children}</main>
      </div>
      {/* footer will be here */}
    </>
  );
}
