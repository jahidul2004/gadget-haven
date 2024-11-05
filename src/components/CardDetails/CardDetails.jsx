import { space } from "postcss/lib/list";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const allData = useLoaderData();

    const [data, setData] = useState([]);

    useEffect(() => {
        const targetData = allData.find((item) => item.product_id == id);
        setData(targetData);
    }, []);

    const totalStars = 5;
    const hover = parseInt(data.rating);
    const rating = 0;
    const { id } = useParams();
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

            <div className="w-[60%] h-[420px] absolute top-[80%] bottom-[1%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto shadow-lg rounded-lg bg-white p-4 flex gap-4">
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
                            {[...Array(totalStars)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <span
                                        key={index}
                                        className={`cursor-pointer text-2xl ${
                                            starValue <= (hover || rating)
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }`}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        ★
                                    </span>
                                );
                            })}
                            ({data.rating})
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn rounded-3xl bg-[#9538e1] text-white">
                            Add to Cart{" "}
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className="btn rounded-full text-[#9538e1]">
                            <i class="fa-regular fa-heart text-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
