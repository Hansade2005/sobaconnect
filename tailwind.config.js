/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-dark': '#181818',
        'brand-light': '#fafafa',
        'brand-gray': '#6b7280',
        'brand-accent': '#3b82f6',
        'brand-success': '#10b981',
        'brand-warning': '#f59e0b',
        'brand-error': '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}