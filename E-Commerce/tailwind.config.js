/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // all JS/TS/React files in src folder
  ],
  theme: {
    extend: {
       fontFamily: {
        'Poppins': ["Poppins","sans-serif" ],
         'Inter': ['Inter', 'sans-serif',]
      },
    },
  },
  plugins: [],
};
