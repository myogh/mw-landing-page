import Image from "next/dist/client/image";
import ProductImg from "../public/images/productwedeal.jpg";
import Button from "./button";

export default function ProductWeDeal() {
  return (
    <>
      <div className="mt-14 bg-product-wedeal relative bg-opacity-10 bg-gray-400 lg:bg-none bg-cover bg-center py-24 lg:py-36 px-14 md:px-8 grid grid-cols-12 justify-center items-center">
        <div className="hidden lg:block col-span-12 max-w-sm md:max-w-lg justify-self-center lg:col-start-2 lg:col-end-7 lg:pl-5">
          <Image
            src={ProductImg}
            placeholder="blur"
            alt="Different types of bean in bottles"
          />
          <div className="text-center  text-gray-400 text-sm mt-1">
            Photo by{" "}
            <a href="https://unsplash.com/@bettysubrizi_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Betty Subrizi
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/beans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-start-8 z-10 lg:col-end-12 xl:pr-5 flex flex-col items-center lg:items-start">
          <h2 className="font-ptserif text-3xl text-white lg:text-gray-900 lg:text-3xl xl:text-4xl font-medium text-left">
            Products We Deal With
          </h2>
          <p className="font-poppins text-gray-200 lg:text-gray-500 mt-3 text-center lg:text-sm xl:text-base lg:text-left md:w-full max-w-xl">
            “There are a variety of products we consider in doing business, and
            the list keeps alternating based on the market needs. We mostly deal
            with pulses and agro products for exports. For detailed product
            list, you can check our product page.“
          </p>
          <Button link="/products">
            More Info <span>→</span>
          </Button>
        </div>
        <div className="bg-gradient-to-t from-primary-light via-primary to-primary-dark  absolute z-2 top-0 left-0 opacity-90 w-full h-full lg:hidden"></div>
      </div>
    </>
  );
}
