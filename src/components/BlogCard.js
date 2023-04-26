import React from "react";
import Date from "./date";
function BlogCard({ ...props }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden">
        <img className="w-full h-52" src={props.img} alt="Sunset in the mountains"/>
        <div className="px-6 pt-4 divide-y">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {props.category}
          </span>
          
        </div>
        <div className="px-6 ">
          <div className="font-bold text-xl mb-2">{props.children}</div>
          <Date dateString={props.date}></Date>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
