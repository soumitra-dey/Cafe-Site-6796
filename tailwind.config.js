/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe': {
          100: '#F5E6D3',
          200: '#E6D5BC',
          300: '#A67C52',
          400: '#8B593E',
          500: '#2C1810'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}