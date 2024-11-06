import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All Products");

    useEffect(() => {
        fetch("/gadget.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setAllData(data);
            });
    }, []);

    const handleCategory = (category) => {
        setActiveCategory(category);

        if (category === "All Products") {
            setData(allData);
        } else {
            const filterData = allData.filter(
                (item) => item.category === category
            );
            setData(filterData);
        }
    };

    return (
        <div className="mt-32 px-10">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1 className="text-center text-4xl font-bold">
                Explore Cutting-Edge Gadgets
            </h1>
            <div className="grid mt-5 grid-cols-8 gap-4">
                <div className="col-span-2 rounded-lg">
                    <div className="bg-[#f7f7f7] p-5 flex flex-col gap-4 rounded-lg">
                        <span
                            onClick={() => handleCategory("All Products")}
                            className={`cursor-pointer text-[#0000009c] font-semibold p-4 rounded-3xl border border-[#9538e1] ${
                                activeCategory === "All Products"
                                    ? "bg-[#9538e1] text-white"
                                    : ""
                            }`}
                        >
                            All Products
                        </span>
                        <span
                            onClick={() => handleCategory("Phone")}
                            className={` cursor-pointer text-[#0000009c] font-semibold p-4 rounded-3xl border border-[#9538e1] ${
                                activeCategory === "Phone"
                                    ? "bg-[#9538e1] text-white"
                                    : ""
                            }`}
                        >
                            Phone
                        </span>
                        <span
                            onClick={() => handleCategory("Laptop")}
                            className={` cursor-pointer text-[#0000009c] font-semibold p-4 rounded-3xl border border-[#9538e1] ${
                                activeCategory === "Laptop"
                                    ? "bg-[#9538e1] text-white"
                                    : ""
                            }`}
                        >
                            Laptop
                        </span>
                        <span
                            onClick={() => handleCategory("Macbook")}
                            className={` cursor-pointer text-[#0000009c] font-semibold p-4 rounded-3xl border border-[#9538e1] ${
                                activeCategory === "Macbook"
                                    ? "bg-[#9538e1] text-white"
                                    : ""
                            }`}
                        >
                            Macbook
                        </span>
                    </div>
                </div>
                <div className="col-span-6 grid grid-cols-3 gap-6">
                    {data.map((item) => (
                        <Card key={item.product_id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
