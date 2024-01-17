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
      },
    },
  },
  plugins: [],
};
