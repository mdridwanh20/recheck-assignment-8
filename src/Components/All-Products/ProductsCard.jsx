import React from "react";
import { NavLink } from "react-router-dom";

function ProductsCard({ product }) {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <div>
      <div className="shadow-xl bg-white p-3 rounded-md ">
        <img
          className="w-64 h-48 bg-white object-contain"
          src={product_image}
          alt=""
        />

        <div className="my-5">
          <h1 className="font-medium"> {product_title} </h1>
          <p className="font-medium text-gray-500"> Price: ${price} </p>

          <NavLink to={`/productDetails/${product_id}`}>
            <button className="my-2 font-medium hover:bg-[#9538E2] hover:text-white hover:transition-all hover:border-[#9538E2] text-[#9538E2] border border-blue-600 cursor-pointer px-4 py-1 rounded-full ">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
