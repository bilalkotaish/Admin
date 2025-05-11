import { Button } from "@mui/material";
import { CgLogIn } from "react-icons/cg";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function ChangePassword() {
  const [isShowPass, setisShowPass] = useState(false);
  const [isShowPass1, setisShowPass1] = useState(false);

  return (
    <section className="relative bg-white loginsection">
      <header className="w-full fixed z-50 !top-0 !left-0 px-4 py-2 flex !items-center !justify-between">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-W8dn-tap14EaxWD27PkQcQVMzdoxozotA&s"
            className="w-[200px]"
            alt="Logo"
          />
        </Link>

        <div className="flex items-center gap-0">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 gap-2">
              <CgLogIn className="!text-[20px]" /> Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] px-4 gap-2">
              <MdOutlineFollowTheSigns className="!text-[20px]" /> Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src="https://www.ledr.com/colours/white.jpg"
        className="absolute w-full h-full top-0 left-0 object-cover opacity-30 z-10"
      />

      <div className="loginbox card w-[550px] h-[auto] pb-20 mx-auto pt-2 relative z-50   ">
        <div className="text-center ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-W8dn-tap14EaxWD27PkQcQVMzdoxozotA&s"
            className=" mx-auto"
            alt="Logo"
          />
        </div>
        <h1 className="text-center text-[35px] font-[700]">
          Please Change Your Password
        </h1>

        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-[100px] h-[2px] bg-slate-300"></span>
          <span className="text-[13px]"> Or Sign In With Your Email</span>
          <span className="flex items-center w-[100px] h-[2px] bg-slate-300"></span>
        </div>

        <form className="w-full px-8">
          <div className="w-full form-group mb-4">
            <h4>New Password</h4>
            <div className="relative w-full">
              <input
                type={isShowPass1 === true ? "text" : "password"}
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] 
              focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[7px] right-[7px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px]"
                onClick={() => setisShowPass1(!isShowPass1)}
              >
                {isShowPass1 === false ? (
                  <FaEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>
          <div className="w-full form-group mb-4">
            <h4>Confirm Password</h4>
            <div className="relative w-full">
              <input
                type={isShowPass === true ? "text" : "password"}
                className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] 
              focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[7px] right-[7px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px]"
                onClick={() => setisShowPass(!isShowPass)}
              >
                {isShowPass === false ? (
                  <FaEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>
          <div className="w-full form-group mb-4 flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
            <Link
              to="/forgetpassword"
              className="text-[14px] text-primary font-[600] hover:underline hover:text-[rgba(0,0,0,0.7)]"
            >
              Forgot Password?
            </Link>
          </div>
          <Link to="/login">
            <Button className=" !bg-black !text-white w-full">
              {" "}
              Reset Your Password
            </Button>
          </Link>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}
