import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; 

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
