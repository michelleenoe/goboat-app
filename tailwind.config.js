const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      screens: {
        "928px": "928px", // Brugerdefineret breakpoint
      },
      fontFamily: {
        sans: ["Faro", ...fontFamily.sans],
      },
      colors: {
        // Light theme
        typoPrimary: "#1F1F1F",
        typoSecondary: "#44525E",
        grey1: "#E6E7E8",
        grey2: "#F5F6F7",
        goboatYellow: "#FEDF63",
        goboatBlue: "#1760AB",
        warningRed: "#BE1522",
        successGreen: "#319A77",
        focusOrange: "#ED6D38",
        darkBlue: "#143C6D",
        mediumBlue: "#3F6CA1",
        lightBlue: "#92BBDB",
        // Dark theme
        dark: {
          typoPrimary: "#F5F6F7", // Light grey for text in dark mode
          typoSecondary: "#C4C4C4", // Muted grey for secondary text
          grey1: "#1F1F1F", // Dark grey
          grey2: "#2C2C2C", // Slightly lighter grey
          goboatYellow: "#E5C54F", // Muted yellow for dark mode
          goboatBlue: "#144F8A", // Darker blue for accents
          warningRed: "#A1121B", // Darker red
          successGreen: "#267C59", // Darker green
          focusOrange: "#C4562D", // Muted orange
          darkBlue: "#0E2B4A", // Very dark blue
          mediumBlue: "#2B5178", // Medium dark blue
          lightBlue: "#759FBF", // Softer blue
        },
      },
      spacing: {
        xs: "4px",
        s: "8px",
        m: "16px",
        l: "24px",
        xl: "32px",
        xxl: "48px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
