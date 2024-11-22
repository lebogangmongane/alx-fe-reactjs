/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
