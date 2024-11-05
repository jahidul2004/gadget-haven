import { Link } from "react-router-dom";

const Card = ({ data }) => {
    const { product_id, title, image, price } = data;

    return (
        <div className="border p-4 rounded-lg">
            <div className="w-full h-[200px] bg-[#dadce2] rounded-lg">
                <img className="w-full h-full" src={image} alt={title} />
            </div>
            <div>
                <h1 className="text-xl font-bold mt-3">{title}</h1>
                <p className="font-semibold mb-4 text-[#0000007c]">Price: ${price}</p>
            </div>
            <Link
                to={`/product/${product_id}`}
                className="btn border-[#9538e1] rounded-3xl text-[#9538e1]"
            >
                View Details
            </Link>
        </div>
    );
};

export default Card;
