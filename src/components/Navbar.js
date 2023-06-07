import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export function Navbar({}) {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <>
      <nav className="hidden fixed sm:flex justify-between py-1 w-full px-10 content-center bg-secondary z-10 bg-white md:shadow-lg ">
        <div className="flex mx-5">
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
        <div className="flex child:transition-all sm:text-[.7em] md:text-[1em] child-hover:text-gray-800">
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

      <nav id="mobile-nav" className="sm:hidden fixed flex flex-col justify-start py-1 w-full px-10 content-center bg-secondary z-10 bg-white md:shadow-lg border-b-2">
        <div className="flex justify-between mx-5 relative -bottom-4">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              height="50"
              width="210"
              className="h-12 m-0"
            />
          </Link>
          <button onClick={() => {
            setMobileToggle(!mobileToggle);
          }}>
          <i className="fa-solid fa-bars text-[1.5em]"></i>
          </button>
        </div>
        <div className={`${(mobileToggle ? "h-[320px]" : "h-[0px]")} flex flex-col gap-5 child:transition-all text-[1.75em] child-hover:text-gray-800 py-4 overflow-hidden transition-all delay-100 duration-150 relative`}>
          <br/>
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
