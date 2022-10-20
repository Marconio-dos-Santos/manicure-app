/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgbanner': "url('../public/bgbanner.jpg')",
      },
      colors: {
        'pricing': '#6f6f6f',
      },
    },
  },
  plugins: [],
}
