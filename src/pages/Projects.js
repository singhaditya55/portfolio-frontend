import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-gray-800 text-white rounded-lg">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <p className="text-sm mt-2">{project.description}</p>
            <p className="text-xs text-gray-400 mt-2">{project.tech_stack}</p>
            <a href={project.project_link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 px-3 py-1 rounded">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
