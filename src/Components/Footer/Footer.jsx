import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-base-300 text-base-content p-10 mt-40 flex flex-col items-center">
        <div className="flex flex-col items-center text-center justify-center">
            <h6 className="font-bold mt-10 text-3xl">Gadget Heaven</h6>
            <p className="text-gray-500 text-sm">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className="border-t border-gray-400 opacity-90 w-3/4 mx-auto" />
            <div className="w-full flex flex-wrap justify-around ">
            <nav className="flex flex-col items-center">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
            </nav>
            
            <nav className="flex flex-col items-center">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
            </nav>
            
            <nav className="flex flex-col items-center">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
            </nav>
        </div>
        </footer>

    );
};

export default Footer;

