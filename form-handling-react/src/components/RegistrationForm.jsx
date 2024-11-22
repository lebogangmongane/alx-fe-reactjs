import React, { useState } from 'react';

function RegistrationForm() {
  // Separate state for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }
    console.log("Form Data Submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={username} // Explicitly bind the state here
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email} // Explicitly bind the state here
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password} // Explicitly bind the state here
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
