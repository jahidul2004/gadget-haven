// get all data from local storage
const getAllData = () => {
    const allData = localStorage.getItem("wishData");
    if(allData){
        const wishesData = JSON.parse(allData);
        return wishesData;
    } else {
        return [];
    }
};

// Set data to local storage for wishlist
const setWishData = (data) => {
    const wishData = getAllData();
    const isExist = wishData.find((item) => item.product_id === data.product_id);

    if (isExist) {
        alert("Already added to wishlist");
        return;
    } else {
        wishData.push(data);
        localStorage.setItem("wishData", JSON.stringify(wishData));
    }
};

// Get all cart data
const getAllCartData = () => {
    const allData = localStorage.getItem("cartData");
    if (allData) {
        const cartData = JSON.parse(allData);
        return cartData;
    } else {
        return [];
    }
};

// Set data to local storage for cart
const setCartData = (data) => {
    const cartData = getAllCartData();
    const isExist = cartData.find((item) => item.product_id === data.product_id);

    if (isExist) {
        alert("Already added to cart");
        return;
    } else {
        cartData.push(data);
        localStorage.setItem("cartData", JSON.stringify(cartData)); // Save updated cart data to localStorage
    }
};

export { setWishData, setCartData };
