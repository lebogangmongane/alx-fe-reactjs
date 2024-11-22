import { useContext, createContext, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider to Wrap Application
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to Access Auth Context
export const useAuth = () => useContext(AuthContext);
