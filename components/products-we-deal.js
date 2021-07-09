import Image from "next/dist/client/image";
import ProductImg from "../public/images/productwedeal.jpg";
import Button from "./button";

export default function ProductWeDeal() {
  return (
    <>
      <div className="mt-14 bg-product-wedeal relative bg-opacity-10 bg-gray-400 lg:bg-none bg-cover bg-center py-24 lg:py-36 px-14 md:px-8 grid grid-cols-12 justify-center items-center">
        <div className="hidden lg:block col-span-12 max-w-sm md:max-w-lg justify-self-center lg:col-start-2 lg:col-end-7 lg:pl-5">
          <Image
            className="rounded-2xl"
            src={ProductImg}
            alt="Different types of bean in bottles"
          />
        </div>
        <div className="col-span-12 lg:col-start-8 z-10 lg:col-end-12 xl:pr-5 flex flex-col items-center lg:items-start">
          <h2 className="font-ptserif text-3xl text-white lg:text-gray-900 lg:text-3xl xl:text-4xl font-medium text-left">
            Products We Deal With
          </h2>
          <p className="font-poppins text-gray-200 lg:text-gray-500 mt-3 text-center lg:text-sm xl:text-base lg:text-left md:w-full max-w-xl">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. asidnv
            eiusmod tempor incididunt ut labore et sdien ina dolore magna
            aliqua. eiusmod tempor incididunt ut labore et d ahoif aolore magna
            alihhqua. eiusmod tempor incididunt ut labore et dolore magna
            aliqua“
          </p>
          <Button text="More Info" />
        </div>
        <div className="bg-gradient-to-t from-primary-light via-primary to-primary-dark  absolute z-2 top-0 left-0 opacity-90 w-full h-full lg:hidden"></div>
      </div>
    </>
  );
}
