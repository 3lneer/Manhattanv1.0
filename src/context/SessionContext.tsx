'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the user object
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  // Add other user properties as needed
}

// Define the shape of the context
interface SessionContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

// Create the context
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Create the provider component
export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to load user from localStorage on initial render
    try {
      const storedUser = localStorage.getItem('session_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('session_user');
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('session_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('session_user');
  };

  return (
    <SessionContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
}

// Create a custom hook for easy access to the context
export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}
