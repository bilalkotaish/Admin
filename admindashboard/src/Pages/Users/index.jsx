import { useContext, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import { SlCalender } from "react-icons/sl";

import Searchbox from "../../Components/Searchbox";
import { Mycontext } from "../../App";

export default function Users() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const context = useContext(Mycontext);
  const handleChangeCatFilter = (event) => {
    setcategoryfilter(event.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3"></div>
      <div className="card my-3 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full pl-4 justify-between pr-6">
          <h1 className="text-[25px] pt-12 font-[600]">Users List</h1>
          <div className="col w-[30%] ml-auto">
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
                <th className="px-2 py-2">UserImage</th>
                <th className="px-4 py-3">UserName</th>
                <th className="px-4 py-3">UserEmail</th>
                <th className="px-4 py-3">UserPhone</th>
                <th className="px-4 py-3">Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-200">
                <td className="px-4 py-3">
                  <Checkbox {...label} size="small" defaultChecked />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-4 max-w-[300px]">
                    <div className="w-[45px] h-[45px] overflow-hidden rounded-md">
                      <Link to="/product/23">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    Bilal Kotaish
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    Bilalkotaish@gmail.com
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    {" "}
                    <MdOutlinePhone />
                    78994740
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    {" "}
                    <SlCalender />
                    23-10-2024
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="px-4 py-3">
                  <Checkbox {...label} size="small" defaultChecked />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-4 max-w-[300px]">
                    <div className="w-[45px] h-[45px] overflow-hidden rounded-md">
                      <Link to="/product/23">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    Bilal Kotaish
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    Bilalkotaish@gmail.com
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    {" "}
                    <MdOutlinePhone />
                    78994740
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    {" "}
                    <SlCalender />
                    23-10-2024
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="px-4 py-3">
                  <Checkbox {...label} size="small" defaultChecked />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-4 max-w-[300px]">
                    <div className="w-[45px] h-[45px] overflow-hidden rounded-md">
                      <Link to="/product/23">
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    Bilal Kotaish
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    Bilalkotaish@gmail.com
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    {" "}
                    <MdOutlinePhone />
                    78994740
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex !items-center gap-2">
                    {" "}
                    <SlCalender />
                    23-10-2024
                  </span>
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
