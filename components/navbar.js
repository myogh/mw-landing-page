import Image from "next/image";
import NavTitle from "../public/nav-title.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [currURL, setcurrURL] = useState("");

  useEffect(() => {
    setcurrURL(window.location.pathname);
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto flex px-9 justify-between items-top mt-8">
        <div className="w-56 sm:w-max">
          <Link href="/">
            <a>
              <Image src={NavTitle} alt="max world title" />
            </a>
          </Link>
        </div>

        <nav className="md:w-72 lg:w-80">
          <ul className="hidden md:flex justify-between text-xs lg:text-sm xl:text-base font-rubik text-primary font-medium">
            {/* ----- Home Page Nav Btn ----------- */}
            <li
              className={`${
                currURL == "/" ? "bg-secondary-light" : "bg-white"
              } px-4 py-1 rounded-md hover:shadow-md transition duration-500`}
            >
              <Link href="/">Home</Link>
            </li>
            {/* ----- Product Page Nav Btn ----------- */}
            <li
              className={`${
                currURL == "/products" ? "bg-secondary-light" : "bg-white"
              } px-4 py-1 rounded-md hover:shadow-md transition duration-500`}
            >
              <Link href="/products">Products</Link>
            </li>
            {/* ----- Contact Page Nav Btn ----------- */}
            <li
              className={`${
                currURL == "/contact" ? "bg-secondary-light" : "bg-white"
              } px-4 py-1 rounded-md hover:shadow-md transition duration-500`}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
