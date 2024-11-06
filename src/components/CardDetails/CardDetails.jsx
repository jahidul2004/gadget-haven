import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setCartData, setWishData } from "../../LocalData/LocalData";

const CardDetails = () => {
    const allData = useLoaderData();
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [isInWishList, setIsInWishList] = useState(false);

    useEffect(() => {
        const targetData = allData.find((item) => item.product_id == id);
        setData(targetData);

        const storedWishList =
            JSON.parse(localStorage.getItem("wishlist")) || [];
        const isAlreadyInWishList = storedWishList.some(
            (item) => item.product_id === id
        );
        setIsInWishList(isAlreadyInWishList);
    }, [id, allData]);

    const handleWish = () => {
        if (!isInWishList) {
            setWishData(data);
            setIsInWishList(true);
        } else {
            setIsInWishList(false);
        }
    };

    const handleCart = () => {
        setCartData(data);
    };

    return (
        <div>
            <div className="bg-[#9538e1] p-10 text-center text-white pb-72 relative">
                <h1 className="text-5xl font-bold">Product Details</h1>
                <p className="text-semibold">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices <br /> to the coolest
                    accessories, we have it all!
                </p>
            </div>

            <div className="w-[60%] min-h-[420px] absolute top-[80%] bottom-[1%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto shadow-lg rounded-lg bg-white p-4 flex gap-4">
                <div className="w-[35%] bg-[#f1f2f2] h-full rounded-lg">
                    <img className="w-full h-full" src={data.image} alt="" />
                </div>
                <div className="w-[65%]">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <p className="mb-3 font-semibold">Price:{data.price}$</p>
                    <span
                        className={`${
                            data.availability
                                ? "border font-semibold text-success border-success rounded-3xl px-2 py-1"
                                : "border border-error text-error font-semibold rounded-3xl px-2 py-1"
                        }`}
                    >{`${
                        data.availability ? "In Stock" : "Out of Stock"
                    }`}</span>
                    <p className="my-2">{data.description}</p>
                    <div>
                        <p className="font-bold">Specification</p>
                        <ol className="list-decimal list-inside">
                            {data.specification &&
                                data.specification.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                        </ol>
                    </div>
                    <div>
                        <p className="font-bold">Rating</p>
                        <div className="flex items-center space-x-2">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <span
                                        key={index}
                                        className={`cursor-pointer text-2xl ${
                                            starValue <= (data.rating || 0)
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        ★
                                    </span>
                                );
                            })}
                            ({data.rating})
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleCart}
                            className="btn rounded-3xl bg-[#9538e1] text-white"
                        >
                            Add to Cart{" "}
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button
                            onClick={handleWish}
                            className={`btn rounded-full ${
                                isInWishList
                                    ? "bg-[#9538e1] text-white"
                                    : "text-[#9538e1]"
                            } `}
                            disabled={isInWishList}
                        >
                            <i
                                className={`fa-regular fa-heart text-lg ${
                                    isInWishList ? "text-white" : ""
                                }`}
                            ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
