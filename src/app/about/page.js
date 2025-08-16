"use client";
import React, { useEffect, useRef } from 'react';
import Links from '../components/Links';
import { gsap } from 'gsap';
import { motion } from "framer-motion";
const About = () => {
  const headingRef = useRef(null);
  const paraRefs = [useRef(null), useRef(null), useRef(null)];
  const cardRef = useRef(null);

  useEffect(() => {
    // Animate heading underline
    gsap.fromTo(
      headingRef.current.querySelector('.about-underline'),
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power2.out' }
    );
    // Animate paragraphs fade-up stagger
    gsap.fromTo(
      paraRefs.map(ref => ref.current),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.25, ease: 'power2.out', delay: 0.3 }
    );
    // Animate card glassmorphism
    gsap.fromTo(cardRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' });
  }, []);

  // Style object for card
  const cardStyle = {
    borderImage: 'linear-gradient(135deg, #06b6d4 10%, #6366f1 60%, #9333ea 100%) 1',
    boxShadow: '0 0 32px 4px #6366f1, 0 0 64px 8px #9333ea',
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-32 py-8 sm:py-12 lg:py-20 relative">
      {/* Particle/Three.js background (subtle) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* You can swap this for a Three.js canvas or use a simple SVG/Canvas particle effect */}
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.18 }}>
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="60%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#9333ea" />
            </radialGradient>
          </defs>
          <circle cx="60%" cy="40%" r="180" fill="url(#bgGrad)" />
          <circle cx="20%" cy="80%" r="90" fill="#6366f1" opacity="0.3" />
          <circle cx="80%" cy="70%" r="60" fill="#06b6d4" opacity="0.2" />
        </svg>
      </div>
      <div ref={cardRef} className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl p-4 sm:p-8 lg:p-12 backdrop-blur-md bg-gradient-to-br from-[#0f172a]/70 to-[#1e293b]/60 border-2" style={cardStyle}>
        <h2 ref={headingRef} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-8 relative text-center sm:text-left">
          About Me
          <span className="about-underline absolute left-0 bottom-[-8px] w-32 h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}></span>
        </h2>
        <p ref={paraRefs[0]} className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-4">
          Hello! I’m Amritpal Singh, a passionate MERN stack developer with a knack for building modern, efficient, and scalable web applications. With expertise in <span className="about-keyword">MongoDB</span>, <span className="about-keyword">Express.js</span>, <span className="about-keyword">React</span>, and <span className="about-keyword">Node.js</span>, I bring ideas to life through clean code and innovative solutions.
        </p>
        <p ref={paraRefs[1]} className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-4">
          I thrive on solving challenging problems, learning cutting-edge technologies, and collaborating on projects that make an impact. My journey in development has been fueled by curiosity and a commitment to excellence.
        </p>
        <p ref={paraRefs[2]} className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6 sm:mb-8">
          When I’m not coding, I enjoy exploring new tools, refining my skills, and staying updated with the latest trends in web development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <a href="/Amritpal_Singh_Resume_Updated.pdf" download className="about-btn bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 text-white font-bold py-2 px-8 rounded-full shadow-lg text-base tracking-wide border-2 border-transparent hover:border-cyan-400 transition-all duration-300 glow-btn w-full sm:w-auto">
            Download Resume
          </a>
          <div className="w-full sm:w-auto"><Links/></div>
        </div>
      </div>
      <style jsx>{`
        .about-underline {
          box-shadow: 0 0 12px 2px #38bdf8, 0 0 24px 4px #9333ea;
          animation: aboutGlow 2.2s infinite alternate;
        }
        @keyframes aboutGlow {
          0% { box-shadow: 0 0 12px 2px #38bdf8, 0 0 24px 4px #9333ea; }
          100% { box-shadow: 0 0 24px 6px #6366f1, 0 0 32px 8px #9333ea; }
        }
        .about-keyword {
          background: linear-gradient(90deg, #06b6d4, #6366f1, #9333ea);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-weight: 600;
          text-shadow: 0 0 8px #6366f1;
        }
        .about-btn {
          box-shadow: 0 0 16px 4px #6366f1;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .about-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 32px 8px #06b6d4, 0 0 48px 12px #9333ea;
        }
      `}</style>
    </div>
  );
};

export default About;
