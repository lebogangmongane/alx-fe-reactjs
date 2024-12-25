import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); // Add location state
  const [minRepos, setMinRepos] = useState(0);
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await searchUsers(username, location, minRepos); // Pass location to search function
      setUsers(results);
    } catch (error) {
      console.error(error);
    }
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
        onChange={(e) => setLocation(e.target.value)} // Input for location
      />
      <input
        type="number"
        placeholder="Min Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
