// src/services/githubService.js

import axios from 'axios';

const BASE_URL = "https://api.github.com/search/users?q=";

// Function to search for users based on username, location, and minimum repositories
export const searchUsers = async (username, location, minRepos) => {
  const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;
  
  try {
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data.items; // Return the list of users
  } catch (error) {
    throw new Error('Error fetching user data: ' + error.message); // Handle errors
  }
};

// Optionally, if you want to create a separate fetchUserData function:
export const fetchUserData = async (username, location, minRepos) => {
  return searchUsers(username, location, minRepos); // Simply call searchUsers here
};
