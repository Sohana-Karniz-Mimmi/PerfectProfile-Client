/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {},

      fontFamily: {
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#2CACD5",
        secondary: "#00C8AA",
      },
      boxShadow: {
        "custom-light": "0px 8px 24px rgba(149, 157, 165, 0.2)",
      },
    },
  },
  plugins: [],
};
