import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <footer className="text-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <div className="text-xl font-semibold mb-4 sm:mb-0">
                        <span>Amritpal Singh</span>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <FaFacebookF />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <FaTwitter />
                        </Link>
                        <Link href="#" target="_blank" className="text-gray-400 hover:text-white">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.linkedin.com/in/amritpalsinghx21/" target="_blank" className="text-gray-400 hover:text-white">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-gray-400 py-4">
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-sm mb-4 sm:mb-0">
                        Copyright © 2024 <Link href="/" className="text-white hover:text-blue-500">Amritpal Singh</Link>. All rights reserved
                    </span>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
