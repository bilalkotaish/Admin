import DashboardBox from "../../Components/DashboardBoxs";
import { MdWavingHand } from "react-icons/md";
import { FcShop } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Badge from "../../Components/Badge";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../../Components/ProgressBar";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BiExport } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import { useContext } from "react";
import { Mycontext } from "../../App";

export default function Dashboard() {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const context = useContext(Mycontext);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [categoryfilter, setcategoryfilter] = useState("");

  const [chart1data, setchart1data] = useState([
    {
      name: "JAN",
      Totalusers: 4000,
      Totalsales: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      Totalusers: 3000,
      Totalsales: 1398,
      amt: 2210,
    },
    {
      name: "MARCH",
      Totalusers: 2000,
      Totalsales: 9800,
      amt: 2290,
    },
    {
      name: "APRIL",
      Totalusers: 2780,
      Totalsales: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      Totalusers: 1890,
      Totalsales: 4800,
      amt: 2181,
    },
    {
      name: "JUNE",
      Totalusers: 2390,
      Totalsales: 3800,
      amt: 2500,
    },
    {
      name: "JULY",
      Totalusers: 3490,
      Totalsales: 4300,
      amt: 2100,
    },
    {
      name: "AUG",
      Totalusers: 3490,
      Totalsales: 4300,
      amt: 2100,
    },
    {
      name: "SEP",
      Totalusers: 3490,
      Totalsales: 4300,
      amt: 2100,
    },
    {
      name: "OCT",
      Totalusers: 3490,
      Totalsales: 4300,
      amt: 2100,
    },
    {
      name: "NOV",
      Totalusers: 3490,
      Totalsales: 4300,
      amt: 2100,
    },
    {
      name: "DEC",
      Totalusers: 3490,
      Totalsales: 4300,
      amt: 2100,
    },
  ]);

  const handleChangeCatFilter = (event) => {
    setcategoryfilter(event.target.value);
  };

  const handleTogglePopup = (index) => {
    if (openPopupIndex === index) {
      setOpenPopupIndex(null);
    } else {
      setOpenPopupIndex(index);
    }
  };
  return (
    <>
      <div className="w-full p-5 !px-5 !py-2 border bg-[#f1faff] border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5">
        <div className="info ">
          <h1 className="text-[30px] font-[500] leading-10 mb-3">
            {" "}
            Good Morning, <br />
            Mr.Bilal{" "}
            <MdWavingHand className="rotate-270 !text-[#FFFF00] text-[35px] font-[500]" />{" "}
          </h1>
          <p>
            Here's What Happening In Your Store Today!! See The Analytics Now!
          </p>

          <Button
            onClick={() =>
              context.setisOpenPanel({ open: true, model: "Add Product" })
            }
            className="!bg-blue-600 !text-white !mt-3 w-[30%] gap-1 !items-center"
          >
            {" "}
            <FaPlus /> Add Products
          </Button>
        </div>
        <FcShop className="w-[250px] h-[250px] justify-right" />
      </div>

      <DashboardBox />

      <div className="card my-3 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-4 py-5">
          <h1 className="text-[18px] font-[600]">Products</h1>
        </div>

        <div className="flex items-center w-full pl-4 justify-between pr-6">
          <div className="col w-[20%]">
            <h4 className="font-[600] mb-3">Category By</h4>
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
          <div className="col w-full md:w-[25%] flex items-center gap-2">
            <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded whitespace-nowrap">
              Export <BiExport className="text-[20px] font-semibold" />
            </button>

            <button
              onClick={() =>
                context.setisOpenPanel({ open: true, model: "Add Product" })
              }
              className="flex items-center justify-center gap-2 pr-3 pl-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded whitespace-nowrap"
            >
              Add Product <FaPlus className="text-[15px] font-semibold" />
            </button>
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

      <div className="card my-3 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-4 py-5">
          <h1 className="text-[18px] font-[600]"> Your Orders</h1>
        </div>
        <div className="overflow-x-auto relative mt-5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">&nbsp;</th>
                <th className="px-6 py-3">Order Id</th>
                <th className="px-6 py-3">Payments</th>
                <th className="px-6 py-3">Products</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">UserId</th>
                <th className="px-6 py-3">Phone Number</th>
                <th className="px-6 py-3">Address</th>
                <th className="px-6 py-3">Total Amount</th>
                <th className="px-6 py-3">Pin Code</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-200">
                <td className="px-6 py-4">
                  <Button
                    onClick={() => handleTogglePopup(0)}
                    className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]"
                  >
                    {openPopupIndex === 0 ? (
                      <FaAngleUp className="text-gray-600 text-[16px]" />
                    ) : (
                      <FaAngleDown className="text-gray-600 text-[16px]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 text-primary font-[600]">1213</td>
                <td className="px-6 py-4">paypal</td>
                <td className="px-6 py-4">casual Shirt</td>
                <td className="px-6 py-4">Bilal kotaish</td>
                <td className="px-6 py-4 text-primary font-[600]">1213</td>
                <td className="px-6 py-4">78994740</td>
                <td className="px-6 py-4 w-[300px]">asdasdasdasdxczasdasd</td>
                <td className="px-6 py-4">1250$</td>
                <td className="px-6 py-4">0000</td>
                <td className="px-6 py-4">bilal@gmail.com</td>
                <td className="px-6 py-4">
                  <Badge status="Canceled" />
                </td>
                <td className="px-6 py-4">24-10-2023</td>
              </tr>

              <tr className="bg-white border-b border-gray-200">
                <td className="px-6 py-4">
                  <Button
                    onClick={() => handleTogglePopup(1)}
                    className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]"
                  >
                    {openPopupIndex === 1 ? (
                      <FaAngleUp className="text-gray-600 text-[16px]" />
                    ) : (
                      <FaAngleDown className="text-gray-600 text-[16px]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 text-primary !font-[600]">1213</td>
                <td className="px-6 py-4">paypal</td>
                <td className="px-6 py-4">casual Shirt</td>
                <td className="px-6 py-4">Bilal kotaish</td>
                <td className="px-6 py-4 text-primary font-[600]">1213</td>
                <td className="px-6 py-4">78994740</td>
                <td className="px-6 py-4 w-[300px]">asdasdasdasdxczasdasd</td>
                <td className="px-6 py-4">1250$</td>
                <td className="px-6 py-4">0000</td>
                <td className="px-6 py-4">bilal@gmail.com</td>
                <td className="px-6 py-4">
                  <Badge status="Canceled" />
                </td>
                <td className="px-6 py-4">24-10-2023</td>
              </tr>
            </tbody>
          </table>
        </div>

        {openPopupIndex === 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-4xl relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
                onClick={() => setOpenPopupIndex(null)}
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Product Id</th>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Quantity</th>
                      <th className="px-6 py-3">Price</th>
                      <th className="px-6 py-3">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-primary font-[600]">
                        1234
                      </td>
                      <td className="px-6 py-4 text-primary font-[600]">
                        Shirt
                      </td>
                      <td className="px-6 py-4">
                        <img
                          src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                          className="w-[40px] h-[50px] object-cover rounded-md"
                        />
                      </td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">25$</td>
                      <td className="px-6 py-4 text-primary font-[600]">25$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setOpenPopupIndex(null)}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {openPopupIndex === 1 && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-4xl relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
                onClick={() => setOpenPopupIndex(null)}
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Product Id</th>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Quantity</th>
                      <th className="px-6 py-3">Price</th>
                      <th className="px-6 py-3">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-primary font-[600]">
                        1234
                      </td>
                      <td className="px-6 py-4 text-primary font-[600]">
                        Shirt
                      </td>
                      <td className="px-6 py-4">
                        <img
                          src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                          className="w-[40px] h-[50px] object-cover rounded-md"
                        />
                      </td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">25$</td>
                      <td className="px-6 py-4 text-primary font-[600]">25$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setOpenPopupIndex(null)}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600] ">Total Users & Total Sales</h2>
        </div>
        <div className="flex items-center justify-start gap-4 px-5 py-5 pt-0">
          <span className="flex items-center gap-3">
            <span className="block w-[10px] h-[10px] rounded-full bg-green-600"></span>
            <span>Total Users</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="block w-[10px] h-[10px] rounded-full bg-orange-600"></span>
            <span>Total Sales</span>
          </span>
        </div>

        <LineChart
          width={1000}
          height={500}
          data={chart1data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Totalsales"
            stroke="#16a34a"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="Totalusers"
            stroke="#ea580c"
          />
        </LineChart>
      </div>
    </>
  );
}
