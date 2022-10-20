/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgbanner': "url('../public/bgbanner.jpg')",
      },
    },
  },
  plugins: [],
}
