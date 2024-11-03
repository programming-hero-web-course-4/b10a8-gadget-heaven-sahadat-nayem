

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-200 text-black text-center">
                <h2 className="font-bold text-3xl pt-5"> Gadget Heaven</h2>
                <p className="text-gray-500 mt-3">Leading the way in cutting-edge technology and innovation</p>
            </div>
            <footer className="footer text-neutral-content p-10 bg-gray-200">
            <nav className="text-black">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="text-black">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="text-black">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        </div>
    );
};

export default Footer;