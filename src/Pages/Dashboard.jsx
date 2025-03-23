import React from "react";
import Heading from "../Components/Heading/Heading";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/ShareCompo/Navbar";
import Footer from "../Components/ShareCompo/Footer";
import WhiteNav from "../Components/ShareCompo/WhiteNav";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  return (
    <div>

    <WhiteNav></WhiteNav>
    <Helmet title="Gadget-H | | Dashboard"></Helmet>

      <section className="container m-auto ">

        <div className="h-[400px] px-2 mb-16 container flex flex-col items-center justify-center m-auto bg-[#9538E2]">


          <div>
            <div className="pt-16">
            <Heading
              title="Dashboard"
              subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            ></Heading>
          </div>

          <div className="py-3 flex items-center justify-center dashboardBtn">
            <NavLink
            to="/dashboard/cart"
              className="border mx-2 px-6 hover:bg-white hover:text-[#9538E2] hover:border-white text-white rounded-full py-1"
            >
              {" "}
              Cart{" "}
            </NavLink>

            <NavLink
            to="/dashboard/wishlist"
              className="border mx-2 px-6 hover:bg-white hover:text-[#9538E2] hover:border-white text-white rounded-full py-1"
            >
              {" "}
              Wishlist{" "}
            </NavLink>
          </div>
          </div>


        </div>

        <Outlet></Outlet>

      </section>

      <Footer></Footer>

    </div>
  );
}
