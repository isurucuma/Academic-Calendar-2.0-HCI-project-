/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkTheme: "#0f172a",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
