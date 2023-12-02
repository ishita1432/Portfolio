/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#00000',
      },
      textColor: {
        'dark': '#fffff',
      },
    },
  },
  plugins: [require("daisyui")],
}

