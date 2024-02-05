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
        'bg-type-1bg-light': "url('./assets/type-1-bg.svg)",
        'bg-type-1bg-dark': "url('./assets/type-1-bg-dark.svg)",
        'bg-type-2bg-light': "url('./assets/type-2-bg.svg)",
        'bg-type-2bg-dark': "url('./assets/type-2-bg-dark.svg)",
        'bg-type-3bg-light': "url('./assets/type-3-bg.svg)",
        'bg-type-3bg-dark': "url('./assets/type-3-bg-dark.svg)",
      }
    },
  },
  plugins: [],
}