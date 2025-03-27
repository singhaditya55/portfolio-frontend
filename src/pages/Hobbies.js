import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Hobbies() {
  const [activeTab, setActiveTab] = useState("Photography");
  const [games, setGames] = useState([]);

// ✅ Corrected: Use a proper Instagram API (Replace with a working endpoint)
useEffect(() => {
  // Load Elfsight script dynamically
  const script = document.createElement("script");
  script.src = "https://static.elfsight.com/platform/platform.js";
  script.async = true;
  document.body.appendChild(script);
}, []);


// ✅ Corrected: Fetch Games from RAWG API
useEffect(() => {
  axios
    .get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG}`)
    .then((res) => {
      console.log("RAWG Games Data:", res.data.results);
      setGames(res.data.results);
    })
    .catch((err) => console.error("Games API Error:", err));
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
      <Navbar />

      <div className="p-6 pt-24 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">My Hobbies</h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-6">
          {["Photography", "Gaming", "Blogging"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                activeTab === tab
                  ? "bg-gray-900 text-yellow-400"
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md">
          {activeTab === "Photography" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Instagram Feed</h2>
              {/* Elfsight Instagram Widget */}
              <div className="elfsight-app-3b827212-0b7a-42da-a340-5a91937c2b25" data-elfsight-app-lazy></div>
            </div>
          )}

{activeTab === "Gaming" && (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Favorite Games</h2>
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={3} // Show 3 games per row
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, // Show 2 games per row on medium screens
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // Show 1 game per row on mobile
          },
        },
      ]}
    >
      {games.slice(0, 6).map((game) => (
        <div key={game.id} className="flex flex-col items-center">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-64 h-40 rounded-lg shadow-lg"
          />
          <p className="mt-2 font-semibold">{game.name}</p>
        </div>
      ))}
    </Slider>
  </div>
)}


          {activeTab === "Blogging" && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">My Blog</h2>
              <a
                href="https://yourblog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow-lg transition duration-300"
              >
                Visit My Blog
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
