export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oliveGreen: '#6A8D73',
        amberGold: '#F6BB41',
        black: '#1C1C1C',
        white: '#FFFFFF',
        secondary: '#FFF3E6',
        red: '#D31C52',
        lightBg: '#FFF3E6',

        primary: {
          DEFAULT: '#2A254B',
          100: '#2A254B', // full opacity
          90: 'rgba(42, 37, 75, 0.9)',
          75: 'rgba(42, 37, 75, 0.75)',
          50: 'rgba(42, 37, 75, 0.5)',
          25: 'rgba(42, 37, 75, 0.25)',
          10: 'rgba(42, 37, 75, 0.10)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
