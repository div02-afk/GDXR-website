/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'pixelEmulator': ['pixelEmulator', 'sans-serif']
    },
    extend: {
      screens: {
        '4k': '3840px', // Custom 4k breakpoint
        '2xl': '2040px', // Custom 2xl breakpoint
        'xs': '320px', // Custom xs breakpoint
      },
      dropShadow: {
        '3xl': '150 150px 150px rgba(0, 0, 0, 1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
};
