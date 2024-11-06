const DashCard = ({ data, onRemove }) => {
    const { image, title, price, description } = data;
    return (
        <div className="flex gap-3 bg-white items-center h-[200px] rounded-lg">
            <div className="w-[25%]">
                <img src={image} alt="" />
            </div>
            <div className="w-[75%]">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="font-semibold">{description}</p>
                <p className="font-semibold">{price}$</p>
            </div>
            <div className="mr-5">
                <i
                    onClick={onRemove}
                    className="text-3xl text-error cursor-pointer fa-regular fa-circle-xmark"
                ></i>
            </div>
        </div>
    );
};

export default DashCard;
