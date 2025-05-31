import DashboardBox from "../../Components/DashboardBoxs";
import { MdWavingHand } from "react-icons/md";
import { FcShop } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Badge from "../../Components/Badge";
import { Link } from "react-router-dom";
import { Button, CircularProgress, Rating } from "@mui/material";
import { useEffect, useState } from "react";
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
import Product from "../Products";
import { deleteData, deleteMultiple, fetchData } from "../../utils/api";
import Searchbox from "../../Components/Searchbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdEye } from "react-icons/io";

export default function Dashboard() {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const context = useContext(Mycontext);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [Cat, setCat] = useState("");
  const [subCat, setsubCat] = useState("");
  const [thirdsubCat, setthirdsubCat] = useState("");
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [perPage, setPerPage] = useState(1);
  const [Sorting, setSorting] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const handleChange = (event) => {
    const selectedCat = event.target.value;
    setCat(selectedCat);
    setsubCat("");
    setthirdsubCat("");
    setLoading(true);

    fetchData(`/api/product/products/${selectedCat}`)
      .then((res) => {
        const safeData = Array.isArray(res?.data) ? res.data : [];
        setProduct(safeData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProduct([]); // fallback to empty list
        setLoading(false);
      });
  };

  const handleChangesub = (event) => {
    setsubCat(event.target.value);
    setthirdsubCat("");
    setCat("");

    setLoading(true);

    fetchData(`/api/product/productSub/${event.target.value}`)
      .then((res) => {
        const safeData = Array.isArray(res?.data) ? res.data : [];
        setProduct(safeData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProduct([]); // fallback to empty list
        setLoading(false);
      });
  };

  const handleChangethirdsub = (event) => {
    setsubCat("");
    setCat("");
    setLoading(true);
    setthirdsubCat(event.target.value);
    fetchData(`/api/product/productthirdSub/${event.target.value}`)
      .then((res) => {
        const safeData = Array.isArray(res?.data) ? res.data : [];
        setProduct(safeData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
        setProduct([]); // fallback to empty list
      });
  };

  useEffect(() => {
    fetchData("/api/product/products").then((res) => {
      console.log("Fetched Product data:", res);
      if (res.error === false) {
        setProduct(res.data);
      }
    });
  }, []);
  const getProducts = (page = 1, limit = perPage) => {
    setLoading(true);
    fetchData(`/api/product/products?page=${page}&perpage=${limit}`).then(
      (res) => {
        let productArr = [];
        if (res.error === false) {
          for (let i = 0; i < res.data.length; i++) {
            productArr[i] = res.data[i];
            productArr[i].checked = false;
          }
          console.log("Fetched Product data:", productArr);
          setProduct(productArr);
          setTotalPages(res.totalPages);
          setCurrentPage(res.currentPage);
          setLoading(false);
        } else {
          setLoading(false);
          context.Alertbox("error", res.message || "Failed to fetch products");
        }
      }
    );
  };
  const deleteMultiple = () => {
    if (Sorting.length > 0) {
      deleteMultiple("/api/product/deleteMultiple", {
        ids: Sorting,
      })
        .then((res) => {
          console.log("Deleting IDs:", Sorting);
          if (res.error === false) {
            context.Alertbox("success", "Product Deleted Successfully");
            getProducts();
          } else {
            context.Alertbox(
              "error",
              res.message || "Failed to delete product"
            );
          }
        })
        .catch((err) => {
          console.error("Delete failed:", err);
          context.Alertbox(
            "error",
            "An unexpected error occurred while deleting the product"
          );
        });
    }
  };
  const handleLimitChange = (event) => {
    const limit = parseInt(event.target.value);
    setPerPage(limit);
    getProducts(1, limit); // Reset to first page on limit change
  };

  useEffect(() => {
    getProducts(currentPage);
  }, []);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    getProducts(value, perPage);
  };
  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const updatedProducts = product.map((item) => ({
      ...item,
      checked: isChecked,
    }));
    setProduct(updatedProducts);
    console.log("Selected products:", updatedProducts);
    if (isChecked) {
      const ids = updatedProducts.map((item) => item._id).sort((a, b) => a - b);
      console.log("Selected product IDs:", ids);
      setSorting(ids);
    } else {
      setSorting([]);
    }
  };
  const handleDelete = (id) => {
    deleteData(`/api/product/${id}`)
      .then((res) => {
        if (res.error === false) {
          context.Alertbox("success", "Product Deleted Successfully");
          getProducts();
        } else {
          context.Alertbox("error", res.message || "Failed to delete product");
        }
      })
      .catch((err) => {
        console.error("Delete failed:", err);
        context.Alertbox(
          "error",
          "An unexpected error occurred while deleting the product"
        );
      });
  };
  const handlecheckboxChange = (e, id) => {
    const updatedProducts = product.map((item) =>
      item._id === id ? { ...item, checked: e.target.checked } : item
    );
    setProduct(updatedProducts);
    console.log("Selected products:", updatedProducts);
    if (e.target.checked) {
      const ids = updatedProducts
        .filter((item) => item.checked)
        .map((item) => item._id)
        .sort((a, b) => a - b);
      console.log("Selected product IDs:", ids);
      setSorting(ids);
    } else {
      setSorting([]);
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

      <div className="card my-3 shadow-md sm:rounded-lg bg-white pt-2">
        <div className="card mt-4 mb-6 shadow-lg sm:rounded-xl bg-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 border-b">
            <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4 px-2">
              <div className="w-full md:w-[150px]">
                <label className="text-sm font-semibold mb-2 block text-gray-700">
                  Filter By Category
                </label>
                {Array.isArray(context?.catData) &&
                  context.catData.length > 0 && (
                    <Select
                      labelId="demo-simple-select-label"
                      id="ProductCat"
                      name="productCat"
                      value={Cat}
                      className="w-full bg-white rounded-md h-[45px]"
                      label="Category"
                      onChange={handleChange}
                    >
                      {context.catData.map((cat, index) => (
                        <MenuItem key={index} value={cat._id}>
                          {cat.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
              </div>
              <div className="w-full md:w-[180px]">
                <label className="text-sm font-semibold mb-2 block text-gray-700">
                  Filter By Sub Category
                </label>
                {context.catData.length !== 0 && (
                  <Select
                    labelId="demo-simple-select-label"
                    id="ProductCat"
                    name="productCat"
                    value={subCat}
                    className="w-full bg-white rounded-md h-[45px]"
                    label="subCategory"
                    onChange={handleChangesub}
                  >
                    {context.catData.map((cat, index) =>
                      cat.children.map((subcat, index) => (
                        <MenuItem key={index} value={subcat._id}>
                          {subcat.name}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                )}
              </div>
              <div className="w-full md:w-[250px]">
                <label className="text-sm text-[12px] block font-semibold mb-2  text-gray-700">
                  Filter By Third Level Category
                </label>
                {context.catData.length !== 0 && (
                  <Select
                    labelId="demo-simple-select-label"
                    id="ProductCat"
                    name="productCat"
                    value={thirdsubCat}
                    className="w-full bg-white rounded-md h-[45px]"
                    label="subCategory"
                    onChange={handleChangethirdsub}
                  >
                    {context.catData.map((cat, index) =>
                      cat.children.map((subcat, index) =>
                        subcat.children.map((third, index) => (
                          <MenuItem key={index} value={third._id}>
                            {third.name}
                          </MenuItem>
                        ))
                      )
                    )}
                  </Select>
                )}
              </div>

              <div className="w-full md:w-[300px]">
                <label className="text-sm font-semibold  block text-gray-700">
                  Search
                </label>
                <Searchbox />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                <tr>
                  <th className="px-4 py-3">
                    <Checkbox
                      size="small"
                      {...label}
                      onChange={handleSelectAll}
                      checked={
                        product.length !== 0
                          ? product.every((item) => item.checked)
                          : false
                      }
                    />
                  </th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Subcategory</th>
                  <th className="px-4 py-3">Brand</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-1 py-2">Sales</th>
                  <th className="px-1 py-2">Rating</th>
                  <th className="px-4 py-3 min-w-[150px]">Actions</th>
                </tr>
              </thead>

              {Array.isArray(product) && product.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan={9} className="text-center py-6">
                      <p className="!text-sm !items-center text-center text-gray-500 my-4">
                        No products found for this category.
                      </p>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={9} className="text-center py-6">
                        <CircularProgress color="inherit" size={24} />
                      </td>
                    </tr>
                  ) : (
                    product.map((product) => (
                      <tr
                        key={product._id}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">
                          <Checkbox
                            {...label}
                            checked={product.checked === true}
                            onChange={(e) =>
                              handlecheckboxChange(e, product._id)
                            }
                            size="small"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-start gap-4 max-w-md">
                            <Link
                              to={`/product/${product._id}`}
                              className="w-[60px] h-[60px] flex-shrink-0 rounded-lg overflow-hidden border border-gray-200"
                            >
                              <LazyLoadImage
                                alt={product.name || "product"}
                                effect="blur"
                                className="w-full h-full object-cover"
                                src={
                                  product.images?.[0]?.url || "/placeholder.jpg"
                                }
                              />
                            </Link>
                            <div className="flex flex-col">
                              <Link to={`/product/${product._id}`}>
                                <h3 className="!text-[12px] font-semibold hover:text-primary line-clamp-2">
                                  {product.description || "N/A"}
                                </h3>
                              </Link>
                              <span className="text-xs text-gray-500 font-[600]">
                                {product.name}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">{product.category.name}</td>
                        <td className="px-4 py-3">{product.subcatname}</td>
                        <td className="px-4 py-3">{product.brand}</td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col">
                            <span className="line-through text-gray-400 text-xs">
                              ${product.oldprice || "0.00"}
                            </span>
                            <span className="text-green-600 font-bold text-sm">
                              ${product.price || "0.00"}
                            </span>
                          </div>
                        </td>
                        <td className="px-1 py-1">
                          <span className="font-semibold text-sm">
                            {product.sale} Sales
                          </span>
                          <ProgressBar type="warning" value={product.sale} />
                        </td>
                        <td className="px-1 py-1">
                          <Rating
                            name="half-rating-read"
                            defaultValue={product.rating}
                            precision={0.5}
                            readOnly
                          />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            {/* Edit Button */}

                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                              sx={{
                                minWidth: 32,
                                height: 32,
                                p: 0,
                                backgroundColor: "rgb(220 252 231)",
                                "&:hover": {
                                  backgroundColor: "rgb(187 247 208)",
                                },
                              }}
                              onClick={() =>
                                context.setisOpenPanel({
                                  open: true,
                                  model: "Edit Product",
                                  id: product._id,
                                })
                              }
                            >
                              <AiTwotoneEdit className="text-green-700 text-lg" />
                            </Button>

                            {/* View Button */}

                            <Button
                              size="small"
                              variant="contained"
                              color="primary"
                              component={Link}
                              to={`/product/${product._id}`}
                              sx={{
                                minWidth: 32,
                                height: 32,
                                p: 0,
                                backgroundColor: "rgb(219 234 254)",
                                "&:hover": {
                                  backgroundColor: "rgb(191 219 254)",
                                },
                              }}
                            >
                              <IoMdEye className="text-blue-700 text-lg" />
                            </Button>

                            <Button
                              size="small"
                              variant="contained"
                              color="error"
                              sx={{
                                minWidth: 32,
                                height: 32,
                                p: 0,
                                backgroundColor: "rgb(254 226 226)",
                                "&:hover": {
                                  backgroundColor: "rgb(254 202 202)",
                                },
                              }}
                              onClick={() => handleDelete(product._id)}
                            >
                              <MdOutlineDeleteOutline className="text-red-700 text-lg" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              )}
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
            <div className="w-full sm:w-auto">
              <label className="font-semibold text-[14px] mb-1 block">
                Items Per Page
              </label>
              <Select
                className="w-1/2 sm:w-[70px]"
                size="small"
                value={perPage}
                onChange={handleLimitChange}
              >
                <MenuItem value={1}>1</MenuItem>

                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </div>
            <Pagination
              count={totalPages}
              page={currentPage}
              color="primary"
              onChange={handlePageChange}
            />
          </div>
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
