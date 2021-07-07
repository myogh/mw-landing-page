import UMFCCILogo from "../public/umfcci-logo.svg";
import Image from "next/dist/client/image";

export default function UMFCCI() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto mt-24 py-10 px-6 grid grid-cols-12 md:gap-4 gap-y-3 justify-center items-center">
        <div className="md:px-0 md:mt-5 col-span-full order-2 md:order-1 md:col-start-2 md:col-end-7 flex flex-col items-center md:items-end">
          <h1 className="font-ptserif flex-shrink text-2xl lg:text-4xl font-medium text-right">
            MEMBER OF UMFCCI
          </h1>
          <p className="font-poppins text-gray-500 mt-3 text-center md:text-sm xl:text-base md:text-right">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. asidnv
            eiusmod tempor incididunt ut labore et sdien ina dolore magna
            aliqua. eiusmod tempor incididunt ut labore et d ahoif aolore magna
            alihhqua. eiusmod tempor incididunt ut labore et dolore magna
            aliqua“
          </p>
        </div>
        <div className="w-56 lg:w-80 col-span-full order-1 md:order-2 md:col-start-7 md:col-end-12 lg:pl-10 justify-self-center">
          <Image
            src={UMFCCILogo}
            alt="vector image for hero section of the page"
          />
        </div>
      </div>
    </>
  );
}
