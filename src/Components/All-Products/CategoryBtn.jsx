import React from "react";
import { NavLink } from "react-router-dom";

export default function CategoryBtn({
  category,
  selectCategory,
  setSelectCategory,
}) {
  const isActive = selectCategory === category.category;

  return (

    <>
  

    <div>
      <NavLink
        onClick={() => setSelectCategory(category.category)}
        className={`py-2 px-5 rounded-full my-3 flex flex-col ${
          isActive ? "bg-[#9538E2] text-white" : "bg-gray-300 text-black"
        }`}
      >
        {category.category}
      </NavLink>
    </div>
    </>
  );
}
