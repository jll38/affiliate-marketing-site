import React from "react";
import Link from "next/link";
function AmazonBox({ ...props }) {
  return (
    <div className="max-w-sm">
      <Link href={props.link} target={"_blank"}>
        <div className="h-12 border-solid border-black/10 border-2 bg-gray-200 text-gray-800 flex flex-row p-2 justify-around rounded-lg drop-shadow-md hover:bg-gray-200/50">
          <img src="https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695"></img>
          <div>Purchase on Amazon</div>
        </div>
      </Link>
    </div>
  );
}

export default AmazonBox;
