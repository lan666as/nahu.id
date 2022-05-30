const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./pages/**/*.{html,js}","./components/**/*.{html,js}"],
  theme: {
    colors:{
      'purple': '#6770c9',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black':'#000000',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray':'#6b7280',
      'blue':'#0ea5e9',
      'purple-light':'#F4F5F9',
      'gray-light':'#9ca3af',
    },
    extend: {
      transitionProperty:{
        'left':'left'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}