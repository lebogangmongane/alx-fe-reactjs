import React, { useState } from 'react';
import { searchUsers } from '../services/githubService'; // Ensure this function exists

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

  const handleSearch = () => {
    fetchUserData(); // Call fetchUserData instead of directly fetching here
  };

  return (
    <div>
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
      <button onClick={handleSearch}>Search</button>

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
    </div>
  );
};

export default Search;
