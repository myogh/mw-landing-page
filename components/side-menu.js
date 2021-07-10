import Link from "next/link";
import Image from "next/image";
import CloseIcon from "../public/svg/close.svg";
import HomeIcon from "../public/svg/home-icon.svg";
import NavMailIcon from "../public/svg/contact-nav-icon.svg";
import ProductIcon from "../public/svg/product-nav-icon.svg";
import NavTitle from "../public/svg/nav-title.svg";

export default function SideMenu({ currURL, changeNavState }) {
  return (
    <>
      <div className="max-w-screen-2xl px-9 mx-auto h-screen fixed bg-gray-50 z-50 inset-0 transition duration-300">
        <div className="pb-4 flex justify-between items-top mt-8">
          <div className="w-56 sm:w-max">
            <Link href="/">
              <a>
                <Image src={NavTitle} alt="max world title" />
              </a>
            </Link>
          </div>
          {/*----------- burger icon ------------------*/}
          <div onClick={() => changeNavState(false)} className="md:hidden">
            <Image src={CloseIcon} alt="Close icon" />
          </div>
        </div>
        {/* ------- nav sec for mobile screen ------------ */}
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col justify-between text-lg font-rubik text-primary font-medium">
            {/* ----- Home Page Nav Btn ----------- */}
            <Link href="/">
              <a>
                <li
                  className={`${
                    currURL == "/" ? "bg-secondary-light" : "bg-gray-50"
                  } px-4 py-2 mb-2 rounded-md hover:shadow-md transition duration-500`}
                >
                  <div className="flex">
                    <div className="mr-2">
                      <Image src={HomeIcon} alt="home icon" />
                    </div>
                    <p>Home</p>
                  </div>
                </li>
              </a>
            </Link>
            {/* ----- Product Page Nav Btn ----------- */}
            <Link href="/products">
              <a>
                <li
                  className={`${
                    currURL == "/products" ? "bg-secondary-light" : "bg-gray-50"
                  } px-4 py-2 mb-2 rounded-md hover:shadow-md transition duration-500`}
                >
                  <div className="flex">
                    <div className="mr-2">
                      <Image src={ProductIcon} alt="product icon" />
                    </div>
                    <p>Products</p>
                  </div>
                </li>
              </a>
            </Link>
            {/* ----- Contact Page Nav Btn ----------- */}
            <Link href="/contact">
              <a>
                <li
                  className={`${
                    currURL == "/contact" ? "bg-secondary-light" : "bg-gray-50"
                  } px-4 py-2 mb-2 rounded-md hover:shadow-md transition duration-500`}
                >
                  <div className="flex">
                    <div className="mr-2">
                      <Image src={NavMailIcon} alt="mail icon" />
                    </div>
                    <p>Contact Us</p>
                  </div>
                </li>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
