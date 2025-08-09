import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex h-[80vh] min-h-screen items-center justify-center bg-gradient-to-br from-background to-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-16 py-8 max-w-screen-xl mx-auto">
        {/* Left Side: Text Section */}
        <div className="text-center md:text-left">
          <h1 className="h1 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
            Hi, I&apos;m Amritpal Singh!
          </h1>
          <p className="p text-lg sm:text-xl md:text-2xl max-w-md mx-auto md:mx-0 text-gray-200">
            A dedicated MERN stack developer with a passion for creating scalable and efficient web applications using technologies like MongoDB, Express.js, React, and Node.js. Let’s build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start mt-8 space-y-3 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Let’s Connect!
              </button>
            </Link>
            <Link href="/project">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Explore My Work
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="mt-8 md:mt-0 flex justify-center">
          <Image
            src="/aj.jpg"
            width={320}
            height={320}
            alt="Developer Image"
            className="rounded-2xl shadow-2xl border-4 border-blue-500 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
