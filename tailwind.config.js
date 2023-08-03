/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['var(--font-noto-sans)'],
      },
      colors: {
        dark: '#1D232B',
      },
    },
  },
  plugins: [],
};
