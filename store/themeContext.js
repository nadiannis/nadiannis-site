import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(!theme ? 'theme-dark dark' : '');
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
