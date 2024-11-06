const Footer = () => {
    return (
        <div className="mt-80 md:mt-40 bg-[#f7f7f7]">
            {/* Footer area start from here */}
            <footer className="footer footer-center text-black p-10">
                <aside>
                    <h1 className="text-4xl font-bold">Gadget Heaven</h1>
                    <p className="font-semibold">
                        Leading the way in cutting-edge technology and
                        innovation.
                    </p>
                </aside>
                <nav className="w-full border-t">
                    <div className="footer flex justify-evenly items-center text-black p-10">
                        <nav className="font-semibold">
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Product Support</a>
                            <a className="link link-hover">Order Tracking</a>
                            <a className="link link-hover">Shipping</a>
                            <a className="link link-hover">Return</a>
                        </nav>
                        <nav className="font-semibold">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Careers</a>
                        </nav>
                        <nav className="font-semibold">
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </div>
                </nav>
            </footer>
            {/* Footer area end here */}
        </div>
    );
};

export default Footer;
