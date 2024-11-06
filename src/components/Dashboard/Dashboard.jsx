import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="bg-[#9538e1] p-10 text-center text-white pb-10 relative">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p>
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart <br />
                    devices to the coolest accessories, we have it all!
                </p>
                <div className="flex gap-3 justify-center mt-5">
                    <NavLink to='/dashboard/cart' className="btn rounded-3xl border px-8">Cart</NavLink>
                    <NavLink to='/dashboard/wishlist' className="btn rounded-3xl border px-8">WishList</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
