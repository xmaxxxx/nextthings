

"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

export default function IntroLanding({ onFinish }) {
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const containerRef = useRef(null);
  const arrowRef = useRef(null);
  const threeRef = useRef(null);
  const [showEnter, setShowEnter] = useState(false);

  // GSAP headline/subtext animation, shimmer underline, arrow bounce
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { y: 80, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" }
    );
    gsap.fromTo(
      subtextRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.7 }
    );
    gsap.to(arrowRef.current, {
      y: 18,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: "power1.inOut",
      delay: 1.5
    });
    // Shimmer underline effect
    gsap.to(".shimmer-underline", {
      backgroundPositionX: ["0%", "100%"],
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut"
    });
    // Show Enter button after 1.2s
    const enterTimer = setTimeout(() => setShowEnter(true), 1200);
    // Auto-transition after 3s
    const autoTimer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          if (onFinish) onFinish();
        },
      });
    }, 3000);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(autoTimer);
    };
  }, [onFinish]);

  // Three.js animated background (glowing neon spheres, parallax camera)
  useEffect(() => {
    let renderer, scene, camera, spheres = [], mouse = { x: 0, y: 0 };
    let frameId;
    let localThreeRef = threeRef.current;
    if (localThreeRef) {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      localThreeRef.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 3;

      function createGlowSphere(color, x, y, z, size) {
        const geometry = new THREE.SphereGeometry(size, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55 });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(x, y, z);
        scene.add(sphere);
        spheres.push({ mesh: sphere, speed: Math.random() * 0.003 + 0.002 });
      }
      // Neon/gradient spheres
      createGlowSphere(0x00fff7, -1.2, 0.8, -1.5, 0.7); // cyan
      createGlowSphere(0x3b82f6, 1.1, -0.7, -1.2, 0.5); // blue
      createGlowSphere(0x9333ea, 0.3, 1.2, -2.2, 0.6); // purple
      createGlowSphere(0x38bdf8, -0.8, -1.1, -1.8, 0.4); // light blue

      // Starfield particles
      for (let i = 0; i < 60; i++) {
        const geometry = new THREE.SphereGeometry(0.04, 8, 8);
        const material = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.18 });
        const star = new THREE.Mesh(geometry, material);
        star.position.set(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 6
        );
        scene.add(star);
      }

      // Parallax effect
      function onMouseMove(e) {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }
      window.addEventListener("mousemove", onMouseMove);

      function animate() {
        frameId = requestAnimationFrame(animate);
        // Parallax camera movement
        camera.position.x += (mouse.x * 0.7 - camera.position.x) * 0.04;
        camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.04;
        spheres.forEach((s, i) => {
          s.mesh.position.y += Math.sin(Date.now() * 0.001 * s.speed + i) * 0.002;
          s.mesh.position.x += Math.cos(Date.now() * 0.001 * s.speed + i) * 0.0015;
        });
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }
      animate();

      // Cleanup function
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        if (renderer && localThreeRef) {
          localThreeRef.removeChild(renderer.domElement);
          renderer.dispose();
        }
        if (frameId) cancelAnimationFrame(frameId);
      };
    }
    // If no threeRef, return empty cleanup
    return () => {};
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden transition-all">
      {/* Three.js Canvas Background */}
      <div ref={threeRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-6 py-12 rounded-2xl bg-black/30 backdrop-blur-md shadow-2xl">
        <h1
          ref={headlineRef}
          className="text-center text-5xl sm:text-7xl font-extrabold mb-2 leading-tight drop-shadow-2xl tracking-tight bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 bg-clip-text text-transparent"
          style={{ letterSpacing: '0.04em' }}
        >
          Welcome to My Portfolio
        </h1>
        {/* Glowing shimmer underline */}
        <div className="shimmer-underline mx-auto mb-6 h-2 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" style={{ backgroundSize: '200% 100%', backgroundPositionX: '0%' }} />
        <p ref={subtextRef} className="text-lg sm:text-2xl text-blue-100 mb-8 text-center max-w-xl font-medium">
          Explore my work, skills, and projects as a passionate MERN stack developer.<br />
          <span className="text-blue-400">Scroll down to discover more!</span>
        </p>
        {/* Enter Portfolio Button + Bouncing Arrow */}
        {showEnter && (
          <div className="flex flex-col items-center mt-2">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold py-3 px-10 rounded-full shadow-xl text-lg mb-3 tracking-wide hover:from-cyan-400 hover:to-blue-600 transition-all duration-300"
              onClick={() => {
                gsap.to(containerRef.current, {
                  opacity: 0,
                  y: -40,
                  duration: 0.7,
                  ease: "power2.inOut",
                  onComplete: () => {
                    if (onFinish) onFinish();
                  },
                });
              }}
            >
              Enter Portfolio
            </button>
            <a
              href="/Amritpal_Singh_Resume_Updated.pdf"
              download
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-2 px-8 rounded-full shadow-lg text-base mb-2 tracking-wide hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              Download Resume
            </a>
            <svg ref={arrowRef} className="w-10 h-10 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}