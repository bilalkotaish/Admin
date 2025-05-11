import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa6";
import Select from "@mui/material/Select";
import { IoMdAdd } from "react-icons/io";
import { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { BiExport } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { Tooltip } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ProgressBar from "../../Components/ProgressBar";
import Searchbox from "../../Components/Searchbox";
import { Mycontext } from "../../App";

export default function Product() {
  const [categoryfilter, setcategoryfilter] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const context = useContext(Mycontext);
  const handleChangeCatFilter = (event) => {
    setcategoryfilter(event.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h1 className="text-[18px] font-[600]">Products</h1>
        <div className="col w-full md:w-[25%] flex items-center gap-2">
          <Button className="flex items-center justify-center gap-2 !bg-green-500 hover:bg-green-600 !text-white font-semibold py-2 px-4 rounded whitespace-nowrap">
            Export <BiExport className="text-[20px] font-semibold" />
          </Button>

          <Button
            onClick={() =>
              context.setisOpenPanel({ open: true, model: "Add Product" })
            }
            className="flex items-center justify-center gap-2 !bg-blue-500 hover:bg-blue-600 !text-white font-semibold py-2 px-4 rounded whitespace-nowrap"
          >
            Add Product <FaPlus className="text-[15px] font-semibold" />
          </Button>
        </div>
      </div>
      <div className="card my-3 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full pl-4 justify-between pr-6">
          <div className="col w-[20%]">
            <h4 className="font-[600] mb-3 mt-3">Category By</h4>
            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryfilter}
              onChange={handleChangeCatFilter}
              label="Filter"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Fashion</MenuItem>
              <MenuItem value={20}>Electronics</MenuItem>
              <MenuItem value={30}>Grocery</MenuItem>
            </Select>
          </div>
          <div className="col w-[20%] ml-auto">
            <Searchbox />
          </div>
        </div>

        <div className="mt-5">
          <table className="table-auto w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3 w-[60px]">
                  <Checkbox size="small" {...label} defaultChecked />
                </th>
                <th className="px-2 py-2">Product</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Subcategory</th>
                <th className="px-4 py-3">Brand</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-2 py-3">Sales</th>
                <th className="px-2 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-200">
                <td className="px-4 py-3">
                  <Checkbox {...label} size="small" defaultChecked />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-4 max-w-[300px]">
                    <div className="w-[55px] h-[55px] overflow-hidden rounded-md">
                      <Link to="/product/23">
                        <img
                          src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-[12px] font-[600] leading-4 hover:text-primary">
                        <Link to="/product/23">
                          Crafted for comfort and effortless sophistication.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Men Casual Shirt</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">Fashion</td>
                <td className="px-4 py-3">Men-Shirt</td>
                <td className="px-4 py-3">Zara</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-start gap-1">
                    <span className="line-through text-gray-500 text-[14px]">
                      58.00$
                    </span>
                    <span className="text-primary text-[14px] font-bold">
                      29.00$
                    </span>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <p className="text-[14px]">
                    <span className="font-[600]">234</span> Sale
                  </p>
                  <ProgressBar type="warning" value={30} />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1">
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                      <AiTwotoneEdit className="text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                      <MdOutlineDeleteOutline className="text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                      <IoEyeOutline className="text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="px-4 py-3">
                  <Checkbox {...label} size="small" defaultChecked />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-4 max-w-[300px]">
                    <div className="w-[55px] h-[55px] overflow-hidden rounded-md">
                      <Link to="/product/23">
                        <img
                          src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-[12px] font-[600] leading-4 hover:text-primary">
                        <Link to="/product/23">
                          Crafted for comfort and effortless sophistication.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Men Casual Shirt</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">Fashion</td>
                <td className="px-4 py-3">Men-Shirt</td>
                <td className="px-4 py-3">Zara</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-start gap-1">
                    <span className="line-through text-gray-500 text-[14px]">
                      58.00$
                    </span>
                    <span className="text-primary text-[14px] font-bold">
                      29.00$
                    </span>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <p className="text-[14px]">
                    <span className="font-[600]">234</span> Sale
                  </p>
                  <ProgressBar type="warning" value={30} />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1">
                    <Tooltip title="Edit" placement="top-start">
                      <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                        <AiTwotoneEdit className="text-[rgba(0,0,0,0.7)]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Delete" placement="top-start">
                      <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                        <MdOutlineDeleteOutline className="text-[rgba(0,0,0,0.7)]" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View" placement="top-start">
                      <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="px-4 py-3">
                  <Checkbox {...label} size="small" defaultChecked />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-4 max-w-[300px]">
                    <div className="w-[55px] h-[55px] overflow-hidden rounded-md">
                      <Link to="/product/23">
                        <img
                          src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-[12px] font-[600] leading-4 hover:text-primary">
                        <Link to="/product/23">
                          Crafted for comfort and effortless sophistication.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Men Casual Shirt</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">Fashion</td>
                <td className="px-4 py-3">Men-Shirt</td>
                <td className="px-4 py-3">Zara</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-start gap-1">
                    <span className="line-through text-gray-500 text-[14px]">
                      58.00$
                    </span>
                    <span className="text-primary text-[14px] font-bold">
                      29.00$
                    </span>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <p className="text-[14px]">
                    <span className="font-[600]">234</span> Sale
                  </p>
                  <ProgressBar type="warning" value={30} />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1">
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                      <AiTwotoneEdit className="text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                      <MdOutlineDeleteOutline className="text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !bg-[#f1f1f1]">
                      <IoEyeOutline className="text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center mt-4 mb-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
}
