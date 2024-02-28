/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      dropShadow: ({ theme }) => ({
        'selectedShadow': `0 0 8px ${theme('colors.orange.500')}`
      }),
      gridTemplateColumns: {
        'checkoutGrid': '8fr 4fr',
      }
    },
  },
  plugins: [require("daisyui")],
}

