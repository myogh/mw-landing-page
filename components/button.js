export default function Button({ text }) {
  return (
    <>
      <div className="mt-4">
        <a className="text-gray-50 cursor-pointer inline-block rounded-md bg-primary text-md px-4 py-2 transform lg:hover:scale-95 lg:transition-all lg:duration-300">
          {text} <span>→</span>
        </a>
      </div>
    </>
  );
}
