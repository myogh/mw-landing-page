import ExportItem from "./export-item";
import { exportProductImgs } from "../constants/exports-img-list";

export default function Exports() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-8 mt-8">
        <h2 className="py-2 px-4 max-w-max mx-auto font-rubik font-medium text-lg text-center relative text-white bg-primary-light rounded-full shadow-md z-40">
          OUR EXPORTS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-6 border-t-2 border-primary-dark py-16 z-10 -mt-5 rounded-lg">
          {exportProductImgs.map((product) => (
            <ExportItem
              key={product.name}
              img={product.img}
              name={product.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
