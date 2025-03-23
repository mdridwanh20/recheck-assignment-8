import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBack2Line } from "react-icons/ri";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);


  useEffect(() => {
    const storeWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storeWishlist);
  }, []);

  console.log(wishlist);


  // add to cart 

  const handlerAddToCart = () => {
    if (!wishlist) return;

    // Get cart data from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const isExist = cart.some((item) => item?.product_id === wishlist.product_id);
    if (isExist) {
      toast.error("Product already added to cart");
      return;
    }

    // Add new product
    cart.push(wishlist);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added product to cart");
  };



  // ✅ Remove item with confirmation
  const handlerRemove = (productId) => {
    toast(
      (t) => (
        <div className="flex items-center gap-3 justify-center">
          <p className="font-normal">Are you sure?</p>

          <div className="flex justify-end space-x-2">
            <button
              onClick={() => {
                const updatedCart = wishlist.filter(
                  (item) => item.product_id !== productId
                );
                setWishlist(updatedCart);
                localStorage.setItem("wishlist", JSON.stringify(updatedCart));

                toast.dismiss(t.id);
                toast.success("Item deleted successfully!");
              }}
              className="bg-red-500 cursor-pointer text-white px-3  rounded"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-green-400 px-3 cursor-pointer text-white  rounded"
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };


  



  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex ">
        <h1 className="font-bold text-2xl">Wishlist</h1>
      </div>

      {/* Map through wishlist and render each product */}
      <div>
        {wishlist.length > 0 ? (
          wishlist.map((product, index) => (
            <div
              key={index}
              className="shadow-md items-center justify-between flex  bg-white p-5 rounded-md space-x-2"
            >
              <div className="lg:flex items-center space-x-4">
                <img
                  className="border border-gray-300 rounded-md p-3 lg:w-32 lg:h-32 bg-white object-contain"
                  src={product.product_image}
                  alt={product.product_title}
                />

                <div className="my-5 space-y-3">
                  <h1 className="font-medium">{product.product_title}</h1>
                  <h1 className="">{product.description}</h1>
                  <p className="font-medium text-gray-500">
                    Price: ${product.price}
                  </p>

                  <button
                    onClick={()=> handlerAddToCart(product.product_id)}
                    className="bg-[#9538e2] text-white px-4 rounded-full py-1 cursor-pointer cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div onClick={() => handlerRemove(product.product_id)}>
                <RiDeleteBack2Line className="text-2xl text-red-600 cursor-pointer" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center font-medium">Your wishlist is empty</p>
        )}
      </div>
    </div>
  );
}
