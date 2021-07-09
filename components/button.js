import Link from "next/link";

export default function Button({ children, link }) {
  return (
    <>
      <div className="mt-4">
        <Link href={link}>
          <a className="text-gray-50 cursor-pointer inline-block rounded-md bg-secondary text-md px-4 py-2 transform lg:hover:scale-95 lg:transition-all lg:duration-300">
            {children}
          </a>
        </Link>
      </div>
    </>
  );
}
