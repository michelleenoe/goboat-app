const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['var(--font-faro-regular)', ...fontFamily.sans],     
      },
      colors: {
        white: "var(--color-white)",
        black: "var(--color-black)",
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        error: "var(--color-error)",
        mediumBlue: "var(--color-medium-blue)", 
      },
    },
  },
  plugins: [],
};
