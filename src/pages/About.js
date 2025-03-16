import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [user, setUser] = useState(null);

  // Skill Links & Logos
  const skillLinks = {
    "Node.js": "https://www.w3schools.com/nodejs/",
    "Laravel PHP": "https://laravel.com/",
    "MySQL": "https://www.w3schools.com/mysql/",
    "React.js": "https://react.dev/",
    "JavaScript": "https://www.w3schools.com/js/",
    "HTML": "https://www.w3schools.com/html/",
    "CSS": "https://www.w3schools.com/css/",
    "Nest.js": "https://nestjs.com/",
    "Manual Testing": "https://www.w3schools.in/software-testing/tutorials/",
  };

  const skillLogos = {
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Laravel PHP": "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "HTML": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png",
    "CSS": "https://icon2.cleanpng.com/20180420/sue/avuzxc7c9.webp",
    "Nest.js": "https://nestjs.com/logo-small-gradient.d792062c.svg",
    "Manual Testing": "https://cdn-icons-png.flaticon.com/512/11676/11676391.png",
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setUser(res.data[0]);
        } else {
          console.error("Unexpected API response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black shadow-md py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-white"></h1>
          <ul className="flex space-x-6 text-lg">
            <li><a href="/" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="/about" className="text-blue-400">About</a></li>
            <li><a href="/projects" className="hover:text-gray-400 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-gray-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="max-w-12xl mx-auto pt-24 p-6 bg-gradient-to-b from-green-900 to-gray-800">
        {user ? (
          <div>
            {/* Profile Section */}
            <div className="text-center">
              <img
                src={`http://localhost:5000/${user.profile_image}`}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-gray-700 shadow-md"
              />
              <h1 className="text-4xl font-bold mt-4 text-white">{user.name}</h1>
              <p className="mt-2 text-lg text-gray-200">{user.bio}</p>
            </div>

            {/* Skills */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-500 pb-2">Skills</h2>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                {user.skills?.map((skill, index) => (
                  <a key={index} href={skillLinks[skill]} target="_blank" rel="noopener noreferrer"
                    className="flex items-center bg-black p-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
                    <img src={skillLogos[skill]} alt={skill} className="w-6 h-6 mr-3" />
                    <span className="text-white font-medium">{skill}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-500 pb-2">Experience</h2>
              {user.experience?.map((job, index) => (
                <div key={index} className="mt-3 p-4 bg-black rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{job.position} - {job.company}</h3>
                  <p className="text-gray-400">{job.duration}</p>
                  <p className="mt-2 text-gray-300">{job.description}</p>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-500 pb-2">Education</h2>
              {user.education?.map((edu, index) => (
                <div key={index} className="mt-3 p-4 bg-black rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{edu.degree} - {edu.institution}</h3>
                  <p className="text-gray-400">{edu.year}</p>
                </div>
              ))}
            </section>

            {/* Certifications */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-500 pb-2">Certifications</h2>
            <ul className="mt-2 text-gray-300">
              {user.certifications?.map((cert, index) => (
                <li key={index} className="mt-1">✅ {cert}</li>
              ))}
            </ul>
          </section>

            {/* Projects */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-500 pb-2">Projects</h2>
              {user.projects?.map((project, index) => (
                <div key={index} className="mt-3 p-4 bg-black rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.technologies}</p>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                </div>
              ))}
            </section>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
}
