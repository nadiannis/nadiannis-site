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
        mdplus: '824px',
      },
      colors: {
        baseColor: colorWithOpacity('--color-base'),
        main: colorWithOpacity('--color-main'),
        mainInverted: colorWithOpacity('--color-main-inverted'),
        secondary: colorWithOpacity('--color-secondary'),
        secondaryInverted: colorWithOpacity('--color-secondary-inverted'),
        muted: colorWithOpacity('--color-muted'),
        shade1: colorWithOpacity('--color-shade-1'),
        shade2: colorWithOpacity('--color-shade-2'),
        shade3: colorWithOpacity('--color-shade-3'),
      },
      fontFamily: {
        sans: ['"Graphik"', ...defaultTheme.fontFamily.sans],
        greycliff: ['"GreycliffCF"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['0.68rem', { lineHeight: '1rem' }],
        sm: ['0.8rem', { lineHeight: '1.25rem' }],
        md: ['0.85rem', { lineHeight: '1.25rem' }],
      },
      spacing: {
        104: '28rem',
      },
      boxShadow: {
        lgTop:
          '0 -10px 15px -3px rgba(90, 100, 110, 0.1), 0 -4px 6px -2px rgba(90, 100, 110, 0.05)',
        xlTop:
          '-7px -7px 15px -3px rgba(90, 100, 110, 0.1), -3px -3px 6px -2px rgba(90, 100, 110, 0.05)',
      },
      width: {
        '11/12': '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
