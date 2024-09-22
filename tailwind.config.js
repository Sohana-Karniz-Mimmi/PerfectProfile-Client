/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        primary: "#2CACD5",
        secondary: "#00C8AA"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

