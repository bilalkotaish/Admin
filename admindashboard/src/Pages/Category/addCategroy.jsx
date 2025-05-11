import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdCloudUpload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import FileUploadBox from "../../Components/UploadBox";
import Button from "@mui/material/Button";

export default function AddCategory() {
  return (
    <>
      <section className="p-5 bg-gray-50">
        <form className="p-8 py-3 ">
          <div className="grid grid-cols-1 mb-3 gap-4">
            <div className="col w-[34%]">
              <h3 className="text-[16px] font-[600] mb-2">Category Name</h3>
              <input
                type="text"
                className="w-full h-[35px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
          <div className="scroll max-h-[75vh] pr-4 overflow-y-scroll">
            <div className="col w-full p-5 px-0">
              <h3 className="text-[18px] font-[600] mb-0"> Category Image</h3>
            </div>
            <div className="grid grid-cols-6 pb-4 gap-3">
              <div className="uploadboxwrapper relative">
                <span className="absolute w-[24px] h-[24px] rounded-full overflow-hidden bg-red-700 -top-[10px] right-[24px] z-50">
                  <IoCloseSharp className="text-white text-[24px]" />
                </span>
                <div
                  className="uploadbox p-0 rounded-md overflow-hidden border-2 border-dashed border-[rgba(0,0,0,0.2)] h-[150px]
                 w-[180px] bg-gray-100 cursor-pinter hover:bg-gray-300 flex items-center justify-center flex-col relative"
                >
                  <LazyLoadImage
                    alt={"image"}
                    effect="blur"
                    className="w-full h-full object-cover"
                    src={
                      "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                    }
                  />
                </div>
              </div>
              <FileUploadBox multiple={true} />
            </div>
          </div>
          <Button
            type="submit"
            className="!bg-primary !text-white items-center mt-4 w-full !pr-2 gap-2 !pl-12"
          >
            <IoMdCloudUpload className="text-[25px] " /> Publish Product
          </Button>
        </form>
      </section>
    </>
  );
}
