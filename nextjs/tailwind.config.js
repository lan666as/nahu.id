const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./pages/**/*.{html,js}","./components/**/*.{html,js}"],
  theme: {
    colors:{
      'purple': '#6770c9',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}