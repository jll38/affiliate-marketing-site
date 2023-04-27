import React from "react";
import ScaleOnHover from "./ScaleOnHover";
import Link from "next/link";
function ProductCard(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <ScaleOnHover>
        <div className="max-w-xs h-[76] rounded overflow-hidden my-3">
          <img
            className="w-full px-6 max-h-52 max-h-fit aspect-square object-scale-down"
            src={props.img}
            alt={props.alt}
          />

          <div className="px-6">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
              {props.category}
            </span>
          </div>

          <div className="px-6">
            <div className="font-bold text-xl">{props.children}</div>
          </div>
          <div className="px-6">
            <div className="text-gray-500">
              {formatter.format(props.price !== undefined ? props.price : -1.0)}
            </div>
          </div>
        </div>
    </ScaleOnHover>
  );
}

export default ProductCard;
