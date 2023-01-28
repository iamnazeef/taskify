/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "tablet": "640px",
      // => @media (min-width: 640px) { ... }

      "laptop": "1024px",
      // => @media (min-width: 1024px) { ... }

      "desktop": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", "sans"],
      },
      boxShadow: {
        "cardShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      }
    },    
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
