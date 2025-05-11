import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { IoMdCloudUpload } from "react-icons/io";
import Select from "@mui/material/Select";
import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@mui/material/Button";

import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FileUploadBox from "../../Components/UploadBox";

export default function Addproduct() {
  const [Cat, setCat] = useState("");
  const [subCat, setsubCat] = useState("");
  const [subfet, setsubfet] = useState("");
  const [pram, setpram] = useState("");
  const [pweight, setpweight] = useState("");
  const [psize, setpsize] = useState("");

  const RamhandleChange = (event) => {
    setpram(event.target.value);
  };
  const sizehandleChange = (event) => {
    setpsize(event.target.value);
  };
  const weighthandleChange = (event) => {
    setpweight(event.target.value);
  };
  const FeaturedhandleChange = (event) => {
    setsubfet(event.target.value);
  };

  const handleChange = (event) => {
    setCat(event.target.value);
  };
  const handleChangesub = (event) => {
    setsubCat(event.target.value);
  };
  return (
    <>
      <section className="p-5 bg-gray-50">
        <form className="p-8 py-3 ">
          <div className="scroll max-h-[70vh] pr-4 overflow-y-scroll">
            <div className="grid grid-cols-1 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">Product Name</h3>
                <input
                  type="text"
                  className="w-full h-[35px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mb-3 gap-4">
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">
                  Product Description
                </h3>
                <textarea
                  type="text"
                  className="w-full h-[100px]  rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">
                  Product Category
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="ProductCat"
                  value={Cat}
                  className="w-full bg-white rounded-md h-[45px]"
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={null}>None</MenuItem>

                  <MenuItem value={10}>Fashion</MenuItem>
                  <MenuItem value={20}>Grocery</MenuItem>
                  <MenuItem value={30}>Electronics</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">
                  Product Sub Category
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="ProductsubCat"
                  value={subCat}
                  className="w-full bg-white rounded-md h-[45px]"
                  label="Category"
                  onChange={handleChangesub}
                >
                  <MenuItem value={null}>None</MenuItem>

                  <MenuItem value={10}>Fashion</MenuItem>
                  <MenuItem value={20}>Grocery</MenuItem>
                  <MenuItem value={30}>Electronics</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">Product Price</h3>
                <input
                  type="number"
                  className=" no-spinner w-full h-[45px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">
                  Product Old Price
                </h3>
                <input
                  type="number"
                  className=" no-spinner w-full h-[45px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">
                  Product Featured
                </h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="ProductsubCat"
                  value={subfet}
                  className="w-full bg-white rounded-md h-[45px]"
                  label="Category"
                  onChange={FeaturedhandleChange}
                >
                  <MenuItem value={null}>None</MenuItem>

                  <MenuItem value={10}>True</MenuItem>
                  <MenuItem value={20}>False</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">Product Stock</h3>
                <input
                  type="number"
                  className=" no-spinner w-full h-[45px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">Product Brand</h3>
                <input
                  type="text"
                  className=" no-spinner w-full h-[45px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">
                  Product Discount
                </h3>
                <input
                  type="number"
                  className=" no-spinner w-full h-[45px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">Product Rams</h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="Productram"
                  value={pram}
                  className="w-full bg-white rounded-md h-[45px]"
                  label="Category"
                  onChange={RamhandleChange}
                >
                  <MenuItem value={null}>None</MenuItem>

                  <MenuItem value={"4gb"}>4Gb</MenuItem>
                  <MenuItem value={"8gb"}>8Gb</MenuItem>
                  <MenuItem value={"12gb"}>12Gb</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">Product Weight</h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="Productweight"
                  value={pweight}
                  className="w-full bg-white rounded-md h-[45px]"
                  label="Category"
                  onChange={weighthandleChange}
                >
                  <MenuItem value={null}>None</MenuItem>

                  <MenuItem value={10}>1kg</MenuItem>
                  <MenuItem value={20}>2kg</MenuItem>
                  <MenuItem value={30}>3kg</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[16px] font-[600] mb-2">Product Size</h3>
                <Select
                  labelId="demo-simple-select-label"
                  id="Productweight"
                  value={psize}
                  className="w-full bg-white rounded-md h-[45px]"
                  label="Category"
                  onChange={sizehandleChange}
                >
                  <MenuItem value={null}>None</MenuItem>

                  <MenuItem value={"s"}>S</MenuItem>
                  <MenuItem value={"m"}>M</MenuItem>
                  <MenuItem value={"l"}>L</MenuItem>
                  <MenuItem value={"xl"}>XL</MenuItem>
                  <MenuItem value={"xxl"}>XXL</MenuItem>
                </Select>
              </div>
              <div className="col mt-1">
                <h3 className="text-[16px] font-[600] mb-4">Product Rating</h3>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
            </div>

            <div className="col w-full p-5 px-0">
              <h3 className="text-[22px] font-[600] mb-4"> Media & Publish</h3>

              <div className="grid grid-cols-6 gap-3">
                <div className="uploadboxwrapper relative">
                  <span className="absolute w-[24px] h-[24px] rounded-full overflow-hidden bg-red-700 -top-[5px] right-[24px] z-50">
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
          </div>
          <Button
            type="submit"
            className="!bg-primary !text-white items-center w-full !pr-2 gap-2 !pl-12"
          >
            <IoMdCloudUpload className="text-[25px] " /> Publish Product
          </Button>
        </form>
      </section>
    </>
  );
}
