/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-grey": "#717171",
        "box-grey": "#1F1E22",
      },
      fontFamily: {
        playfair: ["Playfair_Display_Bold"],
      },
    },
  },
  plugins: [],
};
