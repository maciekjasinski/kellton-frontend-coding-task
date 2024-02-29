/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      boxShadow: {
        'buttonShadow': `0 4px 10px 0 rgba(0, 0, 0, 0.3)`,
      },
      dropShadow:{
        'selectedShadow': `0 0 20px #E17B28`,
      },
      gridTemplateColumns: {
        'checkoutGrid': '8fr minmax(330px, 4fr)',
      },
      width: {
        'maxWidth': '1280px'
      },
    },
  },
  daisyui: {
    themes: [
      {
        'night': {
          ...require("daisyui/src/theming/themes")["night"],
          accent: '#E17B28',
          primary: '#308DEC',
          'base-100': '#1F2136',
        }
      },
    ]
  },
}

