/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily :{
        playpen: ['Playpen Sans', 'sans-serif'],
      },
      backgroundImage: {
        'checkered-gray': 'linear-gradient(90deg, transparent 15px, rgba(211, 211, 211, 0.5) 15px, rgba(211, 211, 211, 0.5) 16px, transparent 16px), linear-gradient(180deg, transparent 15px, rgba(211, 211, 211, 0.5) 15px, rgba(211, 211, 211, 0.5) 16px, transparent 16px)',
      },
      backgroundSize: {
        'checkered-gray': '16px 16px', /* Adjust the size of the checkered pattern */
      },
    },
  },
  plugins: [],
}

