import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const IMAGE_BASE_URL = process.env.REACT_APP_IMG_BASE_URL;

export default function Home() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light"; // Default dark
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        
        if (Array.isArray(data) && data.length > 0) {
          setUser(data[0]);
        } else {
          console.error("Unexpected API response format");
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

    // Toggle Theme Mode
    const toggleTheme = () => {
      const newTheme = darkMode ? "light" : "dark";
      setDarkMode(!darkMode);
      localStorage.setItem("theme", newTheme);
      
      // Toggle class for dark mode
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    

  return (
    <div
  className={`h-screen flex flex-col justify-center items-center text-white relative transition-all duration-500 ${
    darkMode ? "bg-black" : "bg-gray-100"
  }`}
  style={{
    backgroundImage: darkMode
      ? "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG43Y2tucDJwcHdrN3Z1cDZ1d2pzYTVwemk4bHY1dWVrdWJnaWlwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IcZhFmufozDCij3p22/giphy.gif')"
      : "url('https://media.giphy.com/media/TlK63EChAGgxq7kTcFW/giphy.gif?cid=790b761192wku6v9apynexc9n57l3bdtgw4xwv8llccrx86p&ep=v1_gifs_search&rid=giphy.gif&ct=g')", // Light mode background
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
       {/* Toggle Button */}
       <button
  onClick={toggleTheme}
  className="absolute top-5 right-5 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md transition duration-300 cursor-pointer"
>
  {darkMode ? <FaSun className="text-yellow-400 text-2xl" /> : <FaMoon className="text-gray-600 text-2xl" />}
</button>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        {user && (
          <img
            src={`${IMAGE_BASE_URL}/${user.profile_image}`}
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

        {/* Buy Me a Coffee Button - With More Gap */}
        <div className="mt-10 flex items-center gap-3">
          <a
            href="https://www.buymeacoffee.com/singhaditya55" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 bg-yellow-500 rounded-full text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            ☕
          </a>
          <span className="text-white font-medium">Buy Me a Coffee</span>
        </div>

      </div>
    </div>
  );
}
