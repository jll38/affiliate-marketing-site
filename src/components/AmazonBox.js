import React from "react";
import Link from "next/link";
function AmazonBox(link) {
  return (
    <Link href={link}>
      <div className="w-80 h-12 border-solid border-black/10 border-2 bg-gray-200 text-gray-800 flex flex-row p-2 justify-around rounded-lg drop-shadow-md">
        <img src="https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695"></img>
        <div>Purchase on Amazon</div>
      </div>
    </Link>
  );
}

export default AmazonBox;
