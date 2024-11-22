import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication status (for demo purposes, replace with real logic)
const isAuthenticated = false;

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
