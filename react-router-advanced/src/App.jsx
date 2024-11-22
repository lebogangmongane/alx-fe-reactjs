import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Profile, ProfileDetails, ProfileSettings, User } from './components/Profile';

const Home = () => <div><h2>Home Page</h2><p>Welcome to the application!</p></div>;
const Login = () => <div><h2>Login Page</h2><p>Please log in to access your profile.</p></div>;

// Simulate Authentication
const isAuthenticated = false;

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/user/123">Dynamic User</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
