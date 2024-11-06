import { notify } from "../../LocalData/LocalData";

const DashCard = ({ data, onRemove }) => {
    const { image, title, price, description } = data;
    return (
        <div className="flex flex-col md:flex-row gap-3 bg-white items-center h-max rounded-lg">
            <div className="w-full md:w-[25%]">
                <img className="h-[200px] w-full" src={image} alt="" />
            </div>
            <div className="w-[75%]">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="font-semibold">{description}</p>
                <p className="font-semibold">{price}$</p>
            </div>
            <div className="mr-5">
                <i
                    onClick={()=>{
                        onRemove();
                        notify("Item remove successfully!!");
                    }}
                    className="text-3xl text-error cursor-pointer fa-regular fa-circle-xmark"
                ></i>
            </div>
        </div>
    );
};

export default DashCard;
