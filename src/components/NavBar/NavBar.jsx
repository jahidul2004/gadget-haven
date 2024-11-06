import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {

    const location = useLocation();

    const getNavbarColor = () => {
      if (location.pathname === '/') return 'bg-[#9538e1] text-white';
      if (location.pathname === '/statistics') return 'bg-white text-black';
      if (location.pathname === '/dashboard') return 'bg-white text-black';
      if (location.pathname === '/dashboard/cart') return 'bg-white text-black';
      if (location.pathname === '/dashboard/wishlist') return 'bg-white text-black';
      return 'bg-gray-500';
    };

    return (
        <div className={`${getNavbarColor()} navbar px-5`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
                    >
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">
                    Gadget Heaven
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex items-center">
                <div className="mr-3 cursor-pointer">
                    <i class="fa-solid border w-9 h-9 flex items-center justify-center rounded-full fa-cart-shopping text-xl"></i>
                </div>
                <div className="indicator cursor-pointer">
                    <i class="w-9 h-9 text-xl fa-regular fa-heart flex items-center justify-center border rounded-full"></i>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
