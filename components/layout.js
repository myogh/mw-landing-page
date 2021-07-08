import NavBar from "./navbar";
import Meta from "./meta";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Meta tag will be here */}
      <Meta />
      <div className="w-full">
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
      {/* footer will be here */}
    </>
  );
}
