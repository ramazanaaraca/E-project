/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0px 8px 16px -8px rgba(15, 15, 15, 0.12)'
      },
      colors: {
        "promotion": '#ffab00a1',
        "orange" : '#ffc95d'
      },
      backgroundImage: {
        'newsletter': "url('~/assets/newsletter.png')",
      }
    },
  },
  plugins: [],
}

