import React, { useEffect, useState } from "react";

import Cover from "../Components/Home/Cover";
import axios from "axios";
import Products from "../Components/All-Products/Products";
import ProductsCard from "../Components/All-Products/ProductsCard";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet title="Gadget-H | | Home"></Helmet>

      <Cover></Cover>
      <Products></Products>
    </div>
  );
}
