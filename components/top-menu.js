import Image from "next/image";
import MenuIcon from "../public/svg/menu.svg";
import NavTitle from "../public/svg/nav-title.svg";
import Link from "next/link";

export default function TopMenu({ currURL, changeNavState }) {
  return (
    <>
      <div className="max-w-screen-2xl px-9 mx-auto">
        <div className="pb-4 flex justify-between items-top mt-8">
          <div className="w-56 sm:w-max">
            <Link href="/">
              <a>
                <Image src={NavTitle} alt="max world title" />
              </a>
            </Link>
          </div>
          {/* nav section for large screens */}
          <nav className="hidden md:block md:w-72 lg:w-80">
            <ul className="flex justify-between text-xs lg:text-sm xl:text-base font-rubik text-primary font-medium">
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
          {/*----------- burger icon ------------------*/}
          <div onClick={() => changeNavState(true)} className="md:hidden">
            <Image src={MenuIcon} alt="Menu icon" />
          </div>
        </div>
      </div>
    </>
  );
}
