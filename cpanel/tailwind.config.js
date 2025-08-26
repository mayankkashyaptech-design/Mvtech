/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['dark','light'], // VERY IMPORTANT!
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
      screens:{
          'xxl':'1500px',
          'xsm':'600px'
      },
        extend: {},
      },
      plugins: [],
    }