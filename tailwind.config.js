/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        soft_blue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        main_bg: 'hsl(217, 54%, 11%)',
        card_bg: 'hsl(216, 50%, 16%)',
        line_bg: 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)',
        cyan_transparent : "rbga(0, 255, 255,.5)"
      },
      fontSize: {
        'paragraph': '18px'
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    }
  },
  plugins: [],
}
