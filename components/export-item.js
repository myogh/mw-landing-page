import Image from "next/image";

export default function ExportItem({ img, name }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 lg:w-36 lg:h-36 border-3 border-primary rounded-full p-1">
          <Image className="rounded-full" src={img} alt={name} />
        </div>
        <p className="mt-2 font-poppins text-primary font-semibold">{name}</p>
      </div>
    </>
  );
}
