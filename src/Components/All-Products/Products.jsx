import React, { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";
import ProductsCard from "./ProductsCard";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  // categories data here
  useEffect(() => {
    fetch("/Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))

      .catch((error) => {
        console.log("this categories loaded data", error);
      });
  }, []);

  // products data here
  useEffect(() => {
    fetch("/Fake_Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))

      .catch((error) => {
        console.log("this products loaded data", error);
      });
  }, []);

  const filterCategory = selectCategory
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === selectCategory.toLowerCase()
      )
    : products;

  return (
    <div className="grid lg:grid-cols-12 container m-auto gap-10">
      {/* this is category button all here  */}
      <div className="lg:col-span-2 px-3">
        <div className="">
          <NavLink
            onClick={() => setSelectCategory("")}
            className={` ${
              selectCategory === ""
                ? "bg-[#9538E2] text-white"
                : "bg-gray-300 text-black"
            } py-2 cursor-pointer w-full text-start text-black px-5 rounded-full my-3 flex flex-col`}
          >
            ALL Products
          </NavLink>
        </div>

        {categories.map((category) => (
          <CategoryBtn
            key={category.id}
            category={category}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          ></CategoryBtn>
        ))}
      </div>

      {/* this is products  */}

      <div className="lg:col-span-10 px-3">
        <div className="grid lg:grid-cols-3 gap-5">
          {filterCategory.length > 0 ? (
            filterCategory.map((product) => (
              <ProductsCard
                key={product.product_id}
                product={product}
              ></ProductsCard>
            ))
          ) : (
            <p className=" text-center py-5 text-[#9538E2] text-xl font-semibold">
              No Data found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
