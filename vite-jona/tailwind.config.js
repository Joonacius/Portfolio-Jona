// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ['PlusJakarta', 'sans-serif'],
        migella: ['GloryMigella', 'cursive'],
      },
      colors: {
        darkBg: '#151515',
      },
    },
  },
  plugins: [],
};
