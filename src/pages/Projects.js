import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Importing Navbar Component

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://portfolio-backend-7y0o.onrender.com/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Projects Section (Margin added to avoid navbar overlap) */}
      <div className="p-6 pt-24 max-w-7xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-center">My Projects</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project) => (
            <div key={project.id} className="p-4 bg-gray-900 text-white rounded-lg shadow-md hover:scale-105 transition transform duration-300">
              <img 
                src={`https://portfolio-backend-7y0o.onrender.com/${project.image}`} 
                alt={project.title} 
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
              <p className="text-sm mt-2 text-gray-300">{project.description}</p>
              <p className="text-xs text-gray-400 mt-2">{project.tech_stack}</p>
              <a 
                href={project.project_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
