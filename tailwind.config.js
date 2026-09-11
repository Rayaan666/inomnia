/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        inomnia: {
          black: '#02060B',
          navy: '#07172E',
          navy2: '#091D38',
          blue: '#7c8493',
          muted: '#A7ADB7',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', '"Arial Narrow"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'translateX(-105%) skewX(-16deg)' },
          '100%': { transform: 'translateX(105%) skewX(-16deg)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.55', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(5px)' },
        },
      },
      animation: {
        sweep: 'sweep 0.7s ease',
        scrollPulse: 'scrollPulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
