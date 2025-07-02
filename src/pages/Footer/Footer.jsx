import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';
import athLogo from '../../assets/ath-logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-base-300 text-base-content">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
                {/* Logo */}
                <aside className="flex justify-center sm:justify-start">
                    <Link to="/" className="flex items-center gap-2">
                        <img className="w-20 h-auto rounded bg-white p-1 dark:bg-white" src={athLogo} alt="Athletic Hub Logo" />
                    </Link>
                </aside>

                {/* Navigation Links */}
                <div className="text-center sm:text-left">
                    <ul>
                        <li className="text-lg font-medium mb-2 hover:text-primary transition duration-200">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-lg font-medium mb-2 hover:text-primary transition duration-200">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="text-lg font-medium mb-2 hover:text-primary transition duration-200">
                            <Link to="/terms">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <nav className="text-center sm:text-right">
                    <h6 className="footer-title mb-4 font-semibold text-lg">Follow Us</h6>
                    <div className="flex justify-center sm:justify-end gap-4">
                        <a
                            href="https://x.com/Arifkhondokar12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-primary/10 transition"
                            title="Twitter / X"
                        >
                            <FaTwitter className="text-xl text-base-content hover:text-primary transform hover:scale-110 duration-300" />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-error/10 transition"
                            title="YouTube"
                        >
                            <FaYoutube className="text-xl text-base-content hover:text-error transform hover:scale-110 duration-300" />
                        </a>
                        <a
                            href="https://www.facebook.com/arif.khondokar09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-blue-600/10 transition"
                            title="Facebook"
                        >
                            <FaFacebookF className="text-xl text-base-content hover:text-blue-600 transform hover:scale-110 duration-300" />
                        </a>
                    </div>
                </nav>
            </div>

            {/* Bottom Bar */}
            <div className="bg-base-200 text-center py-4">
                <p className="text-sm text-base-content/60">
                    © {new Date().getFullYear()} Athletic Hub. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
