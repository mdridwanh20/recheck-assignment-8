import React from "react";
import Heading from "../Components/Heading/Heading";
import { Helmet } from "react-helmet";

export default function Statistics() {
  return (
    <div className="container m-auto px-3">

<Helmet title="Gadget-H | | Statistics"></Helmet>

      <div className="h-[400px]  container flex items-center justify-center m-auto bg-[#9538E2]">
        <div className="pt-16">
          <Heading
            title="Statistics"
            subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          ></Heading>
        </div>
      </div>

      <div className="py-16">
        <h1 className="font-bold text-3xl">Statistics</h1>
        <h1 className="font-bold text-xl lg:text-4xl py-2 text-[#9538E2] text-center">
          {" "}
          No Data to Show Statistics
        </h1>
      </div>
    </div>
  );
}
