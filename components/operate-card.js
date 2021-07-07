import Image from "next/image";
import ExportIcon from "../public/export.svg";

export default function OperateCard({ icon, subheading, description }) {
  return (
    <>
      <div className="flex flex-col items-center text-center py-6 px-4 border border-1 border-gray-400 rounded-xl">
        <div>
          <Image
            width="70px"
            height="70px"
            src={ExportIcon}
            alt="export icon"
          />
        </div>
        <h3 className="text-xl mt-3 font-rubik font-semibold ">ANALYZE</h3>
        <p className="text-sm text-gray-500 font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
    </>
  );
}
