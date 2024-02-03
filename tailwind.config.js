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
        customGreen: '#44d7c5',
        
      },
      backgroundImage: {
        'bg-img-1': "url('./assets/weather-bg.svg')",
        'bg-img-2': "url('./assets/birthday-bg.svg')",
        'bg-img-3': "url('./assets/job-bg.svg')",
      }
    },
  },
  plugins: [],
}