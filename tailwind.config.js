/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        height:{
          '200' : '800px'
        }
      },
    },
    plugins: [],
  }