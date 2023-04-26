import React from "react";
import Date from "./date";
import Divider from "./Divider";
import ScaleOnHover from "./ScaleOnHover";
function BlogCard({ ...props }) {
  return (
    <ScaleOnHover>
      <div className="max-w-sm h-80 rounded overflow-hidden my-3">
        <img
          className="w-full px-6 max-h-52"
          src={props.img}
          alt="Sunset in the mountains"
        />

        <div className="px-6">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
            {props.category}
          </span>
        </div>

        <div className="px-6">
          <div className="font-bold text-xl">{props.children}</div>
        </div>

        <div className="absolute bottom-0 px-6 mt-auto">
          <Date dateString={props.date}></Date>
        </div>
      </div>
    </ScaleOnHover>
  );
}

export default BlogCard;
