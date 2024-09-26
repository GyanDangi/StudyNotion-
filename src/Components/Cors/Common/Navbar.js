import React, { useEffect, useState } from "react";
import logo from "../../../assets/Logo/Logo-Full-Light.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";

// import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import CTAButton from "../HomePage/Button";
import { matchPath, NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";

import { NavbarLinks } from "../../../data/navbar-links";
import { useSelector } from "react-redux";
import { apiConnector } from "../../../services/apiConnector";
import { categories } from "../../../services/apis";
const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSublinks]= useState([]);

  // const subLinks = [
  //   {
  //     title: "python",
  //     link: "/catalog/python",
  //   },
  //   {
  //     title: "web dev",
  //     link: "/catalog/web-development",
  //   },
  // ];

   const fetchSublinks= async() =>{
    try {
      const result = await apiConnector("GET",categories.CATEGORIES_API);
      
      // console.log("Printing sublinks data",result);
      setSublinks(result.data.data);
    } catch (error) {
      console.log("Unable to fetch the categories");
    }
  }

   useEffect (() =>{

    fetchSublinks();

   },[])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="border-b-[2px] border-richblack-800 ">
      <div className="w-11/12 max-w-maxContent mx-auto  flex flex-col py-2 ">
        <div className=" flex flex-row justify-between items-center">
          <NavLink to="/">
            <img className="h-[32px]" src={logo} alt="logo" loading="lazy" />
          </NavLink>
          <div className=" flex flex-row gap-5 justify-center items-center text-richblack-50">
            {NavbarLinks.map((link, index) => (
              <div key={index}>
                {link.title === "Catalog" ? (
                  <div className=" relative group items-center flex flex-row gap-1">
                    <p className=" group-hover:text-yellow-25">{link.title}</p>
                    <IoIosArrowDropdownCircle className="group-hover:text-yellow-25" />

                    <div className=" invisible opacity-0 flex flex-col text-black bg-white w-[200px] absolute left-[50%] top-[50%]  rounded-md group-hover:visible group-hover:opacity-100  text-center translate-x-[-50%] transition-all duration-200 translate-y-[30%] ">
                      <div className=" w-6 h-6 absolute top-[-35%] -z-10 translate-y-[65%] translate-x-[75%] left-[50%] bg-white rotate-45"></div>
                    {subLinks.length ? (
                      subLinks.map((sublink, index) => (
                        <NavLink key={index} to={sublink.link}>
                          <p>{sublink.name}</p>
                        </NavLink>
                      ))
                    ) : (
                      <div>No category</div>
                    )}
                    </div>

                  </div>
                ) : (
                  <NavLink to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? " text-yellow-25"
                          : " text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className=" flex flex-row gap-3 items-center text-richblack-50">
              {user && user?.accountType !== "Instructor" && (
                <NavLink>
                  <FaShoppingCart className="hover:text-caribbeangreen-200 hover:scale-110" />
                  {totalItems > 0 && <span>{totalItems}</span>}
                </NavLink>
              )}

              {token === null && (
                <CTAButton active={false} linkto={"/login"}>
                  Login
                </CTAButton>
              )}

              {token === null && (
                <CTAButton active={false} linkto={"/signup"}>
                  Sign up
                </CTAButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
