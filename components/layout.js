import NavBar from "./navbar";
import Meta from "./meta";
import Footer from "./footer";
import { useState } from "react";

export default function Layout({ children }) {
  // navOffcanvas: boolean
  // The state of off canvas navigation in small screens.
  // True if burger menu icon is clicked.
  // False when close icon is clicked.
  const [navOffcanvas, setNavOffcanvas] = useState(false);

  return (
    <>
      <Meta />
      <div
        className={`w-full h-screen ${navOffcanvas ? "overflow-hidden" : ""}`}
      >
        <NavBar
          navState={navOffcanvas}
          changeNavState={(value) => setNavOffcanvas(value)}
        />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
