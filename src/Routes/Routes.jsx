import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Contact from "../Pages/Contact";
import Cart from "../Dashboard/Cart";
import Wishlist from "../Dashboard/Wishlist";
import ProductDetails from "../Components/All-Products/ProductDetails";




const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/productDetails/:productId",
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch("/Fake_Products.json")
            },
           

        ],
    },

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "wishlist",
                element: <Wishlist></Wishlist>
            },

           
        ]
    }



])

export default router