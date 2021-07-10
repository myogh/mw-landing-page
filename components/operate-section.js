import AnalyzeIcon from "../public/svg/analyze.svg";
import ImportIcon from "../public/svg/import.svg";
import ExportIcon from "../public/svg/export.svg";
import GroupIcon from "../public/svg/group.svg";
import OperateCard from "./operate-card";

export default function HowWeOperate() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-6 py-24 text-center flex flex-col items-center">
        <h3 className="mb-8 border-gray-400 text-gray-600 font-poppins border-2 w-40 p-2">
          How We Operate
        </h3>
        <div className="grid grid-cols-1 w-64 auto-rows-fr sm:px-32 md:px-40 sm:w-full sm:grid-cols-2 lg:w-full lg:grid-cols-4 justify-center gap-4 xl:gap-8 lg:px-10">
          <OperateCard icon={AnalyzeIcon} subheading="ANALYZE">
            We carefully analyze the global and local market needs and yeilds in
            the process of sourcing products details.
          </OperateCard>
          <OperateCard icon={ImportIcon} subheading="IMPORT">
            We import certain foreign products which seems promising and
            demanding in the local market.
          </OperateCard>
          <OperateCard icon={ExportIcon} subheading="EXPORT">
            We procure a wide range of regional goods, which attracts
            international trading partners, for export.
          </OperateCard>
          <OperateCard icon={GroupIcon} subheading="TRUST">
            We make sure ourselves we are trustworthy and reliable to both the
            local and global companies we deal with.
          </OperateCard>
        </div>
      </div>
    </>
  );
}
