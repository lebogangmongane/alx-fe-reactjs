import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  // This function fetches user data
  const fetchUserData = async () => {
    try {
      const results = await searchUsers(username, location, minRepos);
      setUsers(results);
      setError(''); // Clear any previous error messages
    } catch (error) {
      setError('Error fetching users.'); // Set error message
      console.error(error);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    fetchUserData(); // Call fetchUserData when the form is submitted
  };

  return (
    <form onSubmit={handleSubmit}> {/* Wrap inputs in a form and use onSubmit */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
      />
      <button type="submit">Search</button> {/* Change button type to submit */}

      {error && <p className="error">{error}</p>} {/* Conditional rendering for error message */}

      <ul>
        {users.length > 0 && users.map((user) => ( // Conditional rendering for users
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Search;
