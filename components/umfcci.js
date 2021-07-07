import UMFCCILogo from "../public/umfcci-logo.svg";
import Image from "next/dist/client/image";

export default function UMFCCI() {
  return (
    <>
      <div className="bg-gray-50 max-w-screen-2xl mx-auto mt-24 py-10 px-3 flex flex-wrap-reverse justify-center items-center">
        <div className="xl:pr-5 px-6 sm:px-0 mt-5 md:mt-0 flex md:max-w-lg flex-col items-center md:items-end md:pr-12 lg:mr-20">
          <h1 className="font-ptserif text-2xl sm:text-4xl font-medium text-right">
            MEMBER OF UMFCCI
          </h1>
          <p className="font-poppins text-gray-500 mt-3 text-center md:text-right md:w-full max-w-xl">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. asidnv
            eiusmod tempor incididunt ut labore et sdien ina dolore magna
            aliqua. eiusmod tempor incididunt ut labore et d ahoif aolore magna
            alihhqua. eiusmod tempor incididunt ut labore et dolore magna
            aliqua“
          </p>
        </div>
        <div className="max-w-sm w-48 lg:w-60 md:max-w-lg justify-self-center">
          <Image
            src={UMFCCILogo}
            alt="vector image for hero section of the page"
          />
        </div>
      </div>
    </>
  );
}
