import { useRef, useState } from "react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

export default function FileUploadBox(props) {
  return (
    <div
      className="uploadbox p-3 rounded-md overflow-hidden border-2 border-dashed border-[rgba(0,0,0,0.2)] h-[150px]
     w-[100%] bg-gray-100 cursor-pinter hover:bg-gray-300 flex items-center justify-center flex-col relative"
    >
      <MdOutlinePhotoSizeSelectActual className="text-[40px] opacity-45 pinter-events-none" />
      <h4>Image Upload</h4>
      <input
        type="file"
        multiple={props.multiple !== undefined ? props.multiple : false}
        className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
      />
    </div>
  );
}
