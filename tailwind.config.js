/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["reklame-script"],
        body: ["brandon-grotesque"],
      },
      backgroundColor: {
        'or': "#fda878", // change array to string
      },
    },
  },
  plugins: [],
};
