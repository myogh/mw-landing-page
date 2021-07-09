import Image from "next/image";
import MailIcon from "../public/email_icon.svg";

export default function MailBtn() {
  return (
    <>
      <div className="mt-4">
        <a
          href="mailto:maxworldintl@gmail.com"
          className="text-gray-50 flex justify-center items-center cursor-pointer rounded-md text-md px-4 py-2 bg-secondary shadow-xl transform lg:hover:scale-95 lg:transition-all lg:duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-5 mr-1 mt-1">
            <Image src={MailIcon} alt="mail icon" />
          </div>
          <p className="font-bold">Mail Us</p>
        </a>
      </div>
    </>
  );
}
