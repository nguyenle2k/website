/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: '640px',
          sm: '768px',
          md: '1024px',
          lg: '1220px',
          xl: '1220px', // 1536px
        },
      },
    },
  },
  plugins: [],
}