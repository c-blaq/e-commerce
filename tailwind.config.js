/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "425px",
        lg: "768px",
      },
    },
  },
  plugins: [],
};
