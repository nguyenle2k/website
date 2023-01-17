/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          sm: '640px',
          md: '789px',
          lg: '1024px',
          xl: '1220px',
          '2xl': '1220px',
        }
      }
    },
  },
  plugins: [],
}