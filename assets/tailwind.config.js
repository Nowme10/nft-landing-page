/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*html"],
  theme: {
    extend: {
      backgroundImage: (theme)=> ({
        'map-png': "url('/map.png')"
      }),
    },
  },
  plugins: [],
}

