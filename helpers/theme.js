const setInitialTheme = () => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const hasStoredTheme = typeof storedTheme === 'string';

    if (hasStoredTheme) {
      return storedTheme;
    }

    const systemTheme = matchMedia('(prefers-color-scheme: dark)');
    const hasSystemTheme = typeof systemTheme.matches === 'boolean';

    if (hasSystemTheme) {
      return systemTheme.matches ? 'theme-dark dark' : '';
    }

    return '';
  };

  const theme = getInitialTheme();
  document.documentElement.className = theme;
};

const getInitialThemeScript = () => {
  const functionString = String(setInitialTheme);
  const code = `(${functionString})()`;
  return code;
};

export default getInitialThemeScript;
