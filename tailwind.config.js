/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        bodyFont: 'Poppins',
        titleFont: 'Montserrat',
      },
      colors: {
        primaryColor: '#111111',
        secondaryColor: '#9b59b6',
        bgColor: '#34495e',
      },
      boxShadow: {
        btnShadow: '0px 0px 18px 3px rgba(52,73,94,1)',
      },
    },
  },
  plugins: [],
};
