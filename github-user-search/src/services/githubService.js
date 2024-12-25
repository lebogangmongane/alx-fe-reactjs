import axios from 'axios';

// Function to search for GitHub users based on username, location, and minimum repositories
export const searchUsers = async (username, location = '', minRepos = 0) => {
  try {
    // Construct the search query with parameters
    let query = `q=${username}`;

    // Append location to query if provided
    if (location) {
      query += `+location:${location}`;
    }

    // Append minimum repositories to query if provided
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    // Make API call to GitHub's user search endpoint
    const response = await axios.get(`https://api.github.com/search/users?${query}`);

    // Return the list of users
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching user data: ' + error.message);
  }
};
