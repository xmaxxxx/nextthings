import Card from '../components/card';

const Projects = () => {
  const projects = [
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

  return (
    <section id="projects" className="py-20 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-10 tracking-tight">
          My Projects
        </h2>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              features={project.features}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
