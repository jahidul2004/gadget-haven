import { useState, useEffect } from "react";
import WishCard from "../WishCard/WishCard";

const WishList = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("wishData")) || [];
        setWishList(data);
    }, []);

    const handleRemove = (productId) => {
        const updatedWishList = wishList.filter((item) => item.product_id !== productId);
        setWishList(updatedWishList);
        localStorage.setItem("wishData", JSON.stringify(updatedWishList)); // Update localStorage
    };

    return (
        <div className="bg-[#f2f2f2] p-10">
            <h1 className="text-3xl font-bold my-5">WishList</h1>
            <div className="flex flex-col gap-5">
                {wishList.map((item) => (
                    <WishCard
                        key={item.product_id}
                        data={item}
                        onRemove={() => handleRemove(item.product_id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default WishList;
