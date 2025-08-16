"use client";
import React, { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap"; // Already imported above
import IntroLanding from "./IntroLanding";
import Image from "next/image";
import Link from "next/link";
import Tilt from 'react-parallax-tilt';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [homeAnim, setHomeAnim] = useState(false);
    const homeRef = useRef(null);
    const headlineRef = useRef(null);
    const introRef = useRef(null);
    const buttonsRef = useRef(null);
    const nameTypeRef = useRef(null);
    const skillsRef = useRef([]);
    const profileRef = useRef(null);
    const threeRef = useRef(null);

    // GSAP and effect hooks ...existing code...
    // ...existing code...
    return (
      <>
        {showIntro ? (
          <IntroLanding onFinish={() => {
            setShowIntro(false);
            setTimeout(() => setHomeAnim(true), 100);
          }} />
        ) : (
          <div ref={homeRef} className="flex h-[80vh] min-h-screen items-center justify-center bg-gradient-to-br from-background to-gray-900 relative overflow-hidden">
            {/* Three.js Background */}
            <div ref={threeRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-16 py-8 max-w-screen-xl mx-auto relative z-10">
              {/* Left Side: Introduction Section */}
              <div className="text-center md:text-left w-full md:w-1/2">
                <h1 ref={headlineRef} className="h1 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg shimmer-text">
                  <span ref={nameTypeRef} className="bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent" style={{ letterSpacing: '0.04em' }}></span>
                </h1>
                <p ref={introRef} className="p text-lg sm:text-xl md:text-2xl max-w-md mx-auto md:mx-0 text-gray-200 mb-4">
                  A passionate MERN Stack Developer from Toronto, building full-stack web applications using React, Next.js, Node.js, and MongoDB.
                </p>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {['React','Next.js','Node.js','MongoDB','Tailwind CSS','Redux','Express.js','TypeScript'].map((tech, i) => (
                    <span
                      key={tech}
                      ref={el => skillsRef.current[i] = el}
                      className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md hover:scale-110 hover:shadow-[0_0_16px_4px_#38bdf8] transition-all duration-200 cursor-pointer"
                      style={{ boxShadow: '0 0 8px 2px #3b82f6' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Download Resume Button */}
                <div ref={buttonsRef} className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 mb-8">
                    <a
                      href="/Amritpal_Singh_Resume_Updated.pdf"
                      download
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-2 px-8 rounded-full shadow-lg text-base tracking-wide border-2 border-transparent hover:border-cyan-400 hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 glow-btn"
                      style={{ textDecoration: 'none' }}
                    >
                      Download Resume
                    </a>
                  <Link href="/contact">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-lg border-2 border-transparent hover:border-orange-300 glow-btn">
                      Let’s Connect!
                    </button>
                  </Link>
                  <Link href="/project">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-lg border-2 border-transparent hover:border-blue-300 glow-btn">
                      Explore My Work
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex justify-center items-center w-full md:w-1/2">
                <ProfileImage />
              </div>
            </div>
            <style>{`
              .shimmer-text {
                background-size: 200% 100%;
                animation: shimmer 2.5s linear infinite;
              }
              @keyframes shimmer {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
              .glow-btn {
                box-shadow: 0 0 12px 2px #38bdf8;
              }
            `}</style>
          </div>
        )}
      </>
    );
}


// --- ProfileImage Component ---
function ProfileImage() {
  const auraRef = useRef(null);
  const floatRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useLayoutEffect(() => {
    if (auraRef.current) {
      gsap.to(auraRef.current, {
        opacity: 0.35,
        scale: 1.08,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    }
    if (floatRef.current) {
      gsap.to(floatRef.current, {
        y: 12,
        duration: 2.6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  // On hover, increase aura opacity and scale slightly
  useEffect(() => {
    if (auraRef.current) {
      gsap.to(auraRef.current, {
        opacity: hovered ? 0.45 : 0.35,
        scale: hovered ? 1.13 : 1.08,
        duration: 0.4,
        ease: 'power1.out',
      });
    }
  }, [hovered]);

  return (
    <Tilt
      glareEnable={false}
      scale={hovered ? 1.06 : 1.03}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      transitionSpeed={1200}
      gyroscope={true}
      className="rounded-full shadow-2xl"
      style={{ width: 220, height: 220 }}
      onEnter={() => setHovered(true)}
      onLeave={() => setHovered(false)}
    >
      <div ref={floatRef} className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center">
        {/* Neon Gradient Border */}
        <div className="absolute inset-0 rounded-full pointer-events-none border-2" style={{
          borderImage: 'linear-gradient(135deg, #06b6d4 10%, #6366f1 60%, #9333ea 100%) 1',
          borderWidth: '2px',
          borderStyle: 'solid',
          zIndex: 2
        }} />
        {/* Soft Glow Aura */}
        <div
          ref={auraRef}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            zIndex: 1,
            boxShadow:
              '0 0 32px 8px #06b6d4, 0 0 48px 16px #6366f1, 0 0 32px 12px #9333ea',
            background:
              'radial-gradient(circle at 60% 40%, #06b6d4 0%, #6366f1 60%, #9333ea 100%)',
            opacity: 0.35,
            filter: 'blur(10px)',
            transition: 'opacity 0.3s',
          }}
        />
        {/* Profile Image */}
        <Image
          src="/aj.jpg"
          alt="Profile"
          fill
          className="object-cover rounded-full border-0"
          priority
        />
      </div>
    </Tilt>
  );
}

export default HeroSection;
