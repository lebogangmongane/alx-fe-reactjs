import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL;

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

export const fetchAdvancedUserData = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
};
