// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.remove(darkMode ? 'dark-mode-class' : 'light-mode-class');
    document.body.classList.add(!darkMode ? 'dark-mode-class' : 'light-mode-class');
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
