import Image from "next/image";
import NavTitle from "../public/nav-title.svg";
import Link from "next/link";

export default function NavBar() {
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

        <nav className="md:w-1/3 lg:w-1/4">
          <ul className="hidden md:flex justify-between text-base font-rubik text-primary font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
