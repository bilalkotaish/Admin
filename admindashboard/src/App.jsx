import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { createContext, useState } from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Product from "./Pages/Products";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import React from "react";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
import Addproduct from "./Pages/Products/Addproducts";
import HomeBanner from "./Pages/HomeSliderbanner";
import AddHomeSlider from "./Pages/HomeSliderbanner/Addhomeslider";
import CategoryList from "./Pages/Category";
import AddCategory from "./Pages/Category/addCategroy";
import SubCategoryList from "./Pages/Category/Subcatlist";
import AddSubCategory from "./Pages/Category/addSubCategroy";
import Users from "./Pages/Users";
import Orders from "./Pages/Orders";
import ForgetPassword from "./Pages/ForgetPass";
import Verify from "./Pages/Verify";
import ChangePassword from "./Pages/ChangePassword";
const Mycontext = createContext();
function App() {
  const [isSidebar, setisSidebar] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  const [isOpenPanel, setisOpenPanel] = useState({
    open: false,
    model: "",
  });

  const values = {
    setisSidebar,
    isSidebar,
    isLogin,
    setisLogin,
    isOpenPanel,
    setisOpenPanel,
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <section className="main">
            <Header />
            <div className="contentmain flex transition-all duration-300">
              <div
                className={`sidebarwrapper transition-all duration-300 overflow-hidden ${
                  isSidebar ? "w-[18%] px-4 py-2" : "w-0 px-0 py-0"
                }`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentright px-5 py-4 transition-all duration-300 ${
                  isSidebar === false ? "w-full" : "w-[82%]"
                }`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        ),
      },
      {
        path: "/login",

        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "/Signup",

        element: (
          <>
            {" "}
            <Signup />{" "}
          </>
        ),
      },
      {
        path: "/forgetpassword",

        element: (
          <>
            {" "}
            <ForgetPassword />{" "}
          </>
        ),
      },
      {
        path: "/verify",

        element: (
          <>
            {" "}
            <Verify />{" "}
          </>
        ),
      },
      {
        path: "/ChangePassword",

        element: (
          <>
            {" "}
            <ChangePassword />{" "}
          </>
        ),
      },
      {
        path: "/product",
        element: (
          <section className="main">
            <Header />
            <div className="contentmain flex transition-all duration-300">
              <div
                className={`sidebarwrapper transition-all duration-300 overflow-hidden ${
                  isSidebar ? "w-[18%] px-4 py-2" : "w-0 px-0 py-0"
                }`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentright px-5 py-4 transition-all duration-300 ${
                  isSidebar === false ? "w-full" : "w-[82%]"
                }`}
              >
                <Product />
              </div>
            </div>
          </section>
        ),
      },
      ,
      {
        path: "/homebanner/list",
        element: (
          <section className="main">
            <Header />
            <div className="contentmain flex transition-all duration-300">
              <div
                className={`sidebarwrapper transition-all duration-300 overflow-hidden ${
                  isSidebar ? "w-[18%] px-4 py-2" : "w-0 px-0 py-0"
                }`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentright px-5 py-4 transition-all duration-300 ${
                  isSidebar === false ? "w-full" : "w-[82%]"
                }`}
              >
                <HomeBanner />
              </div>
            </div>
          </section>
        ),
      },
      {
        path: "/Categorylist",
        element: (
          <section className="main">
            <Header />
            <div className="contentmain flex transition-all duration-300">
              <div
                className={`sidebarwrapper transition-all duration-300 overflow-hidden ${
                  isSidebar ? "w-[18%] px-4 py-2" : "w-0 px-0 py-0"
                }`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentright px-5 py-4 transition-all duration-300 ${
                  isSidebar === false ? "w-full" : "w-[82%]"
                }`}
              >
                <CategoryList />
              </div>
            </div>
          </section>
        ),
      },
      {
        path: "/SubCategory/list",
        element: (
          <section className="main">
            <Header />
            <div className="contentmain flex transition-all duration-300">
              <div
                className={`sidebarwrapper transition-all duration-300 overflow-hidden ${
                  isSidebar ? "w-[18%] px-4 py-2" : "w-0 px-0 py-0"
                }`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentright px-5 py-4 transition-all duration-300 ${
                  isSidebar === false ? "w-full" : "w-[82%]"
                }`}
              >
                <SubCategoryList />
              </div>
            </div>
          </section>
        ),
      },
      {
        path: "/users",
        element: (
          <section className="main">
            <Header />
            <div className="contentmain flex transition-all duration-300">
              <div
                className={`sidebarwrapper transition-all duration-300 overflow-hidden ${
                  isSidebar ? "w-[18%] px-4 py-2" : "w-0 px-0 py-0"
                }`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentright px-5 py-4 transition-all duration-300 ${
                  isSidebar === false ? "w-full" : "w-[82%]"
                }`}
              >
                <Users />
              </div>
            </div>
          </section>
        ),
      },
      {
        path: "/orders",
        element: (
          <section className="main">
            <Header />
            <div className="contentmain flex transition-all duration-300">
              <div
                className={`sidebarwrapper transition-all duration-300 overflow-hidden ${
                  isSidebar ? "w-[18%] px-4 py-2" : "w-0 px-0 py-0"
                }`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentright px-5 py-4 transition-all duration-300 ${
                  isSidebar === false ? "w-full" : "w-[82%]"
                }`}
              >
                <Orders />
              </div>
            </div>
          </section>
        ),
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );

  return (
    <Mycontext.Provider value={values}>
      <RouterProvider router={router} />
      <Dialog
        fullScreen
        open={isOpenPanel.open}
        onClose={() => setisOpenPanel({ open: false })}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setisOpenPanel({ open: false })}
              aria-label="close"
            >
              <IoMdClose />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {isOpenPanel?.model}
            </Typography>
          </Toolbar>
        </AppBar>
        {isOpenPanel.model === "Add Product" && <Addproduct />}
        {isOpenPanel.model === "AddBannerslider" && <AddHomeSlider />}
        {isOpenPanel.model === "Add Category" && <AddCategory />}
        {isOpenPanel.model === "Add SubCategory" && <AddSubCategory />}
      </Dialog>
    </Mycontext.Provider>
  );
}

export default App;
export { Mycontext };
