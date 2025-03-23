import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Heading from "../Heading/Heading";

import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { productId } = useParams();
  const id = parseInt(productId);
  const data = useLoaderData();

  // Find product safely
  const product = data?.find((product) => product.product_id === id) || null;

  // If product is not found, show a message
  if (!product) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <p>The requested product does not exist.</p>
        <NavLink to="/" className="text-blue-500 underline">
          Go Back to Home
        </NavLink>
      </div>
    );
  }

  // Add to cart function
  const handlerAddToCart = () => {
    if (!product) return;

    // Get cart data from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const isExist = cart.some((item) => item?.product_id === product.product_id);
    if (isExist) {
      toast.error("Product already added to cart");
      return;
    }

    // Add new product
    cart.push(product);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added product to cart");
  };

  
  // Add to wishlist function
  const handlerAddToWishlist = () => {
    if (!product) return;

    // Get wishlist data from local storage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if the product is already in the wishlist
    const isExist = wishlist.some((item) => item?.product_id === product.product_id);
    if (isExist) {
      toast.error("Product already added to wishlist");
      return;
    }

    // Add new product
    wishlist.push(product);

    // Update local storage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Added product to wishlist");
  };



  return (
    <>
      <div className="h-[463px] container m-auto bg-[#9538E2]">
        <div className="pt-24 pb-10">
          <Heading
            title="Product Details"
            subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          />
        </div>

        <div className="bg-white flex items-center justify-center max-w-5xl rounded-2xl shadow-md p-10 m-auto">
          <div className="lg:flex justify-center gap-8">
            <div className="flex lg:w-1/2 items-center justify-center pb-10 lg:pb-0">
              <img
                className="lg:w-[600px] lg:h-[400px] object-cover"
                src={product.product_image}
                alt={product.product_title}
              />
            </div>

            <div className="lg:w-2/3 space-y-3">
              <div>
                <h1 className="font-bold text-2xl">{product.product_title}</h1>
                <h1 className="font-medium text-gray-500">
                  Price: ${product.price}
                </h1>
              </div>

              <button className="bg-green-200 px-4 py-1 my-2 rounded-full border-2 border-green-500">
                In Stock
              </button>
              <p>{product.description}</p>

              <div>
                <h2 className="font-semibold">Specification:</h2>
                <ul className="ms-3">
                  {Array.isArray(product.specification) && product.specification.length > 0 ? (
                    product.specification.map((specific, index) => (
                      <li key={index}>
                        {index + 1}. {specific}
                      </li>
                    ))
                  ) : (
                    <p>No specifications available.</p>
                  )}
                </ul>
              </div>

              <div>
                <h1 className="font-semibold text-lg">Rating: {product.rating}</h1>
              </div>

              <div className="flex items-center">
                <div>
                  <button
                    onClick={handlerAddToCart}
                    className="mr-2 px-5 py-2 cursor-pointer border font-medium text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-white transition-all rounded-full"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={handlerAddToWishlist}
                    className="text-[20px] cursor-pointer hover:bg-[#9538e2] hover:text-white text-[#9538e2] border border-[#9538e2] rounded-full p-2"
                  >
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-36"></div>
    </>
  );
}
