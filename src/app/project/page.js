"use client";
import React, { useEffect, useRef } from "react";
import Card from '../components/card';
import { gsap } from "gsap";
import * as THREE from "three";

const Projects = () => {
  const projects = [
    {
      id: 99,
      title: "Lawyer Booking App",
      description: "A modern web application for booking appointments with lawyers. Users can browse lawyer profiles, check availability, and book consultations online. Built for seamless scheduling and professional service.",
      features: [
        "Browse lawyer profiles",
        "Check availability",
        "Book appointments online",
        "Responsive design",
        "User authentication",
        "Easy scheduling"
      ],
      image: "/lawyer.png", 
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS"
      ],
      liveLink: "https://lawyer-booking-app.vercel.app/",
      githubLink: "#"
    },
    {
      id: 1,
      title: "CineX - Movie Streaming Platform",
      description: "A comprehensive movie streaming platform featuring multiple categories including Trending, Popular, Movies, TV Shows, and Person profiles. Users can explore detailed information about movies, TV shows, and cast members. Built with MERN stack, featuring Redux for state management and Axios for API integration.",
      features: [
        "Trending Movies & Shows",
        "Popular Content Section",
        "Dedicated TV Shows Page",
        "Person/Cast Profiles",
        "Movie Details & Reviews",
        "Advanced Search",
        "Responsive Design"
      ],
      image: "/cinex.png",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
        "Express",
        "Axios",
        "TMDB API",
        "Tailwind CSS"
      ],
      liveLink: "https://cinex.themernhub.com/",
      githubLink: "#"
    },
    {
      id: 2,
      title: "MernHub - E-Commerce Platform",
      description: "Full-featured e-commerce platform with Google authentication, admin dashboard, payment integration, and real-time order tracking. Admins can manage products while users enjoy secure payments and live delivery tracking.",
      image: "/blinkit.jpg",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "EJS",
        "Google OAuth",
        "Payment Gateway",
        "Maps API",
        "Admin Dashboard"
      ],
      liveLink: "https://blinkit.themernhub.com/users/login",
      githubLink: "#"
    },
    {
      id: 3,
      title: "GoalTracker - Personal Goal Management App",
      description: "A full-stack MERN application that allows users to efficiently manage their personal goals. Users can securely register, log in, and track their goals with features to create, update, and mark them as completed. The app includes user authentication and a clean, responsive interface for seamless productivity.",
      features: [
        "User Authentication (Login/Logout)",
        "Add, Edit, and Delete Goals",
        "Mark Goals as Completed",
        "Secure Dashboard for Each User",
        "Protected Routes & Token-Based Auth",
        "Fully Responsive Design",
        "REST API with CRUD Operations"
      ],
      image: "/goaltracker.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT Authentication",
        "Tailwind CSS",
        "Mongoose",
        "React Router"
      ],
      liveLink: "https://tracter.themernhub.com/",
      githubLink: "#"
    },
  
    {
      id: 4,
      title: "Obys Agency - Creative Portfolio",
      description: "A stunning creative agency portfolio website featuring advanced animations, smooth scrolling, and interactive elements. Built with modern JavaScript and cutting-edge animation libraries for an immersive user experience.",
      features: [
        "GSAP Animations",
        "Smooth Scroll with Locomotive",
        "Interactive UI Elements",
        "Dynamic Content Loading",
        "Custom Cursor Effects",
        "Responsive Design",
        "Performance Optimized"
      ],
      image: "/obys.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "GSAP",
        "Locomotive Scroll",
        "Canvas",
        "WebGL"
      ],
      liveLink: "https://obys.themernhub.com/",
      githubLink: "#"
    },
    {
      id: 5,
      title: "ARock - Creative React Portfolio",
      description: "A modern and interactive portfolio website built with React and GSAP animations. Features smooth transitions, dynamic content loading, and engaging user interactions throughout the site.",
      features: [
        "Smooth Page Transitions",
        "Interactive Animations",
        "Dynamic Content Loading",
        "Custom GSAP Effects",
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimized"
      ],
      image: "/arock.png",
      technologies: [
        "React",
        "GSAP",
        "JavaScript",
        "CSS3",
        "HTML5",
        "Responsive Design",
        "Animation Libraries"
      ],
      liveLink: "https://arock.themernhub.com/",
      githubLink: "#"
    }
  ];

  const threeRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for cards
    if (cardsRef.current) {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        stagger: 0.12,
        duration: 0.9,
        ease: "power2.out"
      });
    }

    // Three.js professional animated background
    let renderer, scene, camera, spheres = [];
    if (threeRef.current) {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      threeRef.current.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 3;

      // Add blurred floating spheres for a soft, elegant look
      function createSphere(color, x, y, z, size) {
        const geometry = new THREE.SphereGeometry(size, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35 });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(x, y, z);
        scene.add(sphere);
        spheres.push({ mesh: sphere, speed: Math.random() * 0.003 + 0.002 });
      }
      createSphere(0x00bfff, -1.2, 0.8, -1.5, 0.7);
      createSphere(0xff6b6b, 1.1, -0.7, -1.2, 0.5);
      createSphere(0x7c3aed, 0.3, 1.2, -2.2, 0.6);
      createSphere(0xfbbf24, -0.8, -1.1, -1.8, 0.4);

      // Animate spheres with gentle floating
      function animate() {
        requestAnimationFrame(animate);
        spheres.forEach((s, i) => {
          s.mesh.position.y += Math.sin(Date.now() * 0.001 * s.speed + i) * 0.002;
          s.mesh.position.x += Math.cos(Date.now() * 0.001 * s.speed + i) * 0.0015;
        });
        renderer.render(scene, camera);
      }
      animate();
    }

    return () => {
      if (renderer && threeRef.current) {
        threeRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <section id="projects" className="relative py-20 text-gray-100 overflow-hidden">
      <div ref={threeRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-10 tracking-tight">
          My Projects
        </h2>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div ref={el => cardsRef.current[idx] = el} key={project.id}>
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                features={project.features}
                technologies={project.technologies}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
