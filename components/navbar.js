import Image from "next/image";
import NavTitle from "../public/nav-title.svg";

export default function NavBar() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto flex px-9 justify-between items-top mt-8">
        <div className="w-56 sm:w-max">
          <Image src={NavTitle} alt="max world title" />
        </div>

        <nav className="md:w-1/3 lg:w-1/4">
          <ul className="hidden md:flex justify-between text-base font-rubik text-primary font-medium">
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
