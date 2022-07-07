/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        input: ["Anonymous Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
