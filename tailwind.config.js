/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkgreen" : "#365253",
        "green" : "#5e9a78",
        "lightgreen" : "#a7ce9f",
        "yellow" : "#f7da8a",
        "orange" : "#ddab70",
        "gold" : "#9d8f62",
        "brown" : "#ac6c49",
      },
      fontFamily: {
        dancingscript: ['Dancing Script'],
        dmserif: ['DM Serif Display'],
        montserrat: ['Montserrat'],
        opensans: ['Open Sans'],
        playfairdisplay: ['Playfair Display'],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}

