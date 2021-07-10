import Image from "next/image";
import HeroImg from "../public/svg/hero-img.svg";
import ComProfile from "../public/svg/com-profile-text.svg";

export default function Hero() {
  return (
    <>
      <div className="mt-9 py-10 px-6 grid grid-cols-12 justify-center items-center">
        <div className="col-span-12 max-w-sm md:max-w-lg justify-self-center md:col-start-2 md:col-end-7 md:pl-5">
          <Image
            src={HeroImg}
            alt="vector image for hero section of the page"
          />
        </div>
        <div className="col-span-12 md:col-start-8 md:col-end-12 xl:pr-5 flex flex-col items-center md:items-start mt-12">
          <h1 className="w-56 lg:w-64">
            <Image src={ComProfile} alt="company profile" />
          </h1>
          <p className="font-poppins text-gray-500 text-sm lg:text-lg mt-3 text-center md:text-left md:w-full max-w-xl">
            “Max World International Co.,Ltd, based in Myanmar, is an esteemed
            exporter and importer of a wide category of products ranging from
            pluses and beans to chemicals. With dedicated principles and ethics,
            we have established a sustained and successful relationship with a
            number of foreign and local organizations.“
          </p>
        </div>
      </div>
    </>
  );
}
