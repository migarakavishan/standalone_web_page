/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#5F56E7",
        "secondary": "#282828",
        "tartiary": "#10170F" 
      }
    },
  },
  plugins: [],
}

