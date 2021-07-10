import Image from "next/image";

export default function OperateCard({ icon, subheading, children }) {
  return (
    <>
      <div className="flex flex-col items-center text-center py-6 px-4 border border-1 border-gray-400 rounded-xl">
        <div>
          <Image width="70px" height="70px" src={icon} alt="export icon" />
        </div>
        <h3 className="text-xl mt-3 mb-2 font-rubik font-semibold ">
          {subheading}
        </h3>
        <p className="text-sm text-gray-500 font-rubik">{children}</p>
      </div>
    </>
  );
}
