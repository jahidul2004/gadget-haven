import { useLoaderData } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
} from "recharts";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
    const data = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <div className="bg-[#9538e1] p-10 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Statistics</h1>
                <p className="font-semibold">Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="flex justify-center items-center my-10">
                <BarChart className="w-full" width={1200}  height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="price" fill="#9538e1" />
                    <Bar dataKey="rating" fill="#ff4d4d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;
