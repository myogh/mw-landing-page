import Image from "next/image";
import Plant from "../public/svg/footer-plant.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-primary">
          <div className="flex lg:justify-between justify-center p-8 max-w-screen-2xl mx-auto">
            <div className="w-20 hidden lg:block">
              <Image src={Plant} alt="vector plant svg" />
            </div>
            <div className="lg:text-right text-center">
              <h3 className="font-rubik text-white text-lg font-medium mb-2">
                Max World International Co.,Ltd.
              </h3>
              <p className="font-poppins text-sm text-gray-300">
                10/03, Shwe Ohn Pin Housing 1, Yan Aye St, West Yankin,
                <br /> Yangon, Myanmar. <br /> <strong>Tel</strong> :
                +959-5066713, +959-8631806 <br /> <strong>Email</strong> :
                maxworldintl@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="text-center font-poppins text-gray-300 bg-primary-dark py-3 text-xs">
          <p>&copy; {new Date().getFullYear()} Copyright maxworldint.com</p>
        </div>
      </footer>
    </>
  );
}
