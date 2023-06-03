/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,js}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        'primary': '#0F853B',
        'secondary': '#3957D0',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
