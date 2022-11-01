/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        veryDarkBlue: "#06283D",
        darkBlue: "#1363DF",
        blue: "#47B5FF",
        paleBlue: "#DFF6FF",
        yellow: "#FFD460",
      },
    },
  },
  plugins: [],
};
