import React from "react";

function Featured({ ...props }) {
  return (
    <>
      <div className="mb-10 md:mb-0 lg:mb-0 lg:w-auto shadow-md rounded-2xl bg-white overflow-hidden">
        <div className="max-w-xl ">
          <img className="w-full h-96" src={props.img} alt={props.imgAlt} />
          <div className="px-6 pt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 max-w-md">
              {props.category}
            </span>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2">{props.children}</div>
            <p className="text-gray-700 text-base">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
