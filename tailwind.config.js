/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        whiteBg: '#f4f4f4',
        customBlue: '#5496e7',
        customGreen: '#44d7c5',
        customDark1: '#151a23',
        customDark2: '#2e3a50',
        customDark3: '#181f29',
        customDark4: '#212936',
        customBlue2: '#7fb1ed'
        
      },
      backgroundImage: {
        'bg-img-1': "url('./assets/weather-bg.svg')",
        'bg-img-2': "url('./assets/birthday-bg.svg')",
        'bg-img-3': "url('./assets/job-bg.svg')",
        'car-img': "url('./assets/car-bg.svg')",
        'bg-img-4': "url('./assets/type-2-bg.svg')",
        'bg-img-5': "url('./assets/type-3-bg.svg')",
      }
    },
  },
  plugins: [],
}