import React from "react";
import Link from "next/link";
import Image from "next/image";
export function Navbar({}) {
  return (
    <>
      {" "}
      <nav className="fixed flex justify-center py-1 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10 bg-white md:shadow-lg">
        <div className="flex items-center mx-5 text-gray-500 hover:underline">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex items-center mx-5">
          <Link href="/">
            <Image
              src="/images/homesynchub.png"
              alt="Logo"
              height="250"
              width="70"
              className="h-20 m-0"
            />
          </Link>
        </div>
        <div className="flex items-center mx-5 text-gray-500 hover:underline">
          <Link href="/products">
            Products
          </Link>
        </div>
      </nav>
    </>
  );
}
