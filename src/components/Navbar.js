import React from "react";
import Link from "next/link";
export function Navbar({}) {
  return (
    <>
      {" "}
      <nav class="fixed flex justify-center py-1 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10 bg-white">
        <div class="flex items-center mx-5 text-gray-500 hover:text-gray-600">
          <Link href="/blog">Blog</Link>
        </div>
        <div class="flex items-center mx-5">
          <Link href="/">
            <img src="images/homesynchub.png" alt="Logo" class="h-20 m-0" />
          </Link>
        </div>
        <div class="flex items-center mx-5 text-gray-500 hover:text-gray-600">
          <Link href="/products">Products</Link>
        </div>
      </nav>
      <div
        id="mobileNav"
        class="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down"
      >
        <div id="hideMenu" class="flex justify-end">
          <img src="dist/assets/logos/Cross.svg" alt="" class="h-16 w-16" />
        </div>
        <ul class="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
          <li class="my-6">
            <a href="howitworks">How it works</a>
          </li>
          <li class="my-6">
            <a href="features">Features</a>
          </li>
          <li class="my-6">
            <a href="pricing">Pricing</a>
          </li>
        </ul>
      </div>
    </>
  );
}
