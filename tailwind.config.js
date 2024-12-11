
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        sms: "320px",
        sml: "375px",
        sm: "425px",
        md: "768px",
        // => @media (min-width: 640px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        xxl: "1440px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
