const defaultTheme = require('tailwindcss/defaultTheme');

function colorWithOpacity(variableName) {
  return ({ opacityValue }) => {
    if (!opacityValue) {
      return `rgb(var(${variableName}))`;
    }
    return `rgba(var(${variableName}), ${opacityValue})`;
  };
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '414px',
        '2xl': '1440px',
      },
      colors: {
        base: colorWithOpacity('--color-base'),
        main: colorWithOpacity('--color-main'),
        mainInverted: colorWithOpacity('--color-main-inverted'),
        secondary: colorWithOpacity('--color-secondary'),
        secondaryInverted: colorWithOpacity('--color-secondary-inverted'),
        muted: colorWithOpacity('--color-muted'),
        shade1: colorWithOpacity('--color-shade-1'),
        shade2: colorWithOpacity('--color-shade-2'),
      },
      fontFamily: {
        sans: ['"Graphik"', ...defaultTheme.fontFamily.sans],
        greycliff: ['"GreycliffCF"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
