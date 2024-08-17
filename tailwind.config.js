/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#1D1D1D',
        'gray-medium': '#262626',
        'gray-light': '#666666',
        'gray-lighter': '#D1D1D1',
        'white-transparent-15': '#FFFFFF15',
        'white-transparent-25': '#FFFFFF25',
      },
    },
  },
  plugins: [],
};