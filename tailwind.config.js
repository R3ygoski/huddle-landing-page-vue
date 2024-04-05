/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'magenta': 'hsl(300, 69%, 71%)',
      }
    },
  },
  plugins: [],
}

