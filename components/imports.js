import ImportItem from "./import-item";

export default function Imports() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-8 mt-8">
        <h2 className="py-2 px-4 max-w-max mx-auto font-rubik font-medium text-lg text-center relative text-white bg-primary-light rounded-full shadow-md z-40">
          OUR IMPORTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 border-t-2 border-primary-dark py-16 z-10 -mt-5 rounded-lg">
          <ImportItem header="Chemicals">
            We procure certain chemicals such as formic acid, caustic soda, soda
            ash from China.
          </ImportItem>
          <ImportItem header="Used Engines">
            Second hand engines, axles, and various car accessories of Toyota
            brand are imported from Japan.
          </ImportItem>
          <ImportItem header="Cosmetic">
            Charlie brand perfumes, Nivea cosmetics and shampoos of different
            brands are sourced from Thailand, Dubai, Singapore, Taiwan, Malaysia
            and India.
          </ImportItem>
          <ImportItem header="Spices">
            Spices such as cardamom, black pepper, cumin seed, nut meg are
            imported from India, Vietnam and Indonesia.
          </ImportItem>
        </div>
      </div>
    </>
  );
}
