import React, { useState } from "react";
import githubService from "../service/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null); // Reset error state
      const response = await githubService.getUser(username);
      setUserData(response.data);
    } catch (err) {
      setUserData(null); // Reset user data
      setError("Looks like we can't find the user"); // Set error message
    }
  };

  return (
    <div className="search-container">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      {error && <div className="error-message">{error}</div>}

      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
