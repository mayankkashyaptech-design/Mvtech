/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['dark','light'], // VERY IMPORTANT!
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    
      extend: {
        screens:{
          'xsm':'600px',
          'xl-1500':'1500px',
          'xl-1800':'1800px',
          'xxl-2000':'2000px'
      },
      },
    },
    plugins: [],
  }