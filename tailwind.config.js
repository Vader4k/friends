/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteBg: '#f4f4f4',
        customBlue: '#5496e7',
        customGreen: '#45d6c5',
        
      }
    },
  },
  plugins: [],
}