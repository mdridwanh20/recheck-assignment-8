import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router, RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import {Helmet} from "react-helmet";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>

  </StrictMode>
);
