import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <footer className="text-white py-10 bg-background border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <div className="text-2xl font-extrabold mb-4 sm:mb-0 tracking-tight">
                        <span>Amritpal Singh</span>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><FaFacebookF /></Link>
                        <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><FaTwitter /></Link>
                        <Link href="#" target="_blank" className="text-gray-400 hover:text-pink-400 transition-colors duration-200"><FaInstagram /></Link>
                        <Link href="https://www.linkedin.com/in/amritpalsinghx21/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><FaLinkedinIn /></Link>
                        <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200"><FaYoutube /></Link>
                    </div>
                </div>
                <div className="text-gray-400 py-4 border-t border-gray-700">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
                        <span className="text-sm mb-4 sm:mb-0">
                            Copyright © 2024 <Link href="/" className="text-white hover:text-blue-400">Amritpal Singh</Link>. All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
