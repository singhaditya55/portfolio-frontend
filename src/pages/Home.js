import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    fetch("https://portfolio-backend-7y0o.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => setUser(data[0])) // Assuming first object contains user details
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center text-white relative bg-black"
      style={{
        backgroundImage: "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG43Y2tucDJwcHdrN3Z1cDZ1d2pzYTVwemk4bHY1dWVrdWJnaWlwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IcZhFmufozDCij3p22/giphy.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        {user && (
          <img
            src={`https://portfolio-backend-7y0o.onrender.com/${user.profile_image}`}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-500 shadow-lg"
          />
        )}
        <h1 className="text-4xl font-bold mt-4">Hey, I'm {user?.name || "Aditya Singh"}</h1>
        <p className="text-lg mt-2">👨‍💻 Developer | 📸 Photographer | ✈️ Traveller</p>
        <p className="text-sm mt-4 text-gray-300 text-center max-w-lg">
        Passionate about building experiences, capturing moments, and exploring the world.
        </p>
        <p className="text-sm mt-2 text-gray-300">Click below to learn more about my journey.</p>

        {/* Navigation Buttons */}
        <div className="mt-6 flex gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Projects
          </Link>
          <Link
            to="/hobbies"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Hobbies
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex gap-6 text-xl">
          <a
            href="https://www.instagram.com/singhaditya5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/singhadityaC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/singhaditya5555/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
    href="https://github.com/singhaditya55"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition-colors duration-300"
  >
    <FaGithub />
  </a>
  <a
            href="https://www.linkedin.com/in/aditya-singh-a6a7a1196/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
