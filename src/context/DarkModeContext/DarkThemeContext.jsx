import { createContext, useState } from "react";

export const DarkThemeContext = createContext;

export const DarkThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const getClassName = (className) => {
    if (darkMode === true) {
      return `${className}--dark`;
    } else return className;
  };

  const value = { darkMode, setDarkMode, getClassName };

  return (
    <DarkThemeContext.Provider value={value}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeProvider;
