import React from "react";

function Featured({ ...props }) {
  return (
    <div
      name="featured"
      className="flex flex-col flex-none w-52 mb-10 md:mb-0 lg:mb-0 flex-grow md:mr-10 rounded-lg overflow-hidden"
    >
      <h1 className="mt-5 mb-5 font-semibold text-3xl">Featured</h1>
      <img class="w-full h-3/4" src={props.img} alt={props.imgAlt} />
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
  );
}

export default Featured;
