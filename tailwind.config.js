/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./details.html"],
  theme: {
    screens: {
      M: "375px",
      // => @media (min-width: 375px) { ... }
      L: "425px",
      // => @media (min-width: 425px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      "2xl": "1400px"
      // => @media (min-width: 1400px) { ... }
    }
  },
  plugins: []
};
