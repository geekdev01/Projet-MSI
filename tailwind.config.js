/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00a362',
        secondary:'#f3fbf9',
      },
      fontFamily: {
        sf: ['SFProText-Regular', 'Helvetica', 'Arial', 'sans-serif'], // Liste de secours
      },
    },
  },
  plugins: [],
}
