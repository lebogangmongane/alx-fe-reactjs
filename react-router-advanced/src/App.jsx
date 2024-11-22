import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import { Profile, ProfileDetails, ProfileSettings } from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth'; // Import AuthProvider

const Home = () => <div><h2>Home Page</h2><p>Welcome to the application!</p></div>;
const Login = () => <div><h2>Login Page</h2><p>Please log in to access your profile.</p></div>;

const App = () => {
  return (
    <AuthProvider> {/* Wrap in AuthProvider */}
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/blog/1">Blog Post 1</Link></li>
            <li><Link to="/blog/2">Blog Post 2</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
