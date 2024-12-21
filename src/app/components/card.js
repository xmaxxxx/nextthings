const Card = ({ title, description, image, features, technologies, liveLink, githubLink }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="space-x-4">
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Live Demo
            </a>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
