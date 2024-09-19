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
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

