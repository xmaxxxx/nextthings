
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ title, description, image, features, technologies, liveLink, githubLink }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <motion.div
        className="relative bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/70 rounded-2xl shadow-2xl overflow-hidden border-2 flex flex-col backdrop-blur-md"
        style={{
          borderImage: 'linear-gradient(135deg, #06b6d4 10%, #6366f1 60%, #9333ea 100%) 1',
          boxShadow: '0 0 32px 4px #6366f1, 0 0 64px 8px #9333ea',
        }}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 48px 12px #06b6d4, 0 0 64px 16px #9333ea" }}
      >
        <div className="relative group cursor-pointer" onClick={() => setModalOpen(true)}>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="space-x-4">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 text-white px-5 py-2 rounded-xl font-semibold shadow-lg about-btn"
              >
                Live Demo
              </a>
              {githubLink && githubLink !== "#" && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-700 via-blue-700 to-purple-700 text-white px-5 py-2 rounded-xl font-semibold shadow-lg about-btn"
                >
                  GitHub
                </a>
              )}
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
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md cursor-pointer transition-all duration-200"
                  whileHover={{ scale: 1.13, boxShadow: "0 0 16px 4px #38bdf8" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 text-white px-4 py-2 rounded-lg font-semibold shadow about-btn"
            >
              View Project
            </a>
            {githubLink && githubLink !== "#" && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 via-blue-700 to-purple-700 text-white px-4 py-2 rounded-lg font-semibold shadow about-btn"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
      {/* Modal for expanded project details */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/80 rounded-2xl p-8 max-w-lg w-full border-2 relative"
              style={{
                borderImage: 'linear-gradient(135deg, #06b6d4 10%, #6366f1 60%, #9333ea 100%) 1',
                boxShadow: '0 0 32px 4px #6366f1, 0 0 64px 8px #9333ea',
              }}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              {features && (
                <div className="mb-4">
                  <h4 className="text-gray-400 mb-2 font-semibold">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 text-white px-4 py-2 rounded-lg font-semibold shadow about-btn"
                >
                  View Project
                </a>
                {githubLink && githubLink !== "#" && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 via-blue-700 to-purple-700 text-white px-4 py-2 rounded-lg font-semibold shadow about-btn"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold">×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
