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
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Header />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: async () => {
                    const response = await fetch("/gadget.json");
                    const data = await response.json();
                    return Array.isArray(data) ? data : [];
                },
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "/dashboard/cart",
                        element: <Cart />,
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <WishList />,
                    },
                ],
            },
            {
                path: "/product/:id",
                element: <CardDetails />,
                loader: () => fetch("/gadget.json").then((res) => res.json()),
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </HelmetProvider>
    </StrictMode>
);
