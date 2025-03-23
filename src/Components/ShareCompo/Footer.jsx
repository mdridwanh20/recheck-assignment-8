import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="py-16 my-10 bg-white">
        <div className="flex px-2 container m-auto border-b-2  border-gray-100 pb-10  items-center flex-col justify-center ">
          <h1 className="text-2xl font-bold">Gadget Heaven</h1>
          <p className="text-center">
            Leading the way in cutting-edge technology and innovation
          </p>
        </div>

        <footer className="footer gap-20 lg:flex justify-center  text-base-content p-10">
          <div className=" text-center flex flex-col ">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className=" text-center flex flex-col ">
            <h6 className="footer-title ">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className=" text-center flex flex-col ">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
