import { useEffect, useState } from "react";
import axios from "axios";

export default function Hobbies() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/hobbies").then((res) => {
      setHobbies(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">My Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="p-4 bg-gray-800 text-white rounded-lg">
            <h2 className="text-xl font-semibold">{hobby.name}</h2>
            <p className="mt-2">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
