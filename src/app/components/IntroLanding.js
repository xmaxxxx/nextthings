"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

export default function IntroLanding({ onFinish }) {
  const headlineRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [exiting, setExiting] = useState(false);
  const threeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
    const showBtnTimer = setTimeout(() => setShowButton(true), 1800);

    // Countdown timer
    let countdownTimer;
    if (showButton) {
      countdownTimer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownTimer);
            handleEnter();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    // Three.js setup
    let renderer, scene, camera, stars = [];
    if (threeRef.current) {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // transparent
      threeRef.current.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 1;

      // Create stars
      function createStar() {
        const geometry = new THREE.SphereGeometry(0.008, 24, 24);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);
        star.position.x = (Math.random() - 0.5) * 2;
        star.position.y = (Math.random() - 0.5) * 2;
        star.position.z = -Math.random() * 2;
        scene.add(star);
        stars.push(star);
      }
      for (let i = 0; i < 300; i++) createStar();

      function animate() {
        requestAnimationFrame(animate);
        stars.forEach(star => {
          star.position.z += 0.01;
          if (star.position.z > 1) star.position.z = -2;
        });
        renderer.render(scene, camera);
      }
      animate();
    }

    return () => {
      clearTimeout(showBtnTimer);
      clearInterval(countdownTimer);
      if (renderer && threeRef.current) {
        threeRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
    // eslint-disable-next-line
  }, [showButton]);

  // GSAP exit animation and enter
  const handleEnter = () => {
    if (exiting) return;
    setExiting(true);
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          onFinish();
        }
      });
    } else {
      onFinish();
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all">
      {/* Modern Animated Gradient Background */}
  <div className="absolute inset-0 w-full h-full z-0 animate-gradient" />
      <div ref={threeRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
      <h1
        ref={headlineRef}
        className="relative z-10 text-5xl sm:text-7xl font-extrabold mb-8 leading-tight text-white drop-shadow-2xl text-center tracking-tight"
      >
        <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-400 bg-clip-text text-transparent">Welcome to My Portfolio</span>
      </h1>
      <p className="relative z-10 text-lg sm:text-2xl text-blue-100 mb-8 text-center max-w-xl font-medium">
        Discover my work, skills, and projects as a passionate MERN stack developer.
      </p>
      {showButton && (
        <div className="relative z-10 flex flex-col items-center">
          <button
            onClick={handleEnter}
            className="bg-gradient-to-r from-blue-700 via-blue-900 to-cyan-500 hover:from-blue-800 hover:to-cyan-400 text-white font-bold py-3 px-10 rounded-2xl shadow-xl transition-all duration-300 text-lg mb-3"
            disabled={exiting}
          >
            Enter Portfolio
          </button>
          <span className="text-blue-200 text-base font-semibold">Auto entering in {countdown} sec...</span>
        </div>
      )}
    </div>
  );
}
