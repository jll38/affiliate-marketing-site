import React from "react";

function BlogCard({ ...props }) {
  return (
    <>
      <div class="max-w-xs rounded overflow-hidden shadow-lg">
        <img class="w-full h-52" src={props.img} alt="Sunset in the mountains"/>
        <div class="px-6 pt-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {props.category}
          </span>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.children}</div>
          <p class="text-gray-700 text-base">{props.date}</p>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
