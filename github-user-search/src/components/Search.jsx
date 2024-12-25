import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (location || minRepos) {
        const query = `${username} location:${location} repos:>${minRepos}`;
        const data = await fetchAdvancedUserData(query);
        setUserData(data.items);
      } else {
        const data = await fetchUserData(username);
        setUserData([data]);
      }
    } catch (err) {
      setError("No users found with the specified criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded flex-1"
          />
          <input
            type="number"
            placeholder="Min Repos (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded flex-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userData.map((user, index) => (
            <div key={index} className="p-4 border rounded">
              <img src={user.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full mx-auto" />
              <h3 className="text-xl text-center mt-2">{user.name || user.login}</h3>
              <p className="text-center">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Visit Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
