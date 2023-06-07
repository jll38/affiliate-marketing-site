import React from "react";
import Link from "next/link";
import Image from "next/image";
export function Navbar({}) {
  return (
    <>
      {" "}
      <nav className="fixed flex justify-between py-1 w-full px-10 content-center bg-secondary z-10 bg-white md:shadow-lg ">
        <div className="flex justif mx-5">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              height="50"
              width="210"
              className="h-12 m-0"
            />
          </Link>
        </div>
        <div className="flex child:transition-all child-hover:text-gray-800">
          <div className="flex items-center mx-5 text-gray-500 hover:underline">
            <Link href="/">Home</Link>
          </div>
          <div className="flex items-center mx-5 text-gray-500 hover:underline">
            <Link href="/products">Products</Link>
          </div>
          <div className="flex items-center mx-5 text-gray-500 hover:underline">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex items-center mx-5 text-gray-500 hover:underline">
            <Link href="/about">About Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
