import React, { useState } from "react";
import githubService from "../service/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Show loading state
    setError(null); // Reset error state
    setUserData(null); // Clear previous user data

    try {
      const response = await githubService.getUser(username);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="search-container">
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p className="loading-message">Loading...</p>}

      {error && <p className="error-message">{error}</p>}

      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
