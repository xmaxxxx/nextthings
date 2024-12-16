import React from 'react';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-300 bg-white shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
