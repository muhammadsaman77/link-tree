/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0C356A",
        "white-text": "#F1F5F9",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
