import axios from "axios";

//Local
// const API_BASE_URL = "http://localhost:5000/api"; // Change this to your backend URL

//PROD
const API_BASE_URL = "https://portfolio-backend-7y0o.onrender.com/api";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchHobbies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hobbies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hobbies:", error);
    return [];
  }
};
