import React from 'react';
import Links from '../components/Links';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-16 lg:px-32 py-10 lg:py-20">
      <div className="text-start max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-6">About Me</h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
          Hello! I'm Amritpal Singh, a passionate MERN stack developer with a knack for building modern, efficient, and scalable web applications. With expertise in MongoDB, Express.js, React, and Node.js, I bring ideas to life through clean code and innovative solutions.
        </p>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
          I thrive on solving challenging problems, learning cutting-edge technologies, and collaborating on projects that make an impact. My journey in development has been fueled by curiosity and a commitment to excellence.
        </p>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          When I’m not coding, I enjoy exploring new tools, refining my skills, and staying updated with the latest trends in web development.
        </p>
        <Links/>
      </div>
    </div>
  );
};

export default About;
