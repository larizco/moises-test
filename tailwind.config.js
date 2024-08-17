/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1D1D1D',
        'medium-gray': '#262626',
        'light-gray': '#666666',
        'transparent-white': '#FFFFFF15',
      },
    },
  },
  plugins: [],
};