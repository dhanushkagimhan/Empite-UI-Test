/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-grey": "#717171",
        "box-grey": "#1F1E22",
        "box-grey2": "#DEDEDE",
        "box-grey3": "#2C2C2C",
        "box-grey4": "#EDEDED",
        "box-grey5": "#F0F0F0",
        "box-red": "#CE0000",
      },
      fontFamily: {
        playfair: ["Playfair_Display_Bold"],
      },
    },
  },
  plugins: [],
};
