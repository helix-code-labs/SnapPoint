/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { teal: '#0f766e', stone: '#fafaf9', amber: '#f59e0b', dark: '#1c1917' }
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
        brand: ['Fredoka', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
