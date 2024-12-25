// src/services/githubService.js

const BASE_URL = "https://api.github.com/search/users?q=";

// Function to search for users based on username, location, and minimum repositories
export const searchUsers = async (username, location, minRepos) => {
  const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;
  const response = await fetch(`${BASE_URL}${query}`);

  if (!response.ok) {
    throw new Error('Error fetching user data'); // Handle errors
  }

  const data = await response.json();
  return data.items; // Return the list of users
};

// Optionally, if you want to create a separate fetchUserData function:
export const fetchUserData = async (username, location, minRepos) => {
  return searchUsers(username, location, minRepos); // Simply call searchUsers here
};
