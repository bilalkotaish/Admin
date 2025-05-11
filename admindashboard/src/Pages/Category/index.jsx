import { Button, Pagination, Tooltip } from "@mui/material";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import { IoEyeOutline } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { Mycontext } from "../../App";
import { useContext } from "react";
export default function CategoryList() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const context = useContext(Mycontext);

  const banners = [
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
    },
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
    },
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
    },
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
    },
    {
      image:
        "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg",
    },
  ];

  return (
    <div className="card my-6 shadow-lg sm:rounded-xl bg-white border border-gray-100">
      <h2 className="px-6 py-4 text-xl font-semibold text-gray-800 ">
        Category List{" "}
      </h2>
      <div className="flex items-center justify-end gap-4 mt-4 mb-5 pr-4 px-2 py-0 mt-3">
        <Button className="flex items-center justify-center gap-2 !bg-green-500 hover:bg-green-600 !text-white font-semibold py-2 px-4 rounded whitespace-nowrap">
          Export <BiExport className="text-[20px] font-semibold" />
        </Button>

        <Button
          onClick={() =>
            context.setisOpenPanel({ open: true, model: "Add Category" })
          }
          className="flex items-center justify-center gap-2 !bg-blue-500 hover:bg-blue-600 !text-white font-semibold py-2 px-4 rounded whitespace-nowrap"
        >
          Add Category <FaPlus className="text-[15px] font-semibold" />
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 !justify-between uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 w-12">
                <Checkbox size="small" {...label} />
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3 pr-56 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="!justify-between">
            {banners.map((banner, idx) => (
              <tr
                key={idx}
                className="bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <Checkbox {...label} size="small" />
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={banner.image}
                      alt="Banner"
                      className="w-[80px] h-[100px] object-cover rounded-md shadow-sm hover:scale-105 border border-gray-200"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center pl-14">
                    <h1> Fashion</h1>
                  </div>
                </td>
                <td className="px-6 py-4 pr-44">
                  <div className="flex justify-end items-center space-x-2">
                    <Tooltip title="View" placement="top" arrow>
                      <Button
                        className="!min-w-[32px] !h-8 !p-0 !bg-blue-50 hover:!bg-blue-100 !rounded-md"
                        variant="text"
                      >
                        <IoEyeOutline className="text-blue-600 text-lg" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Edit" placement="top" arrow>
                      <Button
                        className="!min-w-[32px] !h-8 !p-0 !bg-green-50 hover:!bg-green-100 !rounded-md"
                        variant="text"
                      >
                        <AiTwotoneEdit className="text-green-600 text-lg" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top" arrow>
                      <Button
                        className="!min-w-[32px] !h-8 !p-0 !bg-red-50 hover:!bg-red-100 !rounded-md"
                        variant="text"
                      >
                        <MdOutlineDeleteOutline className="text-red-600 text-lg" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex !justify-end items-center px-6 py-4 border-t border-gray-200">
        <Pagination
          count={5}
          color="primary"
          shape="rounded"
          size="medium"
          className="[&_.MuiPaginationItem-root]:!rounded-md "
        />
      </div>
    </div>
  );
}
