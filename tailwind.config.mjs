// File: tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber': {
          500: '#F59E0B',
          600: '#D97706',
        },
        'sky': {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
        }
      },
    },
  },
  plugins: [],
}
