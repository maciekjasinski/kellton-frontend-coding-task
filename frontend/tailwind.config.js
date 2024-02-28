/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      dropShadow:{
        'selectedShadow': `0 0 8px #ea6947`
      },
      gridTemplateColumns: {
        'checkoutGrid': '8fr minmax(330px, 4fr)',
      },
      width: {
        'maxWidth': '1280px'
      }
    },
  },
  daisyui: {
    themes: ['business']
  },
}

