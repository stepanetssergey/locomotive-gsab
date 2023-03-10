/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#F5F2EB",
        yellow: "#FCBF49",
        red: "#D62828",
        green: "#4F772D",
        orange: "#EF7F00"
      }
    }
  },
  plugins: []
};
