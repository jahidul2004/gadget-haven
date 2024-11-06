import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashCard from "../DashCard/DashCard";
import { notify } from "../../LocalData/LocalData";

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cartData")) || [];
        setCartData(data);
        calculateTotalPrice(data);
    }, []);

    const calculateTotalPrice = (data) => {
        const total = data.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    };

    const handleRemove = (productId) => {
        const updatedCart = cartData.filter(
            (item) => item.product_id !== productId
        );
        setCartData(updatedCart);
        localStorage.setItem("cartData", JSON.stringify(updatedCart));
        calculateTotalPrice(updatedCart);
    };

    const handleSortByPrice = () => {
        const sortedCart = [...cartData].sort((a, b) => b.price - a.price);
        setCartData(sortedCart);
    };

    const handlePurchase = () => {
        if (cartData.length === 0) {
            notify("Cart is empty!");
            return;
        }
        setIsModalOpen(true);
        setCartData([]);
        setTotalPrice(0);
        localStorage.removeItem("cartData");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/");
    };

    return (
        <div>
            <div className="bg-[#f2f2f2] p-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Cart</h1>
                    <div className="flex items-center gap-2 mb-5">
                        <h1 className="text-xl font-bold">
                            Total Cost: ${totalPrice.toFixed(2)}
                        </h1>
                        <button
                            onClick={handleSortByPrice}
                            className="btn rounded-3xl border border-[#9538e1]"
                        >
                            Sort By Price
                        </button>
                        <button
                            onClick={handlePurchase}
                            className="btn rounded-3xl bg-[#9538e1] text-white"
                        >
                            Purchase
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {cartData.map((item) => (
                        <DashCard
                            key={item.product_id}
                            data={item}
                            onRemove={() => handleRemove(item.product_id)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                        <img
                            className="m-auto"
                            src="https://i.ibb.co/WWwccY5/Group.png"
                            alt="Payment Successful"
                        />
                        <h2 className="text-2xl font-bold mb-4">
                            Payment Successful!
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Thanks for purchasing from us.
                        </p>
                        <button
                            onClick={closeModal}
                            className="bg-[#9538e1] text-white px-6 py-2 rounded-lg hover:bg-[#7a2eb5] transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
