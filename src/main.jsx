import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CardDetails from "./components/CardDetails/CardDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import Statistics from "./components/Statistics/Statistics";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Header></Header>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch("public/gadget.json"),
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard/cart",
                        element: <Cart></Cart>,
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <WishList></WishList>,
                    },
                ],
            },
            {
                path: "/product/:id",
                element: <CardDetails />,
                loader: () => fetch("public/gadget.json"),
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </StrictMode>
);
