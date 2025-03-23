import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

export default function Navbar() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load Cart from Local Storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // wishlist
  useEffect(() => {
    const storeWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storeWishlist);
  }, []);

  console.log("this is wishlist", wishlist);
  console.log("this is cart", cartItems);

  return (
    <div className="fixed  m-auto w-full h-18 z-10">
      <nav className="bg-[#9538E2]  rounded-t-xl max-w-7xl m-auto py-1">
        <div className="navbar container m-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink
                  to="/"
                  className={`mx-1 px-4 rounded-sm py-1   text-base text-black`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/statistics"
                  className={`mx-1 px-4 rounded-sm py-1   text-base text-black `}
                >
                  Statistics
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={`mx-1 px-4 rounded-sm py-1  text-base  text-black`}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/contact"
                  className={`mx-1 px-4 rounded-sm py-1   text-base  text-black`}
                >
                  Contact
                </NavLink>
              </ul>
            </div>

            <Link to="/" className="font-bold text-white px-2 lg:text-2xl">
              Gadget-H
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <NavLink
                to="/"
                className={`mx-1 px-4 rounded-sm py-1 border border-gray-00 text-base text-white`}
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={`mx-1 px-4 rounded-sm py-1 border border-gray-00 text-base text-white `}
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashboard/cart"
                className={`mx-1 px-4 rounded-sm py-1 border border-gray-00 text-base  text-white`}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/contact"
                className={`mx-1 px-4 rounded-sm py-1 border border-gray-00 text-base  text-white`}
              >
                Contact
              </NavLink>
            </ul>
          </div>

          <div className="navbar-end ">
            <Link className="mr-4  bg-white rounded-full ">
              <button className="indicator cursor-pointer bg-white rounded-full p-2">
                <span className="indicator-item px-1 badge badge-secondary">
                  {/* {productDetails.length} */}
                  +{wishlist.length}
                </span>
                <FiShoppingCart></FiShoppingCart>
              </button>
            </Link>

            <Link className="mr-2  bg-white  rounded-full ">
              <button className="indicator cursor-pointer bg-white rounded-full p-2">
                <span className="indicator-item px-1 badge badge-secondary">
                  +{cartItems.length}
                </span>
                <FaRegHeart className=""></FaRegHeart>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
