/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        red: "#cc0000",
        dark_red: "#800101",
        black: "#333333",
        grey: "#adadad",
        dark_white: "#f7f7f7",
        white: "#ffffff",
        cream: "#f2d8bd",
        green: "#b6ce38",
        pink: "#e5b8bf",
      },
    },
  },
  plugins: [],
};
