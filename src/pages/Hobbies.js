import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Importing Navbar Component

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function Hobbies() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/hobbies`).then((res) => {
      setHobbies(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hobbies Section (Margin added to avoid navbar overlap) */}
      <div className="p-6 pt-24 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center">My Hobbies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="p-4 bg-gray-900 text-white rounded-lg shadow-md hover:scale-105 transition transform duration-300">
              <h2 className="text-xl font-semibold">{hobby.name}</h2>
              <p className="mt-2 text-gray-300">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
