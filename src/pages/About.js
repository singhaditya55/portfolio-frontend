import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div className="p-6 text-center">
      {user ? (
        <div>
          <img src={user.profile_image} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="text-3xl font-bold mt-4">{user.name}</h1>
          <p className="mt-2 text-lg">{user.bio}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
