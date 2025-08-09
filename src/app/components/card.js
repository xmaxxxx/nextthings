const Card = ({ title, description, image, features, technologies, liveLink, githubLink }) => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/30 transition-shadow duration-300 max-h-[600px] flex flex-col">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover rounded-t-2xl" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="space-x-4">
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold shadow-lg"
            >
              Live Demo
            </a>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 text-white px-5 py-2 rounded-xl hover:bg-gray-500 transition duration-300 font-semibold shadow-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
  <div className="p-7 overflow-y-auto flex-1 custom-scrollbar">
        <h3 className="h3 text-white mb-2 font-bold tracking-tight">{title}</h3>
        <p className="p text-gray-300 mb-4">{description}</p>
        {features && (
          <div className="mb-4">
            <h4 className="h4 text-gray-400 mb-2 font-semibold">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {technologies && technologies.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Card;
