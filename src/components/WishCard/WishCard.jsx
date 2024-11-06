const WishCard = ({ data, onRemove }) => {
    const { image, title, price, description } = data;
    return (
        <div className="flex justify-between items-center h-[250px] bg-white px-8 rounded-lg">
            <div className="h-full">
                <img className="h-full" src={image} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="font-semibold my-2">{description}</p>
                <h1 className="font-semibold">${price}</h1>
                <button className="btn mt-4 bg-[#9538e1] text-white rounded-3xl">
                    Add To Cart
                </button>
            </div>
            <div className="cursor-pointer">
                <i
                    onClick={onRemove}
                    className="text-error text-2xl fa-regular fa-circle-xmark"
                ></i>
            </div>
        </div>
    );
};

export default WishCard;
