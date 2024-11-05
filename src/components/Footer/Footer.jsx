const Footer = () => {
    return (
        <div className="mt-32">
            {/* Footer area start from here */}
            <footer className="footer footer-center text-black p-10">
                <aside>
                    <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                    <p className="font-semibold">
                        Leading the way in cutting-edge technology and
                        innovation.
                    </p>
                </aside>
                <nav className="w-full border-t">
                    <div className="footer flex justify-evenly items-center text-black p-10">
                        <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
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
