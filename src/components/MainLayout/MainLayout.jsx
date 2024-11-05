import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
    return (
        <div>
            {/* Header start */}
            <NavBar></NavBar>
            {/* Header end */}

            {/* Gadget start */}
            <div>
                <Outlet>
                </Outlet>
            </div>
            {/* Gadget end */}

            {/* Footer start */}
            <Footer></Footer>
            {/* Footer end */}
        </div>
    );
};

export default MainLayout;
