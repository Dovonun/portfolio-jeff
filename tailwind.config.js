/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: '20%' },
          '10%': { opacity: '30%' },
          '20%': { opacity: '10%' },
          '30%': { opacity: '30%' },
          '50%': { opacity: '25%' },
          '60%': { opacity: '10%' },
          '70%': { opacity: '40%' },
          '75%': { opacity: '20%' },
          '80%': { opacity: '40%' },
          '90%': { opacity: '20%' },
          '100%': { opacity: '30%' },
        },
      },
      animation: {
        flicker: 'wiggle 4000ms cubic-bezier(0.63, 1.57, 0,-0.98) infinite',
      },
    },
  },
  plugins: [],
};
