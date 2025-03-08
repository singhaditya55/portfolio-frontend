import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg mt-4">Showcasing my work & passions</p>
      <div className="mt-6 flex gap-4">
        <Link to="/about" className="px-4 py-2 bg-blue-500 rounded">About Me</Link>
        <Link to="/projects" className="px-4 py-2 bg-green-500 rounded">Projects</Link>
        <Link to="/hobbies" className="px-4 py-2 bg-yellow-500 rounded">Hobbies</Link>
      </div>
    </div>
  );
}
