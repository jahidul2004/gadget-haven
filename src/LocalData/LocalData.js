import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message) => toast(message);

// Get all data from local storage (wishlist)
const getAllData = () => {
    const allData = localStorage.getItem("wishData");
    if (allData) {
        return JSON.parse(allData);
    } else {
        return [];
    }
};

// Set data to local storage for wishlist
const setWishData = (data) => {
    const wishData = getAllData();
    const isExist = wishData.find((item) => item.product_id === data.product_id);

    if (isExist) {
        notify("Item already added to wishlist!!");
        return;
    } else {
        wishData.push(data);
        localStorage.setItem("wishData", JSON.stringify(wishData));
        notify("Item added to wishlist!");
    }
};

// Get all cart data
const getAllCartData = () => {
    const allData = localStorage.getItem("cartData");
    if (allData) {
        return JSON.parse(allData);
    } else {
        return [];
    }
};

// Set data to local storage for cart
const setCartData = (data) => {
    const cartData = getAllCartData();
    const isExist = cartData.find((item) => item.product_id === data.product_id);

    if (isExist) {
        notify("Item already added to cart!!");
        return;
    } else {
        cartData.push(data);
        localStorage.setItem("cartData", JSON.stringify(cartData));
        notify("Item added to cart!!");
    }
};

export { setWishData, setCartData, notify };
