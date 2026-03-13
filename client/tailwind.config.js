/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        card: "#1A1A22",

        primary: "#6366F1",
        secondary: "#510087",
        accent: "#F59E0B"
      },
      fontFamily: {
        titre: ["OamphieVintage", "sans-serif"], 
        body: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
};