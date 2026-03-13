/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Mode Sombre
  theme: {
    extend: {

      colors: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        accent: "#F59E0B",

        background: "#0B0B0F",
        card: "#1A1A22"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }

    },
  },
  plugins: [],
}