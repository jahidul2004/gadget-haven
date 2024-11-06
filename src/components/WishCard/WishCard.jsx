import { setCartData } from "../../LocalData/LocalData";
import { notify } from "../../LocalData/LocalData";

const WishCard = ({ data, onRemove }) => {
    const { image, title, price, description } = data;
    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-max bg-white px-8 rounded-lg">
            <div className="h-full">
                <img className="h-[200px]" src={image} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="font-semibold my-2">{description}</p>
                <h1 className="font-semibold">${price}</h1>
                <button onClick={()=>{setCartData(data)}} className="btn mt-4 bg-[#9538e1] text-white rounded-3xl">
                    Add To Cart
                </button>
            </div>
            <div className="cursor-pointer">
                <i
                    onClick={()=>{
                        onRemove();
                        notify("Item remove successfully!!");
                    }}
                    className="text-error text-2xl fa-regular fa-circle-xmark"
                ></i>
            </div>
        </div>
    );
};

export default WishCard;
