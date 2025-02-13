import { Link } from "react-router-dom";

const Card = ({ data }) => {
    const { product_id, title, image, price } = data;

    return (
        <div className="bg-[#f7f7f7] p-4 rounded-lg">
            <div className="w-full h-[200px] bg-[#dadce2] rounded-lg">
                <img
                    className="w-full h-full rounded-lg object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <div>
                <h1 className="text-xl font-bold mt-3">{title}</h1>
                <p className="font-semibold mb-4 text-[#0000007c]">
                    Price: ${price}
                </p>
            </div>
            <Link
                to={`/product/${product_id}`}
                className="btn bg-[#9538e1] rounded-lg text-white"
            >
                View Details
            </Link>
        </div>
    );
};

export default Card;
