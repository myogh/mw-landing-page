export default function ImportItem({ header, children }) {
  return (
    <>
      <div className="border-2 p-4 rounded-xl shadow-md">
        <h3 className="font-rubik text-xl mb-1">{header}</h3>
        <p className="text-base text-gray-600 font-poppins font-light">
          {children}
        </p>
      </div>
    </>
  );
}
