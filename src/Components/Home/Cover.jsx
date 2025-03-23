import React from "react";
import OverlyImg from '/src/assets/Frame 8(2).png'

export default function Cover() {
  return (
    <>
      <div className="hero bg-[#9538E2] rounded-b-xl max-w-7xl h-[500px] px-2 m-auto ">
        <div className="hero-content text-center lg:-mt-20">
          <div className="">
            <h1 className="lg:text-4xl text-2xll font-bold text-white lg:w-2/3 m-auto ">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-white lg:w-1/2 m-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="bg-white px-8 py-2 rounded-full font-medium text-[#9538E2]">
              Get Started
            </button>
          </div>
        </div>

        {/* overly image on the cover  */}
        <div className="flex items-center justify-center -mb-[590px]">
          <img className="lg:w-2/3" src={OverlyImg} alt="" />
        </div>
      </div>

      <div className="py-36 "></div>
    </>
  );
}
