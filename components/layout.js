import NavBar from "./navbar";
import Meta from "./meta";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="w-full">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
