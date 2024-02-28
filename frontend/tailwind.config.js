/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      dropShadow: ({ theme }) => ({
        'selectedShadow': `0 0 8px ${theme('colors.orange.500')}`
      })
    },
  },
  plugins: [require("daisyui")],
}

