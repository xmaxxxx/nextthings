import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <footer className=" text-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-semibold">
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
                        <Link href="https://www.linkedin.com/in/amritpalsinghx21/" target="_blank" className="text-gray-400 hover:text-white ">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>

               
            </div>

            <div className=" text-gray-400 py-1">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                    <span className="text-sm">
                        Copyright © 2024 <Link href="/" className="text-white hover:text-blue-500">Amritpal Singh</Link>. All rights reserved
                    </span>
                    <div className="space-x-4">
                        <Link href="/" className="hover:text-white">Privacy policy</Link>
                        <Link href="/" className="hover:text-white">Terms & condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
