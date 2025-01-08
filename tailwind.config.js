tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#81BFDA',
        secundareColor: '#B1F0F7',
        gray: {
          850: '#3a3a3a',
        },
      },
      fontFamily: {
        custom: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'xxs': '0.65rem',
        'xxl': '1.75rem',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        '1': 1,
        '2': 2,
      },
      screens: {
        'xs': '475px',
        '2xl': '1536px',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],





}