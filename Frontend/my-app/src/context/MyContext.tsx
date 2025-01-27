import React, { createContext, useContext, useState } from 'react';

// Define the type for the context value
type MyContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

// Create the context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

// Create the provider component
export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};