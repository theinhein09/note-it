/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        input: ["Anonymous Pro", "monospace"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
