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
            lop dodf isof oisdfe owinfdiseit g cvug r cg b er jhs grek ghf skj
            wkf dskf wkgh kshf jwkh gkw
          </ImportItem>
          <ImportItem header="Used Engines">
            lop dodf isof oisdfe owinfdiseit g cvug r cg b er jhs grek ghf skj
            wkf dskf wkgh kshf jwkh gkw
          </ImportItem>
          <ImportItem header="Perfume">
            lop dodf isof oisdfe owinfdiseit g cvug r cg b er jhs grek ghf skj
            wkf dskf wkgh kshf jwkh gkw
          </ImportItem>
          <ImportItem header="Electronic Items">
            lop dodf isof oisdfe owinfdiseit g cvug r cg b er jhs grek ghf skj
            wkf dskf wkgh kshf jwkh gkw
          </ImportItem>
          <ImportItem header="Spices">
            lop dodf isof oisdfe owinfdiseit g cvug r cg b er jhs grek ghf skj
            wkf dskf wkgh kshf jwkh gkw
          </ImportItem>
        </div>
      </div>
    </>
  );
}
