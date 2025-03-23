import React from "react";

export default function Heading({ title, subTitle }) {
  return (
    <div className="flex  items-center justify-center flex-col space-y-2 px-2">
      <h1 className="text-white lg:text-4xl text-xl font-bold"> {title} </h1>
      <p className="text-white text-center w-full lg:w-1/2"> {subTitle} </p>
    </div>
  );
}
