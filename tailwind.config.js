const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // tilføjer dark mode via class
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        zoom: "zoom 2s ease-in-out infinite",
      },
      width: {
        "366px": "366px",
      },
      height: {
        "204px": "204px",
      },
      screens: {
        "928px": "928px", // Brugerdefineret breakpoint
      },
      fontFamily: {
        sans: ["Faro", ...fontFamily.sans],
      },
      colors: {
        typoPrimary: "#1F1F1F",
        typoSecondary: "#44525E",
        settingsBg: "#959CA3",
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
