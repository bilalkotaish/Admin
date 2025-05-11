import { IoMdCloudUpload } from "react-icons/io";
import { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function AddSubCategory() {
  const [Cat, setCat] = useState("");
  const [subCat, setsubCat] = useState("");
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
          <div className="grid grid-cols-2  mb-3 gap-4">
            <div className="col ">
              <h3 className="text-[16px] font-[600] mb-2">Product Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="ProductCat"
                value={Cat}
                className="w-full bg-white !rounded-full h-[43px]"
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={null}>None</MenuItem>

                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Grocery</MenuItem>
                <MenuItem value={30}>Electronics</MenuItem>
              </Select>
            </div>
            <div className="col w-[full]">
              <h3 className="text-[16px] font-[600] mb-2">Sub Category Name</h3>
              <input
                type="text"
                className="w-full h-[35px] rounded-full p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="!bg-primary !text-white items-center mt-4 w-full !pr-2 gap-2 !pl-12"
          >
            <IoMdCloudUpload className="text-[25px] " /> Publish Sub Category
          </Button>
        </form>
      </section>
    </>
  );
}
