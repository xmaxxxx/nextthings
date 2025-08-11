"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import IntroLanding from "./IntroLanding";
import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [homeAnim, setHomeAnim] = useState(false);
  const homeRef = useRef(null);
  const headlineRef = useRef(null);
  const introRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (homeAnim && homeRef.current) {
      // Animate headline first
      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
      // Animate intro text after headline
      gsap.fromTo(
        introRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.7 }
      );
      // Animate buttons after intro
      gsap.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1.3 }
      );
    }
  }, [homeAnim]);

  return (
    <>
      {showIntro ? (
        <IntroLanding onFinish={() => {
          setShowIntro(false);
          setTimeout(() => setHomeAnim(true), 100); // slight delay for smoothness
        }} />
      ) : (
        <div ref={homeRef} className="flex h-[80vh] min-h-screen items-center justify-center bg-gradient-to-br from-background to-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-16 py-8 max-w-screen-xl mx-auto">
            {/* Left Side: Text Section */}
            <div className="text-center md:text-left">
              <h1 ref={headlineRef} className="h1 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
                Hi, I&apos;m Amritpal Singh!
              </h1>
              <p ref={introRef} className="p text-lg sm:text-xl md:text-2xl max-w-md mx-auto md:mx-0 text-gray-200">
                A dedicated MERN stack developer with a passion for creating scalable and efficient web applications using technologies like MongoDB, Express.js, React, and Node.js. Let’s build something amazing together!
              </p>
              <div ref={buttonsRef} className="flex flex-col sm:flex-row sm:justify-center md:justify-start mt-8 space-y-3 sm:space-y-0 sm:space-x-4">
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
            <div className="mt-8 md:mt-0 flex justify-center items-center">
              <Image
                src="/aj.jpg"
                width={320}
                height={320}
                alt="Developer Image"
                className="rounded-xl shadow-lg border-4 border-blue-400 object-cover bg-gray-900 transition-all duration-300 hover:scale-105"
                style={{ maxWidth: '100%', height: '320px', objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
