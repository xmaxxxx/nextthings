import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex h-[80vh] min-h-screen items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-8 py-4 max-w-screen-xl mx-auto">
        {/* Left Side: Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Hi, I&apos;m Amritpal Singh!
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
            A dedicated MERN stack developer with a passion for creating scalable and efficient web applications using technologies like MongoDB, Express.js, React, and Node.js. Let’s build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
                Let’s Connect!
              </button>
            </Link>
            <Link href="/project">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
                Explore My Work
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="mt-8 md:mt-0 flex justify-center">
          <Image
            src="/aj.jpg"
            width={300}
            height={300}
            alt="Developer Image"
            className="rounded-lg shadow-lg border-4 border-white-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
