import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBack2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isPurchased, setPurchase] = useState(false);

  // কার্ট ডাটা লোড করা
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const validCart = storedCart.filter(
      (item) => item && typeof item.price === "number"
    );
    setCartItems(validCart);
  }, []);

  // কার্টের মোট দাম গণনা
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + (item.price || 0), 0)
      .toFixed(2);
  };

  // পেমেন্ট সম্পন্ন করার হ্যান্ডলার
  const handlePurchase = () => {
    setPurchase(true);
    setCartItems([]);
    localStorage.removeItem("cart");
    document.getElementById("my_modal_5").showModal();
  };

  // দাম অনুযায়ী সর্ট করা
  const handlerSort = () => {
    const sortedItems = [...cartItems].sort((a, b) => {
      return sortOrder === "asc"
        ? (a.price || 0) - (b.price || 0)
        : (b.price || 0) - (a.price || 0);
    });
    setCartItems(sortedItems);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    toast.success("Successfully sorted by price");
  };

  // পণ্য রিমুভ করা
  const handlerRemove = (productId) => {
    toast(
      (t) => (
        <div className="flex items-center gap-3 justify-center">
          <p className="font-normal">Are you sure?</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => {
                const updatedCart = cartItems.filter(
                  (item) => item?.product_id !== productId
                );
                setCartItems(updatedCart);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                toast.dismiss(t.id);
                toast.success("Item deleted successfully!");
              }}
              className="bg-red-500 cursor-pointer text-white px-3 rounded"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-green-400 px-3 cursor-pointer text-white rounded"
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
    <div>
      <div className="grid lg:grid-cols-1 space-y-3 px-3 gap-5">
        <div className="lg:flex items-center justify-between">
          <h1 className="font-bold text-2xl">Cart</h1>

          <div className="space-x-4 lg:flex items-center">
            <h1 className="font-medium text-xl">
              Total cost: ${calculateTotal()}
            </h1>

            <button
              onClick={handlerSort}
              disabled={isPurchased}
              className={`px-5 py-2 rounded-full transition text-white ${
                isPurchased
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#9040ec] hover:bg-teal-600 cursor-pointer"
              }`}
            >
              Sort By Price
            </button>

            <button
              onClick={handlePurchase}
              disabled={isPurchased}
              className={`px-5 py-2 rounded-full transition text-white ${
                isPurchased
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#9040ec] hover:bg-teal-600 cursor-pointer"
              }`}
            >
              Purchase
            </button>
          </div>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((cart) => (
            <div
              key={cart.product_id}
              className="shadow-md items-center justify-between flex bg-white p-5 rounded-md space-x-2"
            >
              <div className="lg:flex items-center space-x-4">
                <img
                  className="border border-gray-300 rounded-md p-3 lg:w-32 lg:h-32 bg-white object-contain"
                  src={cart.product_image}
                  alt={cart.product_title}
                />
                <div className="my-5 space-y-3">
                  <h1 className="font-medium">{cart.product_title}</h1>
                  <h1>{cart.description}</h1>
                  <p className="font-medium text-gray-500">
                    Price: ${cart.price || "N/A"}
                  </p>
                </div>
              </div>
              <div onClick={() => handlerRemove(cart.product_id)}>
                <RiDeleteBack2Line className="text-2xl text-red-600 cursor-pointer" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center font-medium">Your cart is empty</p>
        )}
      </div>

      {/* Modal for Payment Success */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="bg-green-100 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm-1.293 13.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L11 12.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Payment Success Message */}
          <h3 className="font-bold text-xl mt-4">Payment Successfully</h3>
          <p className="text-gray-600 mt-2">Thanks for purchasing.</p>
          <p className="text-lg font-semibold mt-1">Total: ${calculateTotal()}</p>

          {/* Close Button */}
          <div className="modal-action w-full">
            <form method="dialog" className="w-full">
              <Link
                to="/"
                className="btn w-full bg-gray-200 text-black hover:bg-gray-300"
              >
                Close
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
