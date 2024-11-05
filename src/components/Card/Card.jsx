
const Card = ({data}) => {
    const { title, image, price} = data;
    return (
        <div className="border p-4 rounded-lg">
            <div className="w-full h-[200px] bg-[#dadce2] rounded-lg">
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <div>
                <h1 className="text-xl font-bold mt-3">{title}</h1>
                <p className="font-semibold mb-4 text-[#0000007c]">price:{price}$</p>
            </div>
            <button className="btn border-[#9538e1] rounded-3xl text-[#9538e1]">View Details</button>
        </div>
    );
};

export default Card;