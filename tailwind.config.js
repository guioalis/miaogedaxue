/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#C1D0E4',
          200: '#9BB2D3',
          300: '#7593C2',
          400: '#5A7BB5',
          500: '#3F63A8',
          600: '#365086',
          700: '#2C3E65',
          800: '#232C44',
          900: '#0A2463', // Main primary color
        },
        secondary: {
          50: '#F9F5E3',
          100: '#F0E7B9',
          200: '#E6D88F',
          300: '#E6C229', // Main accent color
          400: '#D3B128',
          500: '#B59A22',
          600: '#97821D',
          700: '#796A19',
          800: '#5C5114',
          900: '#3E3910',
        },
        accent: {
          50: '#F6E6EC',
          100: '#E9BFD0',
          200: '#DB95B3',
          300: '#CD6A96',
          400: '#C34B82',
          500: '#B92C6F',
          600: '#A0275F',
          700: '#88214F',
          800: '#7D1D3F', // Main accent color
          900: '#591428',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#121416',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};