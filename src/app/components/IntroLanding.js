"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

export default function IntroLanding({ onFinish }) {
  const headlineRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const threeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
    const timer = setTimeout(() => setShowButton(true), 1800);

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
      clearTimeout(timer);
      if (renderer && threeRef.current) {
        threeRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-background to-gray-900">
      <div ref={threeRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
      <h1
        ref={headlineRef}
        className="relative z-10 text-5xl sm:text-7xl font-extrabold text-white mb-8 drop-shadow-xl text-center"
      >
        Welcome to My Portfolio
      </h1>
      <p className="relative z-10 text-lg sm:text-2xl text-gray-300 mb-12 text-center max-w-xl">
        Discover my work, skills, and projects as a passionate MERN stack developer.
      </p>
      {showButton && (
        <button
          onClick={onFinish}
          className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl shadow-lg transition-all duration-300 text-lg"
        >
          Enter Portfolio
        </button>
      )}
    </div>
  );
}
