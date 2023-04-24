import React from "react";
import Link from "next/link";
export function Footer({}) {
  return <footer class="m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-800 sm:text-center dark:text-gray-400">
            {" "}
            <Link href="/" class="hover:underline">
              Home Sync Hub
            </Link>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/" class="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" class="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>;
}
  