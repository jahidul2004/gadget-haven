import { NavLink, useLoaderData } from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {
    return (
        <div>
            <div className="bg-[#9538e1] pb-48 relative mt-0 border border-[#9538e1]">
                {/* Heading text start */}
                <div className="text-center text-white my-5">
                    <h1 className="text-2xl md:text-5xl font-bold">
                        Upgrade Your Tech Accessorize with <br /> Gadget Heaven
                        Accessories
                    </h1>
                    <p className="font-semibold text-sm md:text-lg my-4">
                        Explore the latest gadgets that will take your
                        experience to the next level. <br />
                        From smart devices to the coolest accessories, we have
                        it all!
                    </p>
                    <NavLink to='/dashboard' className="btn bg-white text-[#9538e1] rounded-3xl">
                        Shop Now
                    </NavLink>
                </div>
                {/* Heading text end */}
                <div className="w-[90%] md:w-[60%] h-[300px] absolute top-[125%] bottom-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto border rounded-lg border-white">
                    <div className="w-full h-full p-4">
                        <img
                            className="w-full h-full rounded-lg"
                            src="https://i.ibb.co.com/CHp2Hdx/banner.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* Home Component start from here */}
            <Home></Home>
            {/* Home Component end here */}
        </div>
    );
};

export default Header;
