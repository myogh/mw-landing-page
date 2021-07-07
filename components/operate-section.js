import OperateCard from "./operate-card";

export default function HowWeOperate() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-6 pt-5 text-center flex flex-col items-center">
        <h3 className="mb-8 border-gray-400 text-gray-600 font-poppins border-2 w-40 p-2">
          How We Operate
        </h3>
        <div className="grid grid-cols-1 w-64 auto-rows-fr sm:px-32 md:px-40 sm:w-full sm:grid-cols-2 lg:w-full lg:grid-cols-4 justify-center items-center gap-4 xl:gap-8 lg:px-10">
          <OperateCard />
          <OperateCard />
          <OperateCard />
          <OperateCard />
        </div>
      </div>
    </>
  );
}
