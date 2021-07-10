import SideMenu from "./side-menu";
import TopMenu from "./top-menu";
import { useEffect, useState } from "react";

export default function NavBar({ navState, changeNavState }) {
  const [currURL, setcurrURL] = useState("");

  useEffect(() => {
    setcurrURL(window.location.pathname);
  }, []);

  return (
    <>
      {navState ? (
        <SideMenu currURL={currURL} changeNavState={changeNavState} />
      ) : (
        <TopMenu currURL={currURL} changeNavState={changeNavState} />
      )}
    </>
  );
}
