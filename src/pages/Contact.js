import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // Smooth animations
import { FiMail } from "react-icons/fi"; // Email icon
import axios from "axios"; // API call

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const CONTACT_EMAIL = "singhaditya5298@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // Success message state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/contact`, formData);
      setSubmitted(true); // Show success message
      setFormData({ name: "", email: "", message: "" }); // Clear form

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <Navbar />
      
      <motion.h1
        className="text-4xl font-bold mb-8 text-gray-400"
      >
        Get in Touch
      </motion.h1>

      {/* 🔹 Email Contact Section */}
      <motion.div
  className="flex items-center mb-6 bg-gray-800 p-4 rounded-lg shadow-lg"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <a
    href={`mailto:${CONTACT_EMAIL}`}
    className="flex items-center text-yellow-400 text-lg font-semibold hover:underline"
  >
    <FiMail className="text-yellow-400 text-3xl mr-3" />
    EMAIL US
  </a>
</motion.div>


      {/* ✅ Success Message */}
      {submitted && (
        <motion.div
          className="bg-green-500 text-white p-4 rounded-lg shadow-lg mb-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          ✅ Message has been sent! We will contact you.
        </motion.div>
      )}

      <motion.form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg w-full max-w-md shadow-xl transform hover:scale-105 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <label className="block mb-4">
          <span className="text-gray-300">Your Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Your Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Your Message</span>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </label>

        <motion.button
          type="submit"
          className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}
