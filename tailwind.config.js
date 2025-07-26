/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {

         backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  },
  animation: {
    pulseSlow: 'pulse 5s infinite',
  },
  
      colors: {
        maroon: '#3C0008',
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
