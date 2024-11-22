import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import the custom hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the custom hook to get auth status

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
