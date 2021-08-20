import { useState, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    const initialTheme = document.documentElement.className;
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const value = !theme ? 'theme-dark dark' : '';

    setTheme(value);
    localStorage.setItem('theme', value);
    document.documentElement.className = value;
  };

  const context = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
