/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "biru-tua": '#1B1C57',
        "biru-muda": '#626687',
        "hijau": '#10B981',
        "abu": '#888B97',
        "biru": '#1D4ED8',
        "neutral900": '#0E1735',
        "neutral700": '#3C4563'
      },
      fontFamily: {
        Lexend: ['Lexend-wght']
      }
    },
  },
  plugins: [],
}