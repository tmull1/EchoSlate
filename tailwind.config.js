// tailwind.config.js
module.exports = {
  purge: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this line
  ],
}
