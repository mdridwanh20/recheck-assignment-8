import React from "react";
import errorPage from "../assets/error_404-removebg-preview (1).png";
import Navbar from "../Components/ShareCompo/Navbar";
import Footer from "../Components/ShareCompo/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import WhiteNav from "../Components/ShareCompo/WhiteNav";

export default function ErrorPage() {
  return (
    <div>
      <WhiteNav></WhiteNav>
      <Helmet title="Gadget-H | | Error Page"></Helmet>

      <div className="py-20 flex items-center flex-col">
        <img className="w-96" src={errorPage} alt="" />
        <Link to="/" className="bg-teal-600 py-2 rounded-md text-white px-3">Go back home</Link>
      </div>

      <Footer></Footer>
    </div>
  );
}
