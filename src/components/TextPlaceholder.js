import React from "react";

function TextPlaceholder(props) {
  return (
    <div role="status" class="space-y-2.5 animate-pulse max-w-lg mb-4">
      <div class="flex items-center w-full space-x-2">
        <div class="h-2.5 bg-gray-200 rounded-full  w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-24"></div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-full"></div>
      </div>
      <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full  w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full  w-24"></div>
      </div>
    </div>
  );
}

export default TextPlaceholder;
